<?php

namespace App\Console\Commands;

use App\Models\Recipe;
use Illuminate\Console\Command;

class RemoveCocktailsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:remove-ingredient-cocktails-command';

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
        $recipes = Recipe::all();

        foreach ($recipes as $recipe) {
            if ($recipe->rating < 2.5) {
                $recipe->delete();
            }
        }
    }
}
