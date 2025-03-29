const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins"
];

const quoteElement = document.getElementById('quote');
const button = document.getElementById('new-quote');

button.addEventListener('click', () => {
    // Add the class to start the transition
    quoteElement.classList.remove('show');

    // Wait for the transition to finish before changing the quote
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
        quoteElement.classList.add('show');
    }, 500); // Match this duration with the CSS transition duration
});

// Show the initial quote with transition
quoteElement.classList.add('show');