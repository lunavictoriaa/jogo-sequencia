const lista = [
  { nome: "Maria", valor: 472 },
  { nome: "Joao", valor: 374 },
  { nome: "Roberto", valor: 325 },
  { nome: "Cláudio", valor: 301 },
  { nome: "Adriana", valor: 209 },
  { nome: "Tomáz", valor: 107 },
  { nome: "Carol", valor: 91 },
  { nome: "Bia", valor: 58 },
  { nome: "Léo", valor: 47 },
  { nome: "Juarez", valor: 32 },
  { nome: "Elisa", valor: 18 },
];

lista.sort(function (a, b) {
  return b.valor - a.valor;
});

const x = document.getElementById('tabela')


lista.forEach((element) => {`
  <tr>
    <td class="posicao">1</p>
    <td class="nome">${element.nome}</p>
    <td class="valor">${element.valor}</p>
  </tr>
  `}
)


// lista.forEach((element) => {
//   console.log(element.nome);
//   console.log(element.valor);
  
// });
