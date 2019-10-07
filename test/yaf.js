const fs = require('fs')
const path = require('path')
const ini = require('../')
const test = require('tap').test

test('inherit', function (t) {
  const file = fs.readFileSync(path.resolve(__dirname, "./fixtures/yaf.ini"), { encoding: 'utf-8' })
  const config = ini.parse(file)
  t.deepEqual(config.dev, config.prod)
  t.end() 
})