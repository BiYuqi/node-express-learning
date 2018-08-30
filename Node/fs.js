const fs = require('fs')

const opt = {
  encoding: 'utf-8'
}
fs.readFile('./me.txt', opt, (err, data) => {
  if (err) {
    return err
  }
  console.log(data)
  console.log(data.match(/m/img))
})
console.log("application is start")