<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePopulationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('populations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('population');
            $table->integer('level_id')->unsigned()->index();
            $table->timestamps();
        });
        Schema::table('populations', function (Blueprint $table) {
            $table->foreign('level_id')->references('id')->on('levels');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('populations');
    }
}
