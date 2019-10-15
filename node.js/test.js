Person = {
    fuck: () => {
        console.log('fuck');
    },
    age: 10
};

Person.sayAge = function() {
    console.log(this.age);
}

Person.sayAge();