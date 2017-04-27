const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

global.chai = chai;
global.expect = chai.expect;
global.sinon = sinon;

chai.use(chaiEnzyme());
chai.use(sinonChai);

require('babel-register')({
  babelrc: false,
  presets: ['es2015', 'react'],
  plugins: ['transform-object-rest-spread']
});
