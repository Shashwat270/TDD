function capitalize(sentence){
    if(sentence===NaN){
        return sentence.toUpperCase();
    }
    else{
        return "Not a string"
    }
    
}
module.exports = capitalize;