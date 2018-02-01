// not really a jasmine test; run this file and check manually

const writeCsv = require('./write-csv')
let testArr = [
  {a: 1, b: 2, c: 3},
  {a: 'a', b: 'b,withcomma', c: 'c\nwithnewline', d: 'd\n\nwithtwonewlines'},
  {a: 7, b: 8, c: 'c\r\nwithwindowslineendings'}
]
let testFile = 'test.csv'

writeCsv(testFile, testArr)
