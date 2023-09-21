
let text = document.querySelector('#text').textContent;
let asciiTexte = "";
for (let i = 0; i < text.length; i++) {
    //Transformer texte en ascii
    let asciiValue = text.charCodeAt(i);
    asciiTexte += asciiValue + " ";
    Number.parseInt(asciiTexte);
    console.log(typeof asciiTexte);
    // asciiTexte += 10;
}

text2.textContent = asciiTexte;



// charCodeAt
// fromCharCode
// substr : découper la chaîne