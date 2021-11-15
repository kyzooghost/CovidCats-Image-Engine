// main() is to savee a pre-existing image file to Moralis IPFS
// main2() is to save a canvas created within the script context to Moralis IPFS

require("dotenv").config();
import Moralis from 'moralis/node'
const fs = require("fs");
const { createCanvas, loadImage } = require('canvas')

const serverUrl = process.env.SERVER;
const appId = process.env.APP_ID;
const masterKey = process.env.MASTER_KEY;
Moralis.start({ serverUrl, appId, masterKey });

//MODIFY IMAGE PATH HERE
const imagePath = './0.png'
let file: any;

// const promise = new Promise((res, rej) => {
//   fs.readFile(imagePath, (err: any, data: any) => {
//     if(err) rej();
//     const image = "data:image/png;base64," + data.toString("base64")
//     file = new Moralis.File("image.png", {base64 : image });
//     res(null);
//   })
// })

// const main = async () => {
//   await promise
//   await file.saveIPFS({ useMasterKey: true });
//   console.log(file.ipfs(), file.hash())
// }

// main()

const main2 = async() => {
  const canvas = createCanvas(2048, 2048)
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, 2048, 2048);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, 2048, 2048);
  const raw_image = canvas.toBuffer("image/png")
  const raw_image_2 = "data:image/png;base64," + raw_image.toString("base64")
  file = new Moralis.File("image.png", {base64 : raw_image_2 });
  await file.saveIPFS({ useMasterKey: true });
  console.log(file.ipfs(), file.hash())  
}

main2()