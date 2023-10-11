function worldblanks (myNoun, myAdjective, myVerb, myAdverb) {

    var result="";
    result ="The "  + myAdjective + " " + myNoun + " " + myAdverb + " to shortly";

    return result;
}

console.log(worldblanks("dog","big", "ran", "quickely"));
console.log(worldblanks("bike","slow", "riding", "goes"));