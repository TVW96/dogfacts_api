const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());


// Dog facts data
const dogFacts = [
    "Dogs have a sense of time and can be trained to anticipate future events.",
    "A group of pugs is called a grumble.",
    "The Basenji dog is known for not barking.",
    "Dogs have three eyelids.",
    "The Greyhound is the fastest dog breed, capable of running up to 45 mph.",
    "A dog’s nose print is unique, much like a human fingerprint.",
    "Dogs can hear sounds four times farther away than humans.",
    "The Labrador Retriever is the most popular dog breed in the United States.",
    "A dog’s sense of smell is 10,000 to 100,000 times more powerful than a human’s.",
    "Dogs sweat only through their paws."
];

// Endpoint to get dog facts
app.get('/facts', (req, res) => {
    const number = parseInt(req.query.number);

    if (isNaN(number) || number <= 0) {
        // If 'number' is not provided or invalid, return all facts
        return res.json({ facts: dogFacts, success: true });
    }

    // If a valid number is provided, return the specified number of facts
    const selectedFacts = dogFacts.slice(0, number);
    return res.json({ facts: selectedFacts, success: true });
});


// Start the server
app.listen(port, () => {
    console.log(`Dog Facts API is running on http://localhost:${port}`);
});
