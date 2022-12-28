function MostraNome(nome) {
  return console.log("Olá Mundo!" + nome)
}
function mostraSobrenome(sobrenome) {
  return console.log("Olá Mundo!" + MostraNome() + " " + sobrenome)
}
