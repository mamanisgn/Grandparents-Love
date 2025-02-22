function changeQuote() {
    var quotes = [
        "Grandparents make the world softer, kinder, and warmer.",
        "A grandparents love is strong and unconditional.",
        "Spending time with grandparents is a treasure.",
        "A house full of grandchildren is a house full of love.",
        "The best moments are those spent with grandparents.",
        "Grandparents hold our hands for a while, but our hearts forever."
    ];
    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

function changeBackgroundColor() {
    var colors = [   
"#D8B0D3", 
"#E6A9D7", 
"#F3C6D1", 
"#F8B7D0", 
"#F2A7D0", 
"#D2A1F3", 
"#E4A7E6", 
"#C18FC4", 
"#9B65A4", 
"#D1A1E6"  
    ];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("container").style.backgroundColor = randomColor;
}