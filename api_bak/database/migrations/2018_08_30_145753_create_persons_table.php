<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('persons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image_url')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->date('birthday')->nullable();
            $table->string('nationality')->nullable();
            $table->string('sex')->nullable();
            $table->integer('academic_level_id')->nullable()->unsigned()->index();
            $table->string('study_area')->nullable();
            $table->longText('short_biography')->nullable();
            $table->string('email')->nullable();
            $table->string('number_phone')->nullable();
            $table->timestamps();

        });

        Schema::table('persons', function (Blueprint $table) {
            $table->foreign('academic_level_id')->references('id')->on('academic_levels');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('persons');
    }
}
