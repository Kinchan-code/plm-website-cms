<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Create UserData</h1>

    <form method="post" action="{{route('userdata.store')}}" >
        @csrf
        @method('post')
       
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>

            <label for="user_type">User Type:</label>
                <select id="user_type" name="user_type" required>
                    <option value="moderator">Moderator</option>
                    <option value="admin">Admin</option>
                    
                </select><br>

            <label for="email">Email: </label>
            <input type="email" id="email" name="email" required><br>

            <label for="password">Password: </label>
            <input type="password" id="password" name="password" required><br>

            <label for="description">Description: </label>
            <textarea id="description" name="description" rows="4" cols="50"> </textarea><br>


            <label for="createdOn">Created On: </label>
            <input type="datetime-local" id="createdOn" name="createdOn"><br>

            <label for="lastUpdate">Last Update: </label>
            <input type="datetime-local" id="lastUpdate" name="lastUpdate"><br>

            <input type="submit" value="Submit">
        </div>
    </form>
    
</body>
</html>