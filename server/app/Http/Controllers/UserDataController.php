<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;

class UserDataController extends Controller
{
    public function getUserData($userId)
    {
        // Find the user data by userId
        $userData = UserData::where('userId', $userId)->first();

        if (!$userData) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($userData, 200);
    }

    public function createUser(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'userId' => 'required|unique:userData',
            'user_type' => 'required',
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'description' => 'required',
        ]);

        // Create the user
        $userData = UserData::create($validatedData);

        return response()->json($userData, 201);
    }
}
