// task_1 Movie Details
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }

  const movies = [
    new Movie("Casino Royale", "Eon Productions", "PG13"),
    new Movie("Ironman", "Marvel Studios", "PG13"),
    new Movie("How To Train Your Dragon", "DreamWorks Animation", "PG"),
    new Movie("Deadpool", "20th Century ", "R"),
    new Movie("Kung Fu Panda", "DreamWorks Animation", "PG"),
  ];
  
  console.log("All Movies");
  movies.forEach(movie => console.log(`${movie.title} --- ${movie.studio} --- ${movie.rating}`));
  
  const pgMovies = Movie.getPG(movies);
console.log("PG Movies");
console.log(pgMovies.map(movie => ({ title: movie.title, studio: movie.studio, rating: movie.rating })));

// -----------------------------------------------------------------------------------------------------------

// Task_2 Circle task
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    
    get Radius() {
      return this.radius;
    }
    
    set Radius(n) {
      this.radius = n;
    }
    
    get Color() {
      return this.color;
    }
    
    set Color(c) {
      this.color = c;
    }
    
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
    
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
    
    toString() {
      return `Circle[radius=${this.radius},color=${this.color}]`;
    }
  }
  
  let obj_1 = new Circle(1.0, "red");
  console.log(obj_1.radius, obj_1.color);

//-----------------------------------------------------------------------------

// task_3 Person Details
class Person {
    constructor(name, age, gender, martial_status, contact, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.martial_status = martial_status;
        this.contact = contact;
        this.email = email;
    }

printDetails() {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Gender:", this.gender);
    console.log("Marital Status:", this.martial_status);
    console.log("Contact:", this.contact);
    console.log("Email:", this.email);

}
}
const person_1 = new Person("Durai Prabhakar", 22, "Male", "Single", "1234567890", "duraiprabhakar007.com");
console.log("Person Details:");
person_1.printDetails();

// ---------------------------------------------------------------------------------------------------------------

//Task_4 Uber Price
class Uber {
    constructor(km, rate = 15) {
      this.km = km;
      this.rate = rate;
    }
  
    setKm(km) {
      this.km = km;
    }
  
    getKm() {
      return this.km;
    }
  
    cost() {
      const totalPrice = this.km * this.rate;
      return totalPrice;
    }
  }
  
  const Total = new Uber(100);
  console.log("Total Uber_cost:", Total.cost());
  

