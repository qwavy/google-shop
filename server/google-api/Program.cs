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



// cart
// полчение всех корзин
// app.MapGet("/cart", async ( MyDb db) =>
//     await db.Carts.ToListAsync());

// получение корзины определенного пользователя
app.MapGet("/cart/{userId}" , async (int userId, MyDb db) => {
    List<CartProduct> objectsList = new List<CartProduct>();


    foreach(var elem in db.CartProducts)
    {
        if(elem.UserId == userId){
            objectsList.Add(elem);
        }
    }

    return Results.Ok(objectsList);

});

// добавить товар в корзину определенного пользователя
// app.MapPost("/cart/{userId}/{add}" , async (int userId,))

app.Run();