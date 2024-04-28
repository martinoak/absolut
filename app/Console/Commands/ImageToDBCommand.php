<?php

namespace App\Console\Commands;

use App\Models\Bottle;
use Illuminate\Console\Command;

class ImageToDBCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:image-to-db-command';

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
        $bottles = Bottle::all();

        foreach ($bottles as $bottle) {
            $this->info('Processing bottle ' . $bottle->name . '...');
            $bottle->image = base64_encode(file_get_contents(public_path('images/bottles/' . $bottle->frontPhoto)));
            $bottle->save();
        }
    }
}
