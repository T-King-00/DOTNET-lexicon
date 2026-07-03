
Console.WriteLine("Enter your password:");

string password = Console.ReadLine();
bool passwordMatch = ConvertPasswordTolower();

if (passwordMatch)
{
    Console.WriteLine("Success");
}
else
{
    Console.WriteLine("Login failed");
}



bool ConvertPasswordTolower()
{
    return password.ToLower()== "pencil";
}