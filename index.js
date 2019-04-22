// Code your solution here

function heyJude(str) {
  return str.repeat(16);
}

function prohibitedLanguage(str) {
  let notAllowed = /candycorn|brusselssprouts/;
  return str.search(notAllowed);
}
