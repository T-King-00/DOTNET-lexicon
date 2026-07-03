// See https://aka.ms/new-console-template for more information

using System.Text.Json;
using lINQ;

class Program
{
    public static void Main(string[] args)
    {
        string dataPath=
            "C:\\Users\\tony_\\OneDrive - BTH Student\\lexicon .NET\\exercises\\ExcercisesCode\\Linq\\LINQ\\concert_data.json";
        string concertData = File.ReadAllText(dataPath);
        
        
        //Deserialize Concerts objects
        List<Concert> concerts=JsonSerializer.Deserialize<List<Concert>>(concertData);
        Console.WriteLine(concerts.Count);
        
        //using linq to Return a new List<Concert> ordered by the Date value, going from the
        //present date.
        Console.WriteLine(" \"Concerts ordered by date from present date.\" ");

        List<Concert> concertsOrderedByDate = concerts
           
            .OrderBy(c => Math.Abs(c.Date.Subtract(DateTime.Now).TotalDays))
            .ToList();
        
        Concert.PrintConcerts(concertsOrderedByDate);

        Console.WriteLine("");
        
        //Return a new List<Concert> with all concerts of a ReducedVenue
        //(true).
        Console.WriteLine(" \"Concerts with reduced venue\" ");
        
        List<Concert> reducedVenueConcerts = concerts
            .Where(c=>c.ReducedVenue==true)
            .ToList();
        Concert.PrintConcerts(reducedVenueConcerts);
        Console.WriteLine("");
        
        //Return a new List<Concert> with all concerts during 2024.
        
        Console.WriteLine(" \"Concerts happened during 2024\" ");
        List<Concert> concertsDuring2024=concerts
            .Where(c=>c.Date.Year==2024)
            .ToList();
        Concert.PrintConcerts(concertsDuring2024);
        Console.WriteLine("");

        
        //4.Return a new List<Concert> with the five biggest projected sales
        // figures (the FullCapacitySales value).
        Console.WriteLine(" \"Top 5 Concerts with biggest sales \" ");
        
        List<Concert> concertsWzBiggestSales = concerts
            .OrderByDescending(c => c.FullCapacitySales)
            .Take(5).ToList();
        Concert.PrintConcerts(concertsWzBiggestSales);

        List<Concert> topsaleConcert = concerts.OrderBy(c => c.FullCapacitySales).ToList();
        Console.WriteLine("Top sale concert: " + topsaleConcert[0].Id + "");
        
        Console.WriteLine("");
        /*Return a new List<Concert> with all concerts taking place on a Friday.
        The Date (because it is of DateTime) has a property called DayOfWeek.
        There is also an enumeration called the same thing, DayOfWeek.
        */
        Console.WriteLine(" \"Concerts taking place on friday \" ");
        DayOfWeek friday = DayOfWeek.Friday;
        List<Concert> concertsOnFriday = concerts
            .Where(c => c.Date.DayOfWeek == friday)
            .ToList();
        Concert.PrintConcerts(concertsOnFriday);
        
        
        
        
    }
    
}