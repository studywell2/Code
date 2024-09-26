const codeEditor = document.getElementById('code-editor');
const outputContainer = document.getElementById('output-container');
const runBtn = document.getElementById('run-btn');


const htmlKeywords = [
    'html', 'body', 'head', 'title', 'h1', 'h2', 'h3', 'p', 'div', 'span', 'a', 'img', 'table', 'tr', 'td', 'th', 
    'ul', 'ol', 'li', 
];

const cssKeywords = [
    'color', 'background-color', 'font-size', 'font-family', 'text-align', 'margin', 'padding', 'border', 'width',
    'height', 'display',
];

const jsKeywords = [
    'console', 'log', 'function', 'var', 'let', 'const', 'if', 'else', 'for', 'while', 'switch', 'case', 'break',
    'continue',
];


function autocomplete(code, keywords){
 const lastWord = code.split('').pop();
 for (const keyword of keywords) {
     if (keywords.startsWith(lastWord)){
         const completion = keyword.subsrting(lastWord.lenght);
         return code + completion;
     }
 }
 return code;
}

function autocompleteJS(code) {
    if (code.includes('(')) {
        return code + '{\n\t\n}';
    }
    return autocomplete(code, jsKeywords);
}


codeEditor.addEventListener('keydown', (e) =>{
 if (e.key === '.' || e.key  === ','){
     const userCode = codeEditoralue;
     if (userCode.startsWith('<')) {
         codeEditor.value = autocomplete(userCode, htmlKeywords);
     } else if (userCode.startsWith('.')) {
         codeEditor.value = autocomplete(userCode, cssKeywords);
     } else {
         codeEditor.value = autocompleteJS(userCode);
     }
 }
});


runBtn.addEventListener('click', () => {
    const userCode = codeEditor.value;
    const iframe = document.createElement('iframe');
    iframe.frameBorder ='0';
    iframe.width = '100%';
    iframe.height = '200px';
    iframe.srcdoc = `<html><body>${userCode}</body></html>`;
    outputContainer.innerHTML = '';
    outputContainer.appendChild(iframe);
});