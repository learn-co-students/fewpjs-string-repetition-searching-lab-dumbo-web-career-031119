// Code your solution here
function heyJude() {
    return "Na na na na na na na, na na na na, hey Jude.".repeat(16);
}

function prohibitedLanguage(arg){
    let myRegExp = /candycorn|brusselssprouts/;
    let result = arg.search(myRegExp);
    return result;
}