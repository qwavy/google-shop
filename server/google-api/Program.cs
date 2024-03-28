using System.Runtime.CompilerServices;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<MyDb>(opt => opt.UseInMemoryDatabase("Users"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors();

// auth

app.MapGet("/users", async (MyDb db) => 
    await db.Users.ToListAsync());

app.MapPost("/register", async (User user, MyDb db ) =>
{
    db.Users.Add(user);
    await db.SaveChangesAsync();

    return Results.Created($"user created {user.Email}", user);
});

app.MapPost("/login", (User user, MyDb db) =>
{
    foreach (var elem in db.Users)
    {
        if (elem.Email == user.Email)
        {
            if(elem.Password == user.Password){
                return Results.Ok("success login");
            }
            else{
                return Results.NotFound("password not correct");
            }
        }
    };
    return Results.NotFound(db.Users);
});

// products
app.MapGet("/products" , async (MyDb db) => 
    await db.Products.ToListAsync()
);

app.MapGet("/products/{id}" , async (int id , MyDb db) => 
    await db.Products.FindAsync(id)
        is Product product
            ? Results.Ok(product)
            : Results.NotFound()
);

app.MapGet("/products/filter/{filterMethod}" , async (string filterMethod , MyDb db) =>
{   
    Dictionary<string, object> filterMethods = new Dictionary<string, object>();

    filterMethods["phones"] = filterByPhones();

    static List<string> filterByPhones(){
// дописать фильтрацию для категории phones
// JS const filterd = db.Products.filter((elem) => elem.category = "phone")
        // List<string> = db.Products.FindAll

        return new List<string>() {}
    }

});


app.MapPost("/products/add" , async ( Product product, MyDb db) => {
    db.Products.Add(product);
    await db.SaveChangesAsync();
    return Results.Created($"{product.Name} created" ,  product);
});


// cart
app.MapGet("/cart/{userId}/get" , async (int userId, MyDb db) => {
    List<CartProduct> objectsList = new List<CartProduct>();


    foreach(var elem in db.CartProducts)
    {
        if(elem.UserId == userId){
            objectsList.Add(elem);
        }
    }

    return Results.Ok(objectsList);
});

app.MapPost("/cart/{userId}" , async ( int userId, CartProduct cartProduct , MyDb db) => {
    db.CartProducts.Add(cartProduct);
    await db.SaveChangesAsync();
    return Results.Ok($"created {cartProduct.Id} for {cartProduct.UserId}");
});

app.MapDelete("/cart/{userId}/{productId}", async (int userId , int productId , MyDb db) => {
    foreach(var elem in db.CartProducts)
    {
        if(elem.UserId == userId)
        {
            if(elem.Id == productId)
            {
                db.CartProducts.Remove(elem);
            }
        }
    }
    await db.SaveChangesAsync();
    return Results.Ok($"deleted {productId} for {userId}");
});

app.Run();