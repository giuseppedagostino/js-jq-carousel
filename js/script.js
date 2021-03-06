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

    $(document).keydown(
      function() {

        // Utilizzo le freccette della tastiera per passare da un'immagine all'altra
        if (event.keyCode == 37) {
          previousItem();
        } else if (event.keyCode == 39) {
          nextItem();
        }

      }
    );

    // SEZIONE BONUS
    $("li").click(
      function() {
        $("li.active_circle").removeClass("active_circle");
        $(this).addClass("active_circle");

        var circleIndex = $(this).index();

        $(".images_container > div.active").removeClass("active");
        $(".images_container > div").eq(circleIndex).addClass("active");
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
