function status(req, res) {
  res.status(200).json({ chave: "Alunos do curso.dev estao demais" });
}

export default status;
