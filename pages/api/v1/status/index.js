import database from "infra/database";

async function status(req, res) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(result.rows);
  res.status(200).json({ chave: "Alunos do curso.dev estao demais" });
}

export default status;
