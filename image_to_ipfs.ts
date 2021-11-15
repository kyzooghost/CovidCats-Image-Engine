require("dotenv").config();
import Moralis from 'moralis/node'

const fs = require("fs");

const serverUrl = process.env.SERVER;
const appId = process.env.APP_ID;
const masterKey = process.env.MASTER_KEY;
Moralis.start({ serverUrl, appId, masterKey });

//MODIFY IMAGE PATH HERE
const imagePath = './0.png'
let file: any;

const promise = new Promise((res, rej) => {
  fs.readFile(imagePath, (err: any, data: any) => {
    if(err) rej();
    const image = "data:image/png;base64," + data.toString("base64")
    file = new Moralis.File("image.png", {base64 : image });
    res(null);
  })
})

const main = async () => {
  await promise
  await file.saveIPFS({ useMasterKey: true });
  console.log(file.ipfs(), file.hash())
}

main()