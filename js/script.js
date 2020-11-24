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
  // 1 - Devo selezionare gli elementi interessati con le variabili
  var activeImage = $("div.images_container div.active");
  var activeCircle = $("#nav ul li.active_circle");

  // 2 - Togliere la classe active all'elemento selezionato
  activeImage.removeClass("active");

  if (activeImage.hasClass("last") == true) {
    // Se l'immagine su cui sono ha classe last è l'ultima quindi riassegno la classe al primo div
    $(".images_container div.first").addClass("active");
  } else {
    // 3 - Assegnare la classe active all'elemento subito dopo
    activeImage.next().addClass("active");
  }

}

function previousItem() {

}
