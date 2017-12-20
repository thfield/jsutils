const nestedFind = require('../nestedFind')
const d3 = require('d3')

// example data from http://learnjsdata.com/group_data.html
var expenses = [{'name': 'jim', 'amount': 34, 'date': '11/12/2015'},
  {'name': 'carl', 'amount': 120.11, 'date': '11/12/2015'},
  {'name': 'jim', 'amount': 45, 'date': '12/01/2015'},
  {'name': 'stacy', 'amount': 12.00, 'date': '01/04/2016'},
  {'name': 'stacy', 'amount': 34.10, 'date': '01/04/2016'},
  {'name': 'stacy', 'amount': 44.80, 'date': '01/05/2016'}
]

describe('nestedFind', function () {
  it('finds values of a single nested key', function () {
    let expensesByName = d3.nest()
          .key(function (d) { return d.name })
          .entries(expenses)

    let res = nestedFind(expensesByName, 'jim')
    let expected = [
      {name: 'jim', amount: 34, date: '11/12/2015'},
      {name: 'jim', amount: 45, date: '12/01/2015'}
    ]
    expect(res).toEqual(expected)
  })

  it('finds values of a single nested key that has been rolled up', function () {
    let expensesByName = d3.nest()
          .key(function (d) { return d.name })
          .rollup(function (v) { return d3.sum(v, function (d) { return d.amount }) })
          .entries(expenses)

    let res = nestedFind(expensesByName, 'jim')

    expect(res).toEqual(79)
  })

  it('finds a doubly nested key', function () {
    var expensesByName = d3.nest()
      .key(function (d) { return d.name })
      .key(function (d) { return d.date })
      .entries(expenses)
    let res = nestedFind(expensesByName, 'stacy', '01/04/2016')
    let expected = [
      {'name': 'stacy', 'amount': 12.00, 'date': '01/04/2016'},
      {'name': 'stacy', 'amount': 34.10, 'date': '01/04/2016'}
    ]
    expect(res).toEqual(expected)
  })
})
