function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
       
console.log(string.toUpperCase());
}
function logWhisper(string){
       
    console.log(string.toLowerCase());
    }
 function sayHiToGrandma(string){
     const allLowerCase = "I can't hear you!";
     const allUpperCase = "YES INDEED!";
     const iLoveYouGrandma = "I love you, too.";
     if(string.toLowerCase() === string){
     return allLowerCase;}
     else if (string.toUpperCase() === string){
        return allUpperCase;}
     else if( "I love you, Grandma."=== string){
         return iLoveYouGrandma;
     }   
 }   