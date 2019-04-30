<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstitutionLevelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('institution_level', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('institution_id')->unsigned()->index();
            $table->integer('level_id')->unsigned()->index();
            $table->string('type_partnership')->nullable();
            $table->timestamps();
        });
        Schema::table('institution_level', function (Blueprint $table) {
            $table->foreign('institution_id')->references('id')->on('institutions')->onDelete('cascade');
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
        Schema::dropIfExists('institution_level');
    }
}
