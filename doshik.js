let displayInfo = document.getElementById('display__info');
let classesObj = {
    displayText: 'display__text',
    displayTextTypeWriter: 'display__text-typewriter',
    displayTextChars: 'display__text-chars',
    displayChar: 'display__char',
}
main2();

function main() {
    let textArray = [
        "Lorem ipsum dolor sit amet, consectetur adipisiciagni pariatur, praesentium quisquam quo ratione recusandae?",
        "Lorem ipsum dolor sit amet, conscum cumque deleniti laudantium magni minus vero vitae voluptates.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ex obcaecati quidem ratione sit voluptate.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet."
    ]

    let delay = 800;
    for(let i = 0; i < textArray.length; i++){
        let currentText = textArray[i];
        let newLine = document.createElement('div');
        newLine.className = classesObj.displayText + " " + classesObj.displayTextChars;
        displayInfo.append(newLine);
        let newChar = document.createElement('span');
        newChar.className = classesObj.displayChar;
        newChar.textContent = currentText[j];
    }
    // let timerId = setTimeout(function request() {
    //
    //     if () {
    //
    //     }
    //
    //     timerId = setTimeout(request, delay);
    //
    // }, delay);
}
function main2(){
    let text = "Typing Text Azaza";
    let textArray = [
        "Typing Text Azaza",
        "ДИЗАЙНЕР НА ДОШИРАКАХ ;DDDD"
    ]
    let delay = 200;
    let countArray = textArray.length;
    let j = 0;
    let idInterval2 = setInterval(()=>{
        if( j >= countArray){
            clearInterval(idInterval2);
        }
        let newLine = document.createElement('div');
        newLine.className = classesObj.displayText + " " + classesObj.displayTextChars;
        displayInfo.append(newLine);

        let lenText = text.length;
        let i = 0;
        let idInterval = setInterval(()=>{
            if(i >=lenText){
                clearInterval(idInterval);
            }
            let newChar = document.createElement('span');
            newChar.textContent = text[i];
            newChar.className = classesObj.displayChar;
            newLine.append(newChar);
            i++;
        },delay)
    },201)

}
