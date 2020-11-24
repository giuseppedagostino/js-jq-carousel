// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider.
// Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider.
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider.
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente.
// Generiamo i pallini con JS.

$(document).ready(
  function() {

    // Questo accade quando clicco sull freccia a sinistra
    $(".previous").click(
      function() {
        previousItem();
      }
    );

    // Questo accade quando clicco sull freccia a destra
    $(".next").click(
      function() {
        nextItem();
      }
    );

  }
);

// FUNZIONI
function nextItem() {
  // 1 - Seleziono gli elementi interessati con le variabili
  var activeImage = $("div.images_container div.active");
  var activeCircle = $("ul li.active_circle");

  // 2 - Tolgo la classe active all'elemento selezionato
  activeImage.removeClass("active");
  activeCircle.removeClass("active_circle");

  // 3 - Assegno la classe active all'elemento subito dopo, a meno che non sia arrivato all'ultima immagine
  if (activeImage.hasClass("last") == true) {
    $(".images_container div.first").addClass("active");
    $("ul li.first").addClass("active_circle");
  } else {
    activeImage.next().addClass("active");
    activeCircle.next().addClass("active_circle");
  }

}

function previousItem() {
  var activeImage = $("div.images_container div.active");
  var activeCircle = $("ul li.active_circle");

  activeImage.removeClass("active");
  activeCircle.removeClass("active_circle");

  if (activeImage.hasClass("first") == true) {
    $(".images_container div.last").addClass("active");
    $("ul li.last").addClass("active_circle");
  } else {
    activeImage.prev().addClass("active");
    activeCircle.prev().addClass("active_circle");
  }
}
