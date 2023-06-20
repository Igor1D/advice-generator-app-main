let adviceP = document.getElementById('adviceText');
let adviceNum = document.getElementById('adviceNum');
let btn = document.getElementById('btn');

async function getAdvice() {
    let results =  await fetch('https://api.adviceslip.com/advice');
    let data = await results.json()
    let adviceID = data.slip.id;
    let adviceText = data.slip.advice
    
    // console.log(data.slip.id);
    adviceNum.innerHTML = '#' + adviceID;
    adviceP.innerHTML = '"' + adviceText + '"';

    btn.addEventListener('click', () => {

        
    })

}

getAdvice()
