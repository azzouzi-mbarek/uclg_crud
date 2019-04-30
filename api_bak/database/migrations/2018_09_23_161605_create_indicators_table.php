<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIndicatorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('indicators', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('category_indicator_id')->unsigned()->index();

            $table->timestamps();
        });
        Schema::table('indicators', function (Blueprint $table) {
            $table->foreign('category_indicator_id')->references('id')->on('category_indicators')->onDelete('cascade');

        });

        }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('indicators');
    }
}
