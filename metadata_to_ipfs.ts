require("dotenv").config();
import Moralis from 'moralis/node'
const fs = require("fs");

const serverUrl = process.env.SERVER;
const appId = process.env.APP_ID;
const masterKey = process.env.MASTER_KEY;
Moralis.start({ serverUrl, appId, masterKey });

const main = async () => {
  const metaData = {
    "key" : "value"
  }

  const data = JSON.stringify(metaData)
  const altered_data = Buffer.from(data).toString('base64');
  const file = new Moralis.File("file.json", {base64 : altered_data});
  await file.saveIPFS({ useMasterKey: true });
  const read_file = JSON.parse(JSON.stringify(file))
  console.log(read_file.ipfs, read_file.hash)
}

main()