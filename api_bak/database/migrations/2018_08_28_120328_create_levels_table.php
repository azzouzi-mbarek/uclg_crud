<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLevelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('levels', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('country_id')->nullable()->unsigned()->index();
            $table->integer('stage')->nullable()->unsigned();
            $table->integer('category_level_id')->nullable();
            $table->integer('level_id')->nullable()->unsigned()->index();
            $table->geometry('shape')->default(null)->nullable();
            $table->string('image_url')->nullable();
            $table->string('web_site')->nullable();
            $table->string('email')->nullable();
            $table->string('number_phone')->nullable();
            $table->string('address')->nullable();
            $table->integer('population')->nullable();
            $table->integer('census_date_population')->nullable();
            $table->timestamps();
        });
        Schema::table('levels', function (Blueprint $table) {
            $table->foreign('country_id')->references('id')->on('countries');
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
        Schema::dropIfExists('levels');
    }
}
