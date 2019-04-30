<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLevelPersonTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('level_person', function (Blueprint $table) {
//            $table->increments('id');
            $table->integer('person_id')->unsigned()->index();
            $table->integer('level_id')->unsigned()->index();
            $table->integer('category_person_id')->unsigned()->index();
            $table->string('function')->nullable();
            $table->string('status')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();

            $table->timestamps();
        });
        Schema::table('level_person', function (Blueprint $table) {
            $table->foreign('person_id')->references('id')->on('persons')->onDelete('cascade');
            $table->foreign('level_id')->references('id')->on('levels')->onDelete('cascade');
            $table->foreign('category_person_id')->references('id')->on('category_persons')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('level_person');
    }
}
