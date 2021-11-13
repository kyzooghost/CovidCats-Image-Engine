const fs = require("fs");
const sha1 = require("sha1");
const { createCanvas, loadImage } = require('canvas')

const basePath = process.cwd();
const buildDir = `${basePath}/build`;
const layersDir = `${basePath}/layers`;

const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')


const saveImage = (_editionCount: number) => {
    fs.writeFileSync(`${buildDir}/images/${_editionCount}.png`, canvas.toBuffer("image/png"));
};

fs.writeFileSync(`${basePath}/0.png`, canvas.toBuffer("image/png"))





// Set up build directories
const buildSetup = () => {
    if (fs.existsSync(buildDir)) {
      fs.rmdirSync(buildDir, { recursive: true });
    }
    fs.mkdirSync(buildDir);
    fs.mkdirSync(`${buildDir}/json`);
    fs.mkdirSync(`${buildDir}/images`);
};