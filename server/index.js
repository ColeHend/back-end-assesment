const express = require("express");
const cors = require("cors");
const ctrl = require('./controller')
const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", ctrl.getCompliment);
app.get("/api/fortune", ctrl.getFortune)

app.post('/api/list/',ctrl.addList)
app.delete('/api/list/:id',ctrl.removeList)
app.put('/api/list/:id',ctrl.updateList)

app.listen(4000, () => console.log("Server running on 4000"));
