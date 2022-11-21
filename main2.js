
// import { Sucursal } from './js/herencia/Sucursal'
// console.log("Hello world".toUpperCase());
// console.log(new Date());
// console.log(new String("Hola Maicol"));
// console.log(new Array());
// console.log(new Number(4455));
// console.log(new Boolean(true));
// console.log(new Object());
// console.log([]);
// console.log({});
// console.log(typeof new RegExp());
// // -> Datos primitivosS
// console.log(typeof "Holle world");
// console.log(typeof 4000);
// console.log(typeof  false);




// const sucursal = new Sucursal()
// console.log('sucursal :>> ', sucursal);

const userFake = {
    name: "Andrea",
    lastName: "Hernandez",
    age: 30,
    hobbies: ["read", "programming", "run"],
    address: {
        street: "some street",
        city: "Armenia"
    },
    showFullName: function () {
        console.log('this :>> ', this.name);
        return `${this.name} ${this.lastName}`
    }
}

// console.log('user.start :>> ', user.showFullName());
// console.log(user);

const account = {
    number: "4455111366",
    amount: 100,
    deposit(quantity) {
        this.amount += quantity
    },
    withdraw(quantity) {
        this.amount -= quantity
    }
}

account.deposit(100)
account.deposit(50)
account.deposit(10)
// console.log('account :>> ', account);
account.withdraw(200)
account.withdraw(10)

// console.log('account :>> ', account);



const cat = {
    name: 'Lola',
    age: 2,
    breed: 'Ragdoll'
}

const { name, ...rest } = cat
// console.log('rest :>> ', rest);


/**
 * Herencia
 */


