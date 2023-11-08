<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('userData', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->integer('user_type');
            $table->string('name');
            $table->string('email');
            $table->string('password');
            $table->string('description');
            $table->timestamp('createdOn')->useCurrent();
            $table->timestamp('lastUpdate')->useCurrent();
            $table->string('createdBy');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('userData');
    }
};
