class SuperString {
    str;
    constructor(str) {
      this.str = str
    }
  
    length() {
      return this.str.length;
    }
  
    contains(char) {
      return this.str.includes(char);
    }
  
    replace(oldChar, newChar) {
      return this.str.replace(oldChar, newChar);
    }

    get() {
        return this.str;
    }
    
    set(newString) {
        this.str = newString;
    }
  }
  
arr = [];
arr[0] = new SuperString("hi");
arr[1] = new SuperString("hello");
arr[2] = new SuperString("olleh");
arr[3] = new SuperString("ih");

console.log(arr[0].length())
console.log(arr[1].contains("i"))
console.log(arr[2].replace("h","a"))

function laba(arr, n, word){

    for(let i = 0; i < arr.length; i++){

        if(arr[i].length() === n){
            console.log("списки строк длинны = " + n + ":")
            console.log(arr[i]);
        }
    }
    
    for(let i = 0; i < arr.length; i++){

        if(arr[i].get() === word){
            console.log("списки строк которые содержат слово " + word)
            console.log(i +" "+ arr[i].get());
        }
    }
}

laba(arr, 5, "hi")