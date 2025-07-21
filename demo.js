let num =0;
let sub =0;
let total =0;
document.getElementById("btnn").addEventListener("click", function(event) {
    event.preventDefault();

    let a = document.getElementById("text").value;
    let b = document.getElementById("number").value;
    let btn = document.createElement("button");
    btn.innerText = "❌"; 


    if (a === "" || b === "") {
        alert("Please fill out both fields");
        return;
    }

    let c = document.createElement("li");
    c.textContent = `${a} ${b}`; 
    c.appendChild(btn)
    document.getElementById("list").appendChild(c);

   
   
     btn.addEventListener("click",function()
    {
        c.remove();
        btn.remove();
    })

    if(b[0]=='+')
    {
    num +=Number(b.slice(1))
    document.getElementById("plus").innerText="+ $ "+ num 
    }
    else 
    {
    sub +=Number(b.slice(1))
    document.getElementById("minus").innerText=" - $ "+ sub
    }

    total =num - sub 
    let j = document.getElementById("bal")
    j.innerText=" $ " + total

    document.getElementById("text").value = "";
    document.getElementById("number").value = "";
})
