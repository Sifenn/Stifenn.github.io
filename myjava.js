// Get the modal
var modal = document.getElementById('myModal');
var textoEs = document.getElementById('textoescondido')

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('miImagen');
var img2 = document.getElementById('miImagen2');
var img3 = document.getElementById('miImagen3');
var img4 = document.getElementById('miImagen4');
var img5 = document.getElementById('miImagen5');
var img6 = document.getElementById('miImagen6');
var img7 = document.getElementById('miImagen7');
var img8 = document.getElementById('miImagen8');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  textoEs.style.display = "block";
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'CSS/proyectos-vean.jpg';
    captionText.innerHTML = this.alt;
  }
  img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = 'CSS/proyectos-zonammorpg-2.jpg';
    captionText.innerHTML = this.alt;
  }
  img8.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
