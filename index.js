let adviceText = document.getElementById('adviceText');
let adviceNum = document.getElementById('adviceNum');

async function getAdvice() {
   let results =  await fetch('https://api.adviceslip.com/advice');
let data = await results.json()
    console.log(data)

}

getAdvice()
