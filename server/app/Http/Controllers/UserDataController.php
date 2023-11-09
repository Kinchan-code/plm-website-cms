<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\userData;

class UserDataController extends Controller
{
    public function index(){
        return view('userdata.index');
    }

    public function create(){
        return view('userdata.create');
    }

    public function storeUser(Request $resquest){
       $data = request->validate([
        'name' => 'required'|String ,
        'user_type' => 'required',
        'email' => 'required'|Email,
        'password' => 'required'|Password,
        'description'=> 'required'|String,
        'createdBy'=> 'required',
        'createdOn'=> 'required',
        'lastUpdate'=> 'required',
       ]);

       $newUser = userData::create($data);

       return redirect(route('userdata.index'));
    }
    
    
}
