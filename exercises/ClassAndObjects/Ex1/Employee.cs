namespace Ex1;

public class Employee
{
    decimal salary;
    // two different constructors , (overloading)
    public Employee(decimal salary)
    {
        this.salary = salary;
    }

    public Employee()
    {
        
    }
    
    
    public decimal IncomeTax()
    {
       
        return this.salary * 0.3m  * (20-VacationDays())/20m ;
    }

    private decimal VacationDays()
    {
        return 5;
    }
}