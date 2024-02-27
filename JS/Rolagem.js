/**
 * Função para rolar suavemente até um elemento na página quando um link é clicado.
 * @param {Event} event - O evento de clique que acionou a chamada da função.
 */
function scrollToElement(event) {
    // Impede o comportamento padrão do link (navegação imediata)
    event.preventDefault();
  
    // Obtém o ID do elemento alvo a partir do atributo href do link
    const targetId = event.target.getAttribute("href").substring(1);
  
    // Seleciona o elemento alvo usando jQuery ($) com base no ID
    const targetElement = $("#" + targetId);
  
    // Verifica se o elemento alvo existe na página
    if (targetElement.length) {
      // Anima a rolagem suave usando jQuery
      $("html, body").animate({
        scrollTop: targetElement.offset().top
      }, 1500); // A animação levará 1500 milissegundos (1,5 segundos)
    }
  }
  