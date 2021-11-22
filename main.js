// generating a random quote and displaying it
async function randomQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    // displaying
    document.getElementById("quote").innerText = data.content
    document.getElementById("author").innerText = data.author
}

document.getElementById("newQuote").addEventListener("click", ()=>{
    randomQuote()
})

randomQuote()