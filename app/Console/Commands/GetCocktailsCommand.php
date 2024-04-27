<?php

namespace App\Console\Commands;

use App\Models\Recipe;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class GetCocktailsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:cocktails';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $sitemap = file_get_contents('https://www.absolutdrinks.com/sitemap-en.xml');

        $url = simplexml_load_string($sitemap);

        $data = [];
        foreach ($url->url as $item) {
            $data[] = (string) $item->loc;
        }

        $cocktailPagesOnly = array_filter($data, function ($url) {
            return  !str_contains($url, '/drinks/in/') &&
                    !str_contains($url, '/drinks/withtype/') &&
                    !str_contains($url, '/drinks/not/') &&
                    !str_contains($url, '/drinks/tasting/') &&
                    !str_contains($url, '/drinks/colored/') &&
                    !str_contains($url, '/drinks/occasion/') &&
                    !str_contains($url, '/drinks/collection/') &&
                    !str_contains($url, '/drinks/with/') &&
                    !str_contains($url, 'policy') &&
                    !str_contains($url, 'terms');
        });

        foreach ($cocktailPagesOnly as $recipePage) {
            $guzzle = new \GuzzleHttp\Client();
            $res = $guzzle->get(trim($recipePage));
            $recipeHTML = $res->getBody()->getContents();

            if (!str_contains($recipeHTML, '<h3 class="text-base md:text-2xl font-bold text-blue">Ingredients</h3>')) {
                continue;
            }

            $dom = new \DOMDocument;
            @$dom->loadHTML($recipeHTML);
            $xpath = new \DOMXPath($dom);

            $title = $xpath->query('//h1')->item(0)->textContent;
            $thumbnail = $xpath->query('//meta[@property="og:image"]')->item(0)?->getAttribute('content');
            $ytID = $xpath->query('//div[@data-youtube-id]')->item(0)?->getAttribute('data-youtube-id');
            $description = $xpath->query('//h3/following-sibling::p')->item(0)?->textContent;
            $rating = preg_match('/<span class="ml-1 mt-1 md:ml-3">(.*) from \d* votes<\/span>/', $recipeHTML, $matches) ? $matches[1] : null;
            $drinkParts = [];
            $nodes = $xpath->query('//ul[@class="drink-recipe"]/li');
            foreach ($nodes as $node) {
                $span = $xpath->query('./span[1]', $node)->item(0);
                $a = $xpath->query('./a', $node)->item(0);
                if ($span && $a) {
                    $part = trim($span->textContent);
                    $ingredient = trim($a->textContent);
                    $drinkParts[] = [$part => $ingredient];
                } elseif ($a) {
                    $ingredient = trim($a->textContent);
                    $drinkParts[] = [$ingredient];
                }
            }

            if (Recipe::where('name', $title)->exists()) {
                $this->info('Recipe already exists: ' . $title);
            } else {
                $this->info('Creating recipe: ' . $title);

                $recipe = new Recipe();
                $recipe->name = $title;
                $recipe->slug = Str::slug($title);
                $recipe->image = $thumbnail;
                $recipe->video_href = 'https://youtu.be/' . $ytID;
                $recipe->description = $description;
                $recipe->ingredients = json_encode($drinkParts);
                $recipe->rating = $rating;
                $recipe->save();
            }
        }
    }
}
