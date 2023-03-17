const entrada = document.querySelector("#entrada");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.onclick = () => {
  if (entrada.value != "") {
     let itemLista = document.createElement("li");
     let texto = document.createTextNode(entrada.value);
     let iconeRemover = document.createElement("ion-icon");
     iconeRemover.classList.add("icone2");
     iconeRemover.setAttribute("name", "close-circle-outline");
     itemLista.append(texto);
     itemLista.append(iconeRemover);
     lista.append(itemLista);
     alertify.success("Item adicionado");
     entrada.value = "";
     iconeRemover.onclick = () => {
     lista.removeChild(itemLista);
     alertify.error("O Item será removido!");
   };
  }else{ alertify.alert("Erro ao adicionar!", "Você precisa preencher o campo de texto!"); 
  } 
};

lista.addEventListener('click', (event) => {
  if (event.target.nodeName === 'ION-ICON') {
      const listItem = event.target.parentNode;
      const itemText = listItem.textContent;
      const icon = event.target;
      alertify.confirm('Confirmação de remoção?','Você tem certeza que quer remover o item ' + itemText + '?',
      function () {
      listItem.remove();
      alertify.success('Item removido');
      },
      function () {
      alertify.error('Item não removido');
      })
      .set('labels', {ok:'Sim', cancel:'Não'})
      .set('defaultFocus', 'cancel')
      .set('onok', function() {
      alertify.alert('Item removido.');
      listItem.remove();
      })
      .set('oncancel', function() {
      lista.insertBefore(listItem, icon.nextSibling);
      });
    }
});