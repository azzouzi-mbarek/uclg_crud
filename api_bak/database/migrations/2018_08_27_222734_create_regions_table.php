<?php

use Grimzy\LaravelMysqlSpatial\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateRegionsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('regions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->geometry('area')->default(null)->nullable();
            $table->timestamps();
        }
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('regions');
    }
}
