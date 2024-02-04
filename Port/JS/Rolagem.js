// Essa função faz com que ao clicar no Link, vá até o elemento como se estivesse "Rolando a Tela"
function scrollToElement(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = $("#" + targetId);

    if (targetElement.length) {
      $("html, body").animate({
        scrollTop: targetElement.offset().top
      }, 1000);
    }
  }