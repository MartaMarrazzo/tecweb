var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {                               
                                                this.classList.toggle("active");
                                                var body = this.nextElementSibling;
                                                if (body.style.display === "block") body.style.display = "none";
                                                     else body.style.display = "block";
                                                }
                            );
}

var thumb_count;
var thumb_current = 1; // BLOCCO DI PARTENZA
var thumb_number = 4; // NUMERO DI BLOCCHI DI THUMB
function thumb_move(where)
{
    // DECREMENTO E CAMBIO IMMAGINE PER LO SCORRIMENTO A SINISTRA
    if (where == "left")
    {
        if (thumb_current > 1) thumb_current--;
        if (thumb_current == 1) document.getElementById("thumb_img_left").src = "thumb_img_left_no.png";
        if (thumb_current < thumb_number) document.getElementById("thumb_img_right").src = "thumb_img_right.png";
    }
    // INCREMENTO E CAMBIO IMMAGINE PER LO SCORRIMENTO A DESTRA
    else
    {
        if (thumb_current < thumb_number) thumb_current++;
        document.getElementById("thumb_img_left").src = "thumb_img_left.png";
        if (thumb_current == thumb_number) document.getElementById("thumb_img_right").src = "thumb_img_right_no.png";
    }
    // CAMBIO DEL BLOCCO DI THUMB DA VISUALIZZARE
   
}