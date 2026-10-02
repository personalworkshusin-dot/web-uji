const quotes = [
    { text: "Jan Takut Mengulai Di Kamar Kawan.", author: "Lutbi" },
    { text: "Ak Suka Femboy.", author: "Alim" },
    { text: "Tobat lah kawan.", author: "Husin" },
    { text: "Cina Sei batang.", author: "Ike" },
    { text: "Iyun.", author: "kia" },
    { text: "Sei Rangas is the best.", author: "dawi" },
];

function generateQuote() {
    // Memilih kutipan acak dari array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    // Menampilkan ke HTML
    document.getElementById("quote-text").innerText = `"${selectedQuote.text}"`;
    document.getElementById("quote-author").innerText = `- ${selectedQuote.author}`;
}