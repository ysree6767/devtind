const express = require('express');
const app = express();

// This route will match requests to /about
// Expected output: "About Page"
app.get('/about', (req, res) => {
 res.send('About Page');
});

// This route will match requests to /user/:id
// Expected output for /user/123: "User ID: 123"
// Expected output for /user/456: "User ID: 456"
app.get('/user/:id', (req, res) => {
 res.send(`User ID: ${req.params.id}`);
});

// This route will match requests with the optional parameter /user/:id?
// Expected output for /user: "User List"
// Expected output for /user/789: "User ID: 789"
app.get('/user/:id?', (req, res) => {
 if (req.params.id) {
  res.send(`User ID: ${req.params.id}`);
 } else {
  res.send('User List');
 }
});

// This route will capture all segments after /items/ and display them correctly
// Expected output for /items/1: "Item ID(s): 1"
// Expected output for /items/1/2/3: "Item ID(s): 1, 2, 3"
app.get('/items/*', (req, res) => {
 const ids = req.params[0].split('/');
 res.send(`Item ID(s): ${ids.join(', ')}`);
});

// This route will match requests to /category/:name(items|products)
// Expected output for /category/items: "Category: items"
// Expected output for /category/products: "Category: products"
app.get('/category/:name(items|products)', (req, res) => {
 res.send(`Category: ${req.params.name}`);
});

// This route uses regex to match requests to /regex/:id where :id is digits only
// Expected output for /regex/123: "Regex matched ID: 123"
app.get(/^\/regex\/(\d+)$/, (req, res) => {
 res.send(`Regex matched ID: ${req.params[0]}`);
});

// This route will match requests to /shop/:category/:productId
// Expected output for /shop/electronics/123: "Category: electronics, Product ID: 123"
app.get('/shop/:category/:productId', (req, res) => {
 res.send(`Category: ${req.params.category}, Product ID: ${req.params.productId}`);
});

// This route will catch all unmatched routes
// Expected output: "Page Not Found" with a 404 status code
app.get('*', (req, res) => {
 res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
 console.log('Server is running on port 3000');
});
