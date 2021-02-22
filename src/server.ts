import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json({ message: "Os dados foram salvos com sucesso!" });
});
app.post("/users", (request, response) => {
  response.json({ message: "Os dados foram salvos com sucesso!" });
});

app.listen(3333, () => console.log("Server is running!"));
