<?php

use Grimzy\LaravelMysqlSpatial\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('iso_a3')->nullable();
            $table->string('iso_a2')->nullable();
            $table->integer('iso_n3')->nullable();
            $table->text('description')->nullable();
            $table->string('capital')->nullable();
            $table->string('devise')->nullable();
            $table->string('indicatif_tele')->nullable();
            $table->string('drapeau_url')->nullable();
            $table->geometry('geom')->default(null)->nullable();
            $table->integer('region_id')->nullable()->unsigned()->index();
            $table->timestamps();

        });

        Schema::table('countries', function (Blueprint $table) {
            $table->foreign('region_id')->references('id')->on('regions')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('countries');
    }
}
