import {a_val, b_val} from './module.js';

function readFile(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}

async function test() {
    let a = await readFile('./.js')
            .catch (e => console.log(e));
    let b = await readFile('./a.js')
            .catch (e => console.log(e));

    console.log(`read finished, total ${a.length + b.length} characters`);
}

console.log(a_val);