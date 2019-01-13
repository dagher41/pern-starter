require('babel-register')({
  "plugins": [
    [
      "babel-plugin-webpack-loaders",
      {
        "config": "./webpack.config.babel.js",
        "verbose": false
      }
    ]
  ]
});
require('babel-polyfill');

const repl = require('repl');
const babel = require('babel-core');

function preprocess(input) {
  const awaitMatcher = /^(?:\s*(?:(?:let|var|const)\s)?\s*([^=]+)=\s*|^\s*)(await\s[\s\S]*)/;
  const asyncWrapper = (code, binder) => {
    const assign = binder ? `global.${binder} = ` : '';
    return `(function(){ async function _wrap() { return ${assign}${code} } return _wrap();})()`;
  };

  // match & transform
  const match = input.match(awaitMatcher);
  if (match) {
    input = `${asyncWrapper(match[2], match[1])}`;
  }
  return input;
}

function myEval(cmd, context, filename, callback) {
  const code = babel.transform(preprocess(cmd), {
    presets: ['es2015', 'stage-0'],
    plugins: [
      ['transform-flow-strip-types']
    ]
  }).code;
  _eval(code, context, filename, callback);
}


const db = require('./server/models');
const stubber = require('async-repl/stubber');

const replInstance = repl.start({ prompt: 'boobie> ' });
stubber(replInstance);
const _eval = replInstance.eval;
replInstance.eval = myEval;
for (let key in db.default) {
  replInstance.context[key] = db.default[key];
}


