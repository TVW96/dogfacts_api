# Dog Facts API & Web Interface
environment: Express.js, HTML
### This code implements a simple REST API and serves interesting facts about dogs on a Web Interface.
## API
#### Server Setup:
```
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
```
The code starts by importing Express.js and creating an application instance. It sets up CORS (Cross-Origin Resource Sharing) middleware to allow requests from different domains, which is essential for web applications accessing this API from different origins.
#### Data Storage:
```
const dogFacts = [/* ... */];
```
The facts are stored in a simple array of strings. In a production environment, this data would typically come from a database, but for this example, it's hardcoded in memory.
#### API Endpoint:
```
app.get('/facts', (req, res) => {
    const number = parseInt(req.query.number);
    // ... handler logic
});
```
The API exposes a single endpoint at /facts that accepts GET requests. It includes a query parameter number that allows clients to specify how many facts they want to receive. The endpoint handles two scenarios:

If no number is provided or it's invalid, it returns all facts
If a valid number is provided, it returns that specific number of facts

#### Server Initialization:
```
app.listen(port, () => {
    console.log(`Dog Facts API is running on http://localhost:${port}`);
});
```
The server listens on port 3000 and logs a confirmation message.

## Web interface
#### HTML Structure: 
The body contains: 
- A header.
- An interactive button to trigger fact retreival.
- A placeholder paragraph tag for displayign facts.
- A decorative dog image.
- A footer with API attribution.

#### JavaScript Functionality: 
The ``gettDogFact()`` function handles the API interaction: 
```
function getDogFact() {
    fetch('http://localhost:3000/facts')
        .then(response => response.json())
        .then(data => {
            const factsArray = data.facts;
            const randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];
            document.getElementById('dogFact').innerText = randomFact;
        })
        .catch(error => console.error('Error fetching data:', error));
}
```
This function: 
1. Makes a GET request to the local API.
2. Converts the response to JSON.
3. Randomly selects one fact from the returned array.
4. Updates the DOM with the selected text.
   
## Instructions:
Execute following lines of code to run application:

1.
``` npm install ```

2.
``` npm start ```
