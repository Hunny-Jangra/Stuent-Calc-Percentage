const web_Design = document.querySelector('#web_design');
const Python = document.querySelector('#python');
const java = document.querySelector('#java');
const js = document.querySelector('#javaScript');
const cPP = document.querySelector('#cPP');
const CN = document.querySelector('#Computer_networks');
let grade = "";

const calc = function() {
    let web_d = web_Design.value;
    let pythON = Python.value;
    let Java = java.value;
    let Js = js.value;
    let cP = cPP.value;
    let c_networks = CN.value;

    //find-total
    let total = parseFloat(web_d) + parseFloat(pythON) + parseFloat(Java) + parseFloat(Js) + parseFloat(cP) + parseFloat(c_networks);
    alert(total);

    //total-percentage
    let percentage = (total/600) * 100;
    alert(percentage);

    //find-grade
    if(percentage <=100 && percentage >=80){
        grade = 'A';
    }else if(percentage <=79 && percentage >= 60){
        grade = 'B';
    }else if(percentage <=59 && percentage >=40){
        grade = 'C';
    }else{
        grade = 'F';
    }

    //find-Pass/Fail

    if(percentage >= 39.5) {

        document.querySelector('#showdata').innerHTML = `Out of 600 total is = <b><u>${total}</u></b> and your percentage(%) is = <b><u>${percentage}</u></b>. <br> Your Grade is <b><u>${grade}</u></b> . You are <b>PASS</b> . `
    }else {
        document.querySelector('#showdata').innerHTML = `Out of 600 total is = <b><u>${total}</u></b> and your percentage(%) is = <b><u>${percentage}</u></b>. <br> Your Grade is <b><u>${grade}</u></b> . You are <b>Fail</b> . `

    }



}