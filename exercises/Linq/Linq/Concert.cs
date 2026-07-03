namespace lINQ;

public class Concert
{
    public int Id { get; set; }
    public bool ReducedVenue{ get; set; }
    public DateTime Date{ get; set; }
    public string Performer { get; set; }
    public int BeginsAt{ get; set; }
    public int FullCapacitySales{ get; set; }


    public static void PrintConcerts(IEnumerable<Concert> concerts)
    {    int i = 1;
        foreach (var concert in concerts)
        {
            Console.WriteLine(i + ":  , Concert Id: " + concert.Id + " , Date: " + concert.Date + " , Performer: " + concert.Performer + "  " +
                              ", ReducedVenue: " + concert.ReducedVenue + "" + " , Capacity: " + concert.FullCapacitySales + "");
            i++;
        }
        
    }
}