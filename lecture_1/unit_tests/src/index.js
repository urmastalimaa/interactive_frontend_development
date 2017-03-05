import {associate} from './PureFunctions';

const baseObj = {a: 'foo'};
const newObj = associate(baseObj, 'b', 'bar');

document.body.innerHTML = `<h1>New object: ${JSON.stringify(newObj)}</h1>`
