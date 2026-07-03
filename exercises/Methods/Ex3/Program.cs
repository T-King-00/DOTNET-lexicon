// Exercise3 
//method extraction

string[][] users = [["john", "plate"], ["michelle", "bike"], ["lisa",
    "pencil"]];

//modified code
string[] userData= GetUserNameAndPassword();
string username = userData[0];
string password = userData[1];


int userMatch = -1;

//modified code
userMatch=FindUserNameMatch(username);
bool passwordMatch = ValidateUserPassword(userMatch,password);
IsLoggedIn(passwordMatch);


void IsLoggedIn(bool passwordMatch)
{
    if (passwordMatch)
    {
        Console.WriteLine("Success");
    }
    else
    {
        Console.WriteLine("Login failed");
    }
    
}

string[] GetUserNameAndPassword()
{
    string [] user= new string[2];
    Console.WriteLine("Enter your username:");
    user[0] = Console.ReadLine();
    Console.WriteLine("Enter your password:");
    user[1] = Console.ReadLine();
    return user;
}

bool ValidateUserPassword(int userMatch,string inputPassword)
{
    bool passwordMatch = false;
    if (userMatch > -1)
    {
        passwordMatch = inputPassword.ToLower() == users[userMatch]
            [1];
    }
    return passwordMatch;
}

int FindUserNameMatch(string s)
{
    for (int i = 0; i < users.Length; i++)
    {
        if (users[i][0] == username.ToLower())
        {
            userMatch = i;
            return i;
        }
    }

    return -1;
}
