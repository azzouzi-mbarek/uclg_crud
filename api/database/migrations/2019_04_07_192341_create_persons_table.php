<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('image_url')->nullable();
            $table->date('birthday')->nullable();
            $table->string('nationality')->nullable();
            $table->string('profession')->nullable();
            $table->string('sex')->nullable();
            $table->string('study_area')->nullable();
            $table->longText('short_biography')->nullable();
            $table->string('email')->nullable();
            $table->string('number_phone')->nullable();
            $table->integer('academic_level_id')->nullable()->unsigned()->index();
            $table->timestamps();

        });

        Schema::table('persons', function (Blueprint $table) {
            $table->foreign('academic_level_id')->references('id')->on('academic_levels')->onDelete('cascade');;
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
