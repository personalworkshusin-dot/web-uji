const quotes = [
    { text: "Cara memulai adalah dengan berhenti berbicara dan mulai melakukan.", author: "Walt Disney" },
    { text: "Masa depan adalah milik mereka yang percaya pada keindahan mimpi-mimpi mereka.", author: "Eleanor Roosevelt" },
    { text: "Jangan biarkan hari kemarin menyita terlalu banyak hari ini.", author: "Will Rogers" },
    { text: "Kegagalan adalah bumbu yang memberi rasa pada kesuksesan.", author: "Truman Capote" },
    { text: "Kode yang baik adalah dokumentasi terbaiknya sendiri.", author: "Steve McConnell" }
];

function generateQuote() {
    // Memilih kutipan acak dari array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    // Menampilkan ke HTML
    document.getElementById("quote-text").innerText = "${selectedQuote.text}";
    document.getElementById("quote-author").innerText = - ${selectedQuote.author};
}