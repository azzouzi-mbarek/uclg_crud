<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIndicatorLevelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('indicator_level', function (Blueprint $table) {
            $table->float('note');
            $table->integer('indicator_id')->unsigned()->index();
            $table->integer('level_id')->unsigned()->index();
            $table->timestamps();
        });
        Schema::table('indicator_level', function (Blueprint $table) {
            $table->foreign('indicator_id')->references('id')->on('indicators')->onDelete('cascade');
            $table->foreign('level_id')->references('id')->on('levels')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('indicator_level');
    }
}
