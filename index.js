const app = require("./public/server.js");
const now = new Date();
const formattedDate = now.toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "America/Sao_Paulo" });

const color = require("cli-color");

app.listen(3000, () => {
  console.log(formattedDate)
  console.log(
    color.magenta("[Server]"), "Online."
  );
});