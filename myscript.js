var modal1 = document.getElementById('id01');
var modal5 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal3, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2) {
    modal2.style.display = "none";
    }
    if (event.target == modal3) {
    modal3.style.display = "none";
    }
    if (event.target == modal4) {
    modal4.style.display = "none";
    }
    if (event.target == modal5) {
      modal5.style.display = "none";
      }
}


var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

var modal = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg2");
var modal2Img = document.getElementById("img02");
img.onclick = function(){
  modal2.style.display = "block";
  modal2Img.src = this.src;
  captionText.innerHTML = this.alt;
}


var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg3");
var modal3Img = document.getElementById("img03");
img.onclick = function(){
  modal3.style.display = "block";
  modal3Img.src = this.src;
  captionText.innerHTML = this.alt;
}
var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg4");
var modal4Img = document.getElementById("img04");
img.onclick = function(){
  modal4.style.display = "block";
  modal4Img.src = this.src;
  captionText.innerHTML = this.alt;
}
function closeModal(id) {
  $('#'+id).fadeOut('medium');
} 
var mybutton = document.getElementById("myBtn");
  
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}