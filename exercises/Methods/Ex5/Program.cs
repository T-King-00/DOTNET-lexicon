//Exercise 5
/* Write a method that takes three int values, adds the first two numbers
together, then compares the sum with the third number and if the sum is
bigger than the third number, returns true, otherwise false.*/

int x;
int y;
int z;

Console.WriteLine("Enter three numbers");
x = int.Parse(Console.ReadLine());
y = int.Parse(Console.ReadLine());
z = int.Parse(Console.ReadLine());

bool greaterThanThird = IsSumGreaterThanThird(x, y, z);
Console.WriteLine("The sum of the first two number is greater than third ? "+greaterThanThird);

bool IsSumGreaterThanThird(int x, int y, int z)
{
    return (x + y )> z ;
}
