
import fs from 'fs'
let chalk = require('chalk')

async function readfilepromise (filename) {
  // readFile is a Promise, that returns the file content
  return readFile(filename)
}

async function Something (txt) {
  // reverse the string
  let rev = txt.split('').reverse().join('')
  return rev
}
async function SomethingElse () {
  let array = ['a', 'b', 'c', 'd']
  return array
}

mainstream()
async function mainstream () {
  // reads itself from disk
  let txt = await readfilepromise(__filename)
  // show content of file
  console.log(txt)
  // use the content to do something with it
  let reversed = await Something(txt)
  console.log(chalk.red(reversed))
  await SomethingElse()
}

function readFile (filename) {
  return new Promise(
    function (resolve, reject) {
      fs.readFile(filename, 'utf8',
        (error, data) => {
          if (error) {
            reject(error)
          } else {
            resolve(data)
          }
        })
    })
}

/*
// the way to asynchroniously execute a sequence (non blmcking loop)
// example
let docs = [{}, {}, {}];

for (let doc of docs) {
  await db.post(doc);
}
*/
