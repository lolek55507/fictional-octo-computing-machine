
const plik = require('fs')
 
plik.readFile('hieroglify.txt', (err, data) => {
    let firstArr = data.toString().split("\n");
    let arrA = [];
    let arrB = [];
    let arrC = [];
    let arrD = [];
    let arrE = [];
    // first array (mainOne)
    let pierwsze = firstArr[0].split("\t"); 
    let drugie = firstArr[6].split("\t");
    let trzecie = firstArr[12].split("\t");
    let czwarte = firstArr[18].split("\t");
    let piate = firstArr[24].split("\t");

 arrA.push(firstArr[0].split("\t"));
     arrA.push(firstArr[1].split("\t"));
     arrA.push(firstArr[2].split("\t"));
     arrA.push(firstArr[3].split("\t"));
    arrA.push(firstArr[4].split("\t"));
    // second to compare
 arrB.push(firstArr[6].split("\t"));
    arrB.push(firstArr[7].split("\t"));
    arrB.push(firstArr[8].split("\t"));
    arrB.push(firstArr[9].split("\t"));
    arrB.push(firstArr[10].split("\t"));
    // third to compare
 arrC.push(firstArr[12].split("\t"));
    arrC.push(firstArr[13].split("\t"));
    arrC.push(firstArr[14].split("\t"));
    arrC.push(firstArr[15].split("\t"));
    arrC.push(firstArr[16].split("\t"));
    // fourth to compare 
 arrD.push(firstArr[18].split("\t"));
    arrD.push(firstArr[19].split("\t"));
    arrD.push(firstArr[20].split("\t"));
    arrD.push(firstArr[21].split("\t"));
    arrD.push(firstArr[22].split("\t"));
    // fith to compare 
 arrE.push(firstArr[24].split("\t"));
    arrE.push(firstArr[25].split("\t"));
    arrE.push(firstArr[26].split("\t"));
    arrE.push(firstArr[27].split("\t"));
    arrE.push(firstArr[28].split("\t"));

    function checkH (hA, hB) {
        let isSame = 0;
        for (let i = hA.length; i >= 0; i--) {
            if (hA[i] === hB[i]) {
                isSame++;
            } else {
                
            }
            
        }
        if (isSame == 4) {
            console.log(hA, hB, "they are same");
        } else if (isSame < 4) {
            console.log("not same");
        }
    }
    function checkForPrawidlowy(pp) {
        let isPrawidlowy = 0; 
        for (let i = 4; i >= 0; i--) {
            if(pp[0] == pp[i]) {
                isPrawidlowy++;
            }
        }
        if (isPrawidlowy >= 3) {
            console.log("ten jest prawidlowy");
            console.log(pp);
        } 

        
    }
    function checkFT(HA) {
        let valueForOut = 1; // Start with 1 to account for the first symbol
        const firstSymbol = HA[0][0]; // Assuming the first symbol is at row 0, column 0
    
        for (let i = 0; i < HA.length; i++) {
            for (let j = 0; j < HA[i].length; j++) {
                if (HA[i][j] === firstSymbol) {
                    valueForOut++;
                }
            }
        }
    
        console.log("The amount of symbols that are the same as the first one in this hieroglyph is: ", valueForOut + 1);
    }
    checkForPrawidlowy(pierwsze);
    checkForPrawidlowy(drugie);
    checkForPrawidlowy(trzecie);
    checkForPrawidlowy(czwarte);
    checkForPrawidlowy(piate);
    checkH(arrA, arrB);
    checkH(arrA, arrC);
    checkH(arrA, arrD);
    checkH(arrA, arrE);
    checkH(arrB, arrA);
    checkH(arrB, arrC);
    checkH(arrB, arrD);
    checkH(arrB, arrE);
    checkH(arrC, arrA);
    checkH(arrC, arrB);
    checkH(arrC, arrD);
    checkH(arrC, arrE);
    checkH(arrD, arrA);
    checkH(arrD, arrB);
    checkH(arrD, arrC);
    checkH(arrD, arrE);
    checkH(arrE, arrA);
    checkH(arrE, arrB);
    checkH(arrE, arrC);
    checkH(arrE, arrD);

    checkFT(arrA);
    checkFT(arrB);
    checkFT(arrC);
    checkFT(arrD);
    checkFT(arrE);
    console.log(pierwsze);
})