class TelevisionProgram {
    constructor(name, duration) {
      this.name = name;
      this.duration = duration;
    }
  
    play() {
      console.log(`Playing ${this.name}`);
    }
  
    stop() {
      console.log(`Stopped ${this.name}`);
    }
  }
  
  class Movie extends TelevisionProgram {
    constructor(name, duration, director) {
      super(name, duration);
      this.director = director;
    }
  
    getDirector() {
      return this.director;
    }
  }
  
  class News extends TelevisionProgram {
    constructor(name, duration) {
      super(name, duration);
    }
  }
  
  class ArtMovie extends Movie {
    constructor(name, duration, director) {
      super(name, duration, director);
    }
  
    getDirector() {
      return this.director;
    }
  }
  
  class Cartoon extends TelevisionProgram {
    constructor(name, duration, pg) {
      super(name, duration);
      this.pg = pg;
    }
    getPG() {
        return this.pg;
    }
  }
  
  class Advertisement extends TelevisionProgram {
    constructor(name, duration) {
      super(name, duration);
    }
  }
  
  class Director extends TelevisionProgram {
    constructor(name) {
      super(name);
    }
  }

a = new TelevisionProgram("Mitso",1);
b = new Movie("Mitso2",2,"Alina");
c = new News("FakeNews", 1.4);
d = new ArtMovie("OIT", 1.2, "Kostya");
e = new Cartoon("OOP", 2.2, "+13");
g = new Advertisement("OZON", 0.1);
h = new Director("Veronika");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(g);
console.log(h);
