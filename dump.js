const amount = 8

if(amount < 10){
  console.log("amount is a small number");
} else {
  console.log("amount is a big number")
}
console.log(`This is my first node app`)


// LESSON 2
console.log(__dirname);
console.log(__filename);


setInterval(() => {
  console.log("hello world");
}, 1000);

//LESSON 3
//Modules in Node. Modules are encapsulated code
// every file in node is a module

const secret = 'super secret'
const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
  console.log(`hello there ${name}`);
}

sayHi('susan')
sayHi(john)
sayHi(peter)


// LESSON 4
//Modules in Node. Modules are encapsulated code
// every file in node is a module

const names = require('./names')
const sayHi = require('./utils')
const data = require('./items')

require('./mindgranade')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)


// lesson 5  OS Modules
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);


//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds `);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);

// lesson 6 working with path module
 const path = require('path')

console.log(path.sep);

const filepath = path.join('/content', 'subfolder', 'text.txt' )
console.log(filepath);

// getting only the text.txt
const base = path.basename(filepath)
console.log(base);


//providing an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')

console.log(absolute);

//lesson 7. synchronous or blocking READ AND WRITE FILE WITH NODE

const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync(
              './content/writeResult-sync.txt', 
              `here is the result: ${first}, ${second}`, {flag : 'a'}
              )

// LESSON 8 ASYNC or NON-Blocking READ AND WRITE
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=> {
  if(err){
    console.log(err);
  }
  // console.log(result);
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if(err){
      console.log(err);
    }
    const second = result

    writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=>{
      if(err){
        console.log(err);
        return
      }
      console.log(result);
    })    
  })
})

// LESSON 9. WRITING ON A BROWSER
const http = require('http')
const server = http.createServer((req, res)=>{
 res.write(`hello to you babe`)
 res.end()
})

server.listen(5000)

// LESSON 10
const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
       res.end(`This is the home page`); 
       return;
    }

    if(req.url === '/about'){
      res.end('this is the about page');
      return;
    }

    res.end(`
    <h1>OOPSS!!!</h1>
    <p>we can't find the page you are looking for</p>
    <a href="/">Go Back Home</a>
   `)


})

server.listen(5000)


 