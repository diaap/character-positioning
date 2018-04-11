/*
Use objects for representing more complex data using keys & their respective values

now: don't return the count of each letter ---
return all the zero-based positions in the STRING where the character is found

for each letter, we're returning (potentially)
 multiple numbers to represent all the places where the character shows up
*/

function countLetters (sentence) {

  var noSpaces = sentence.split(" ").join("");

  var characterCount = {};
  for (var i = 0; i < noSpaces.length; i++) {
  var character = noSpaces[i];
    if (characterCount[character]) {
      characterCount[character].push(i);
      //(console.log("characters being pushed", characterCount[character].push(i)))
    } else {
      characterCount[character] = [i];
      //(console.log("character", characterCount[character] = [i]))
    }
  }
  return characterCount;

}

countLetters("lighthouse in the house");



//

/*
{
  l: 0,
  i: 1,
  g: 2,
  h: 3,
  t: 4,
  o: 5,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}

*/