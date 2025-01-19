const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
 res.send(` <div style=" display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; font-family: Arial, sans-serif; background-color: #f0f0f0; "> <div style=" text-align: center; padding: 20px; background-color: #ffffff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px; "> <h1 style="color: #333;">Welcome to My Styled Page!</h1> <p style="color: #666;">This is an example of a page served by Express with some good-looking inline CSS.</p> </div> </div> `);
})

app.listen(port, () => {
console.log(`Server is running on port ${port}`); 
});
