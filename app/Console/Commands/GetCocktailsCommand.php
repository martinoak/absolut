<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

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
    public function handle()
    {
        /* get sitemap */
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
                    !str_contains($url, '/drinks/with/');
        });

        $guzzle = new \GuzzleHttp\Client();

        $res = $guzzle->get(trim($cocktailPagesOnly[count($cocktailPagesOnly) - 1]));

        $recipeHTML = $res->getBody()->getContents();

        preg_match('/<h1 class=".*">([a-zA-Z\s]*)<\/h1>/', $recipeHTML, $title);

        var_dump($title[1]);
    }
}
