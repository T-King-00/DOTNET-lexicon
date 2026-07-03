//Exercise 4
/*
 Write a method that takes a string array and returns the length of the
longest string in the array.
 */

string [] randomWords=
[
   
    "cat",
    "apple",
    "mountain",
    "hi",
    "sun",
    "television",
    "a",
    "tree"
];

int length1= FindLastLongestStringLength(randomWords);
int length2=FindLastLongestStringLengthMethod2(randomWords);
Console.WriteLine("longest string length by method 1 is: "+ length1);
Console.WriteLine($"longest string length by method 2 is: {length2}");

int FindLastLongestStringLength(string []randomWords)
{
    string longestString="";
    foreach (var word in randomWords)
    {
        if (longestString.Length < word.Length)
        {
            longestString = word;
        }
    }
    //Console.WriteLine("Longest string is: "+ longestString + " & length of it is "+ longestString.Length);
    return longestString.Length;
}

int FindLastLongestStringLengthMethod2(string []randomWords)
{
    string longestString="";
    longestString=randomWords.OrderByDescending(x=>x.Length).First();
    //Console.WriteLine("Method 2, Longest string is: "+ longestString + " & length of it is "+ longestString.Length);
    return longestString.Length;
}