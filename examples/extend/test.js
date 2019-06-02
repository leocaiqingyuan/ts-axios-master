let test = function(){}

test.prototype.log = function (a) {
  console.log(a)
}

let t = new test()
t('0')
