
function formatString(s: string, toUpper: boolean = true): string {
    //  i  can use this also   return toUpper ? s.toUpperCase() : s.toLowerCase();
    if (toUpper) {
        return s.toUpperCase();
    } else {
        return s.toLowerCase();
    }

}

console.log(formatString("Hello World", false
));


///////**********//// */



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] 
{
     return items.filter(item => item.rating >= 4); 
    
    }

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
 
];

console.log(filterByRating(books));

//****//////////// */

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
               
                                                                           

console.log (concatenateArrays(["a", "b"], ["c"]));      
console.log (concatenateArrays([1, 2], [3, 4], [5]));    


//////////********////////// */


function Vehicle(this: any, make: any, year: any) {
    // Private variables via closure
    var _make = make;
    var _year = year;
  
    this.getInfo = function() {
      return "Make: " + _make + ", Year: " + _year;
    };
  }
  
  function Car(this: any, make: string, year: number, model: string) {
    // Inherit from Vehicle
    Vehicle.call(this, make, year);
  
    // Private variable for model
    var _model = model;
  
    this.getModel = function() {
      return "Model: " + _model;
    };
  }
  
 
  
  var myCar = new Car("Toyota", 2020, "Corolla");
  
  console.log(myCar.getInfo());  
  console.log(myCar.getModel()); 

  //////////***********/////////// */

  function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;  // Return length for strings
    } else {
        return value * 2;     // Return doubled value for numbers
    }
}


console.log(processValue("hello")); 
console.log(processValue(10));  

/////********////////// */

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let mostExpensive = products[0];
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > mostExpensive.price) {
        mostExpensive = products[i];
      }
    }
  
    return mostExpensive;
  }
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  

  
const mostExpensive =  getMostExpensiveProduct(products);  
  console.log(mostExpensive);


//////*******////// */

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    switch (day) {
      case Day.Saturday:
      case Day.Sunday:
        return "Weekend";
      default:
        return "Weekday";
    }
  }
  console.log(getDayType(Day.Friday)); 
  console.log(getDayType(Day.Sunday));  

  /////*******///// */
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Number must be non-negative"));
        } else {
          resolve(n * n);
        }
      }, 1000); 
    });
  }
  squareAsync(4).then(console.log);         
squareAsync(-3).catch(console.error);  



    