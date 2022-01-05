function cipher(plainText, shift_distance) {
  // declare cipherText
  let cipherText = "";
  // declare an array of numbers
  let num = [];

  for (let i = 0; i < plainText.length; i++) {
    // the num array value at i is the ascii character code
    num[i] = plainText.charCodeAt(i);

    // check uppercase letter range
    if (num[i] >= 65 && num[i] <= 90) {
      // character is uppercase letter
      num[i] += shift_distance;

      // check if adding the shift_distance put it outside letter range;
      // if so, subtract length of alphabet
      if (num[i] > 90) {
        num[i] -= 26;
      }
    }
    // check lowercase letter range
    else if (num[i] >= 97 && num[i] <= 122) {
      // character is lowercase letter
      num[i] += shift_distance;

      // check if adding the shift_distance put it outside letter range;
      // if so, subtract length of alphabet
      if (num[i] > 122) {
        num[i] -= 26;
      }
    }
    // don't need an else; just concatenate characters onto cipherText string
    // convert from ascii code first!
    // char will be a letter adjusted for cipher, or a space or punctuation
    cipherText = String.fromCharCode(...num);
  }
  return cipherText;
}

function decipher(encryptedText, shift_distance) {
  // declare plainText
  let plainText = "";
  // declare an array of numbers
  let num = [];

  for (let i = 0; i < encryptedText.length; i++) {
    // the num array value at i is the ascii character code
    num[i] = encryptedText.charCodeAt(i);

    // check uppercase letter range
    if (num[i] >= 65 && num[i] <= 90) {
      // character is uppercase letter
      num[i] -= shift_distance;

      // check if subtracting the shift_distance put it outside letter range;
      // if so, add length of alphabet
      if (num[i] < 65) {
        num[i] += 26;
      }
    }
    // check lowercase letter range
    else if (num[i] >= 97 && num[i] <= 122) {
      // character is lowercase letter
      num[i] -= shift_distance;

      // check if subtracting the shift_distance put it outside letter range;
      // if so, add length of alphabet
      if (num[i] < 97) {
        num[i] += 26;
      }
    }
    // don't need an else; just concatenate characters onto plainText string
    // convert from ascii code first!
    // char will be a letter adjusted for decipher, or a space or punctuation
    plainText = String.fromCharCode(...num);
  }
  return plainText;
}

const SHIFT = 3;
let originalText = "Hello world! xyz abc";
let encryptedText = cipher(originalText, SHIFT);

console.log("Original text:  " + originalText);
console.log("Encrypted text: " + encryptedText);
console.log("Decrypted text: " + decipher(encryptedText, SHIFT));
