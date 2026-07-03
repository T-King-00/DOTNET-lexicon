//Week 15: practice
//serialzie and deserialize
using System.Text.Json;


public class Program
{
    public static void Main(string[] args)
    {
        //Deserialize Mobiles objects
        var fileJson = File.ReadAllText("C:\\Users\\tony_\\OneDrive - BTH Student\\lexicon .NET\\exercises\\ExcercisesCode\\Linq\\Linq2\\MOCK_DATA (1).json");
        List<Mobile> objects=JsonSerializer.Deserialize<List<Mobile>>(fileJson);
        
        foreach (var VARIABLE in objects)
        {
            Console.WriteLine("Name: " + VARIABLE.name + ", OS: " + VARIABLE.os + ", Release: " + VARIABLE.release + "");
        }
        Console.WriteLine("");
        
        //using Linq to count mobiles with feature phone as a mobile os.
        
        int featurPhoneCount = objects.Select(x => new Mobile { name = x.name, os = x.os, release = x.release })
            .Where(x=> x.os=="Feature phone")
            .Count(x=> x.os=="Feature phone");

        Console.WriteLine("Feature phone count: " + featurPhoneCount + " ");
        Console.WriteLine("");
        
        //using Linq to find mobiles with feature phone as a mobile os.
        
        List<Mobile> mobilesWzfeaturePhonesAsOs = objects.Select(x => new Mobile { name = x.name, os = x.os, release = x.release })
            .Where(x=> x.os=="Feature phone")
            .ToList();

        Console.WriteLine(" \"Mobiles with feature phone as a mobile os:\" ");
        foreach (var mobile in mobilesWzfeaturePhonesAsOs)
        {
            Console.WriteLine("Name: " + mobile.name + ", OS: " + mobile.os + ", Release: " + mobile.release + "");
        }
        
    }
}

public class Mobile
{
    public  string name { get; set; }
    public  string os { get; set; }
    public  int release { get; set; }
    
}


