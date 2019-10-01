const events = require('events');

class Person extends events.EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
};

let ly = new Person('liuyang');
let dkm = new Person('dengkaiming');
let oyzh = new Person('ouyangzehao');

let person = [ly, dkm, oyzh];

person.forEach( person => {
    person.on('speak', function(message) {
        console.log(`${person.name} say ${message}`);
    });
});

ly.emit('speak', 'hi');
dkm.emit('speak', 'hello');
oyzh.emit('speak', 'fuck');