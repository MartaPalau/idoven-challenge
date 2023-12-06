const sevenBin = require ('7zip-bin');
const { extractFull } =  require('node-7z');


const pathTo7zip = sevenBin.path7za;
const seven = extractFull('./utils/14-29-05_data_data.7z', './utils/output', {
  $bin: pathTo7zip
})

seven.on('data', function (data) {
  console.log("DATA", data)
  doStuffWith(data) //? { status: 'extracted', file: 'extracted/file.txt" }
})

seven.on('progress', function (progress) {
  console.log("progress", progress)
  doStuffWith(progress) //? { percent: 67, fileCount: 5, file: undefinded }
})

seven.on('end', function () {
  console.log("end")
    // end of the operation, get the number of folders involved in the operation
    seven.info.get('Folders') //? '4'
})

seven.on('error', (err) => console.log("ERR", err))



// const Seven = require("node-7z");

// // myStream is a Readable stream
// const myStream = Seven.extractFull('14-29-05_data_data.7z', 'output', {
//   $progress: true
// })

// myStream.on('data', function (data) {
//   doStuffWith(data) //? { status: 'extracted', file: 'extracted/file.txt" }
// })

// myStream.on('progress', function (progress) {
//   doStuffWith(progress) //? { percent: 67, fileCount: 5, file: undefinded }
// })

// myStream.on('end', function () {
//     // end of the operation, get the number of folders involved in the operation
//   myStream.info.get('Folders') //? '4'
// })

// myStream.on('error', (err) => console.log(err))


// const path = require("path");
// const fs = require("fs");
// const { extractFull } = require("node-7z-forall");

// const dirPath = path.join(__dirname);
// console.log("DIR", __dirname)

// fs.readdir(dirPath, function (err, files) {
//   const txtFiles = files.filter(el => path.extname(el) === '.7z')
//   console.log("FILES", txtFiles)
//   extractFull(
//     files,
//     dirPath,
//     { p: "admin123" } /* 7z options/switches */
//   ).progress(function (files) {
//     console.log("Some files are extracted: %s", files);
//   });
// });
