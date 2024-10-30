

let option;
let items = [];

while(option != 4){
  option = Number(prompt(`

  Olá usuário! Digite o número da opção desejada  

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Apagar itens
    4. Sair do programa

`))



switch(option){
  case 1:
    let item = prompt(`Digite o item da sua lista:`)

    items.push(item)
  break

  case 2:
    if(items.length == 0){
      alert(`Não existem itens cadastrados`)
    }
  
    else {
      alert(items)
    }
  break

  case 3:

  if(items.length == 0){
    alert(`A lista ja esta vazia`)
  }
  else{
      let simOunao = Number(prompt(`
      Deseja mesmo apagar tudo?
      Digite "1" para sim
      Digite "2" para não
      `))
    if(simOunao == 1){
      items = [];
      alert(`Os itens foram apagados.`)
    }

    else if(simOunao == 2){
      alert(`Os itens não foram apagados, pressione Enter, para voltar ao menu inicial`)
    }
    else {
      alert(`Opção invalida!`)
    }
  }
  break
  
  case 4: 
  alert(`thcau!`)
  break

  default:
    alert(`Opção invalida!`)
}}
