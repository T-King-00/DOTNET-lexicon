//Week 15: practice
//linq can be used on any data source

//ex1 , finding highest score 
int[] scores = [50, 60, 70, 55, 24];
int maxScoreUsingDotMax= scores.Max();
Console.WriteLine($"The highest score using var.Max(scores)  is {maxScoreUsingDotMax}");
var hightestScoreValue= from score in scores where score >60 select score;
var highest = hightestScoreValue.GetEnumerator();
while (highest.MoveNext())
{
    var x = highest.Current;
    Console.WriteLine($"The highest score using linq is {x}");
}










//bool moveNext = hightest.MoveNext();
//
// foreach (var VARIABLE in hightestScoreValue)
// {
//     Console.WriteLine( VARIABLE);
// }