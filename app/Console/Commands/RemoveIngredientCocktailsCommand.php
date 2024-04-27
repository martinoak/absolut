<?php

namespace App\Console\Commands;

use App\Models\Recipe;
use Illuminate\Console\Command;

class RemoveIngredientCocktailsCommand extends Command
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

        $missingIngredients = 'Galliano';

        /* delete all cocktails that have $missingIngredients inside $recipe->ingredients */
        foreach ($recipes as $recipe) {
            if (str_contains($recipe->ingredients, $missingIngredients)) {
                $recipe->delete();
            }
        }
    }
}
