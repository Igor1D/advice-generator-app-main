let adviceP = document.getElementById('adviceText');
let adviceNum = document.getElementById('adviceNum');
let btn = document.getElementById('btn');


async function getAdvice() {
    let results =  await fetch('https://api.adviceslip.com/advice');
    let data = await results.json();
    let adviceID = data.slip.id;
    let adviceText = data.slip.advice;
    let currentAdviceID = adviceNum.innerText.slice(1);

    if (currentAdviceID == adviceID) {
        console.log('same ID');
        getAdvice();


    } else {
        adviceNum.innerText = '#' + adviceID;
        adviceP.innerText = '"' + adviceText + '"';
    }
    

}

    btn.addEventListener('click', () => {

        getAdvice();
        
    })

getAdvice();


