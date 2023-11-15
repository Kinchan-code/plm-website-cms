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

    public function store(Request $request){
        $data = $request->validate([
            'name' => 'required|string',
            'user_type' => 'required|in:admin,moderator',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
            'description' => 'required|string',
            'createdOn' => 'required|date|date_format:m/d/Y',
            'lastUpdate' => 'required|date|date_format:m/d/Y',
            
        ]);

        $newuserData = userData::create($data);

        return redirect(route('userdata.index'));
    }
}
