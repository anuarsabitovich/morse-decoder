const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};


function decode(expr) {
  
  let divided = expr.match(/.{1,10}/g) //  dividing string into equal parts 
  
  let arr = []  // array for a division to 
  let arr2 = []
  let sentence = []
  let sentencefull = []
 
  
  for(let i = 0; i < divided.length; i++) { // iterating through an array to divide 10 symbols 
    arr.push(divided[i].match(/.{1,2}/g)) 
  }
    console.log(arr)


    // loop to swap digits with symbols
  for(let k = 0; k < arr.length; k++) {
    for(let i = 0; i < arr[i].length; i++) {
       if (arr[k][i] == "10") {
         arr[k][i]  = '.'
       } else if( arr[k][i] == "11"){
         arr[k][i] = '-'
       } else if(arr[k][i] == "00"){
         arr[k][i] = ''
       } 
    }
  }


 for(let j = 0; j < arr.length; j++){
 arr2.push(arr[j].join(''))  
 }
console.log('arr 2 = ' + arr2)



let keysArr = Object.keys(MORSE_TABLE)
let valuesArr = Object.values(MORSE_TABLE)



for (let i = 0; i < arr2.length; i++){
  for (let j = 0; j < keysArr.length; j++){
    if(arr2[i]==keysArr[j]){
      sentence.push(j) 
    }
  }
}

for (let i = 0; i < sentence.length; i++){
  sentencefull.push(valuesArr[sentence[i]])
}
console.log(sentencefull.join(''))
return(sentencefull.join(''))
}
module.exports = {
    decode
} 