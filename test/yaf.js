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

test('encode', function(t) {
  const file = '[dev]\n'
             + 'a=/stat/rpc/common\n'
             + 'b=1000\n'
             + 'c=1000\n'
             + 'd[]=1\n'
             + 'd[e]=1'

  const config = ini.parse(file)
  const configStr = ini.encode(config)
  console.log(file)
  console.log(configStr)
  t.deepEqual(file, configStr)
  t.end()
})
