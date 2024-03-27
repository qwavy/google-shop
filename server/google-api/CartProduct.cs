public class CartProduct
{
    public int Id {get;set;}
    public int UserId {get;set;}
    public string Name { get; set; } = string.Empty;
    public double Price { get; set; }
    public string Category { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;
}