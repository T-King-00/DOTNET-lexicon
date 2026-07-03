//Exercise 2 

string[][] users = [["john", "plate"], ["michelle", "bike"], ["lisa",
    "pencil"]];
Console.WriteLine("Enter your username:");
string username = Console.ReadLine();
Console.WriteLine("Enter your password:");
string password = Console.ReadLine();

int userMatch = -1;
userMatch=FindAMatch(username, password);

bool passwordMatch = false;
if (userMatch > -1)
{
    //code changed
    passwordMatch = string.Equals(password, users[userMatch][1], StringComparison.OrdinalIgnoreCase); ;
}
if (passwordMatch)
{
    Console.WriteLine("Success");
}
else
{
    Console.WriteLine("Login failed");
}

int FindAMatch( string? s, string? password1)
{
    for (int i = 0; i < users.Length; i++)
    {
        //code changed : if condition
        if (  string.Equals(users[i][0], username.ToLower(), StringComparison.OrdinalIgnoreCase) )
        {
            userMatch = i;
            return i;
        }
    }
    return -1 ;
}