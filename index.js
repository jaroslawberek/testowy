function Point3D(x, y, z) {

    if (!(this instanceof Point3D)) {
        return new Point3D(x, y, z);
    }
    this.x = x;
    this.y = y;
    this.z = z;

    this.show = function () {                                     //ta funkcja nie jest w prototypie
        console.log('' + this.x + " " + this.y + " " + this.z);
    }

}

Point3D.prototype.getAll = function () {
    return "Point All" + this.x;
}

var human = {
    name: "",
    age: 0,
    getAge: function () { // funkcje sa w prototypach
        return this.age;
    },
    getName: function () {
        return this.name;
    }
}

human.getAll = function () { // funkcja jest w prototypach ale nie uzywamy prototype do dodania jak wyzej
    return "All";
}

// var czlek = Object.create(human);
// czlek.getAll = function(){
//     return 'fun2';
// }
// //var czlek = Object.assign({},human);
// czlek.age  = 12;
// czlek.name = "Jarek";
// czlek.dupa = "dupka"
// if(czlek.hasOwnProperty("name")){
//    console.log(czlek.getAge()); 
//    console.log(czlek.getName()); 
//    console.log(czlek);
//    console.log(czlek.prototype);
//    console.log(czlek.getAll());
// }

// var t = Object.create(czlek)

// console.log(t.dupa);
// console.log(human.prototype);


var y = new Point3D(13, 4, 54);
y.y = 7;
console.log(y instanceof Point3D);
// console.log(Object.getPrototypeOf(y));
var q = Object.create(y)
console.log(q instanceof Point3D);
// console.log(Object.getPrototypeOf(q));
//y.show("ggg");
//console.log(y.getAll());
//console.log(y);

// class Klasa{

//      #a = 0;
//      #b = 0;
//      static f=0
//     constructor(a,b){
//         this.#a = a;
//         this.#b = b;
//     }

//     get a(){
//         return this.#a;
//     }

//     get b(){
//         return this.#b;
//     }

//     set a(_a){
//         return this.#a = _a;
//     }

//     set b(_b){
//         return this.#b = _b;
//     }

//     getAll(){
//         return ` klasa ALL  + ${this.#anyFun()} Kutafony`;
//     }
//     #anyFun(){
//         return "private anyFun !!"
//     }
// };

// var v = new Klasa(5,6);
// v.a = 55
// Klasa.f = 90;
// console.log(v.a);
// console.log(v.getAll());
// console.log(v.constructor);
// console.log(`static f=${Klasa.f}`);

