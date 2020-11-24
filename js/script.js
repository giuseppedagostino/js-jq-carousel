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
    $(.previous).click(
      previousItem();
    );

    // Questo accade quando clicco sull freccia a destra
    $(.next).click(
      nextItem();
    );
  };
);

// FUNZIONI
function previousItem() {
  // 1 - Devo selezionare gli elementi interessati
  var activeImage = $(".images_container");
  var activeCircle = $("#nav ul li");

  // 2 - Togliere la classe active

  // 3 - Assegnare la classe active
}

function nextItem() {}
