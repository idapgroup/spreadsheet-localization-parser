const tsNode = require('ts-node');

tsNode.register({
  files: true,
  transpileOnly: true,
  project: './tests/tsconfig.spec.json'
});
