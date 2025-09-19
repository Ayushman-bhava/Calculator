const output = document.querySelector('#output')
const buttons = document.querySelectorAll('.button')

let firstNo = 0;
let secondNo = 0;
let flag = 0;
let dotFlag = 0;

function display(input) {
    switch(input) {
        case 'AC':
            output.innerHTML = "";
            dotFlag = 0;
            break;

        case '0':
            output.innerHTML += '0';
            break;

        case '1':
            output.innerHTML += '1';
            break;

        case '2':
            output.innerHTML += '2';
            break;

        case '3':
            output.innerHTML += '3';
            break;

        case '4':
            output.innerHTML += '4';
            break;

        case '5':
            output.innerHTML += '5';
            break;

        case '6':
            output.innerHTML += '6';
            break;

        case '7':
            output.innerHTML += '7';
            break;

        case '8':
            output.innerHTML += '8';
            break;

        case '9':
            output.innerHTML += '9';
            break;

        case '.':
            if(dotFlag === 0) {
                if(output.innerHTML === '') {
                    output.innerHTML += '0.'
                }
                else {
                    output.innerHTML += '.';
                }       
                dotFlag++
            }
            break;

        case 'C':
            if(output.innerHTML === 'NaN' || output.innerHTML === 'Infinity' || output.innerHTML === 'Error'){
                output.innerHTML = "";
                break;
            }
            output.innerHTML = output.innerHTML.slice(0,-1);
            for(let i = 0; i<output.innerHTML.length; i++) {
                if(output.innerHTML[i] != '.'){
                    dotFlag = 0;
                }
            }
            break;

        case '-/+':
            if(output.innerHTML === 'NaN' || output.innerHTML === 'Infinity' || output.innerHTML === 'Error'){
                break;
            }

            if(output.innerHTML[0] != '-'){
                output.innerHTML = '-' + output.innerHTML;
            }
            else {
                output.innerHTML = output.innerHTML.slice(1);
            }
            break;

        case '+':
            firstNo = output.innerHTML;
            flag = 1;
            dotFlag = 0;
            output.innerHTML = '';
            break;

        case '-':
            firstNo = output.innerHTML;
            flag = 2;
            dotFlag = 0;
            output.innerHTML = '';
            break;

        case 'x':
            firstNo = output.innerHTML;
            flag = 3;
            dotFlag = 0;
            output.innerHTML = '';
            break;

        case '/':
            firstNo = output.innerHTML;
            flag = 4;
            dotFlag = 0;
            output.innerHTML = '';
            break;

        case '%':
            firstNo = output.innerHTML;
            flag = 5;
            dotFlag = 0;
            output.innerHTML = '';
            break;

        case '=':
            secondNo = output.innerHTML;
            if(flag === 1){
                output.innerHTML = Number(firstNo) + Number(secondNo);
            }
            else if(flag === 2){
                output.innerHTML = Number(firstNo) - Number(secondNo);
            }
            else if(flag === 3){
                output.innerHTML = Number(firstNo) * Number(secondNo);
            }
            else if(flag === 4){
                output.innerHTML = Number(firstNo) / Number(secondNo);
            }
            else if(flag === 5){
                output.innerHTML = Number(firstNo) % Number(secondNo);
            }

            dotFlag = 0;
            break;
        
        default:
            output.innerHTML = 'Error';
    }
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent.trim();
    display(value);
  });
});