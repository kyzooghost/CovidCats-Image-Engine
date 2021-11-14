# CovidCats-Image-Engine


<img src="https://raw.githubusercontent.com/kyzooghost/CovidCats-Image-Engine/main/images/homecat.png" width="512" height="512" />

To upload all /layer .png files to a single IPFS folder: `npx ts-node image_to_ipfs`

Layer Order:
- Face
- Ears
- Mouth
- Eyes
- Whiskers
- Mask

Input desired layer into Line 44 of index.ts: `const results = elementsSetup(3, 4, 3, 4, 5, 3);`

The above line will input "face3.png + ear4.png + mouth3.png + eye4.png + whisker5.png + mask3.png"


Then run `npx ts-node index`

This will create 0.png in the root directory with the desired traits