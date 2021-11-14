# CovidCats-Image-Engine

Layer Order:
- Face
- Ears
- Mouth
- Eyes
- Whiskers
- Mask

Input desired layer into Line 42 of index.ts
E.g. to input face3.png + ear4.png + mouth3.png + eye4.png + whisker5.png + mask3.png
`const results = elementsSetup(3, 4, 3, 4, 5, 3);`

Then run: `npx ts-node index`
This will create 0.png in the root directory with the desired traits