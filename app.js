const getcolor=()=>{
    const randonNumber=Math.floor(Math.random()*16777215)

    const randomCode='#'+randonNumber.toString(16);
    document.body.style.backgroundColor=randomCode
    document.getElementById("color-code").innerText=randomCode

navigator.clipboard.writeText(randomCode)
}





document.getElementById("btn").addEventListener(
    "click",getcolor
)

getcolor()