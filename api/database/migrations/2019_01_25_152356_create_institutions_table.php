<?php

use Grimzy\LaravelMysqlSpatial\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateInstitutionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('institutions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('logo')->nullable();
            $table->string('acronym')->nullable();
            $table->longText('description')->nullable();
            $table->year('foundation_year')->nullable();
            $table->string('country_seat')->nullable();
            $table->string('organe_tutelle')->nullable();
            $table->string('areas_intervention')->nullable();
            $table->string('target_beneficiary')->nullable();
            $table->string('web_site')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('localisation')->nullable();
            $table->text('address')->nullable();
            // $table->geometry('localisation')->default(null)->nullable();
            $table->integer('institution_category_id')->nullable()->unsigned()->index();
            $table->foreign('institution_category_id')->references('id')->on('institution_categories');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('institutions');
    }
}
