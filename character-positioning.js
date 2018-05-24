/*
Use objects for representing more complex data using keys & their respective values

now: don't return the count of each letter ---
return all the zero-based positions in the STRING where the character is found

for each letter, we're returning (potentially)
 multiple numbers to represent all the places where the character shows up
*/


function countLetters (str) {
  let newStr = str.split('');
  let uniqueChars = {};

  for (let i = 0; i < newStr.length; i++) {
    let curChar = newStr[i];
    if (curChar !== ' ') {
      if (uniqueChars[curChar]) {
        uniqueChars[curChar].push(i);
       //(console.log("characters being pushed", uniqueChars[curChar].push(i)))
      } else {
        uniqueChars[curChar] = [i];
       //(console.log("character", uniqueChars[curChar] = [i]))
      }
    }
  }

  return uniqueChars;
}

countLetters("lighthouse in the house");

//

