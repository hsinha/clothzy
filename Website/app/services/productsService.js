//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('productsService', function () {
    this.getProducts = function () {
        return Products;
    };

    this.insertProduct = function (firstName, lastName, city) {
        var topID = Products.length + 1;
        Products.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            city: city
        });
    };

    this.deleteProduct = function (id) {
        for (var i = Products.length - 1; i >= 0; i--) {
            if (Products[i].id === id) {
                Products.splice(i, 1);
                break;
            }
        }
    };

    this.getProduct = function (id) {
        for (var i = 0; i < Products.length; i++) {
            if (Products[i].id === id) {
                return Products[i];
            }
        }
        return null;
    };

    var Products = [
        {
         "id": "1",
         "name": "Levis Blue Denim",
         "imgPath": "img/prods/p1.jpg",
         "store":  "Store XYZ, Hauz Khas Village",
         "price": "1500"
      },
      {
         "id": "2",
         "name": "Pepe Black Jeans",
         "imgPath": "img/prods/p2.jpg",
         "store":  "Store ABC, Hauz Khas Village",
         "price": "1200"
      },
      {
         "id": "3",
         "name": "Pepe Blue Jeans",
         "imgPath": "img/prods/p3.jpg",
         "store":  "Store DEF, Hauz Khas Village",
         "price": "3500"
      },
      {
         "id": "3",
         "name": "Pepe Blue Jeans",
         "imgPath": "img/prods/p4.jpg",
         "store":  "Store DEF, Hauz Khas Village",
         "price": "3500"
      }
    ];

});