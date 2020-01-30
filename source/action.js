function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("button");
    var pic2 = document.getElementById("pic2");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More ->"; 
      moreText.style.display = "none";
      moreText.style.visibility = "hidden";
     
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less ->"; 
      moreText.style.display = "inline";
      moreText.style.visibility = "visible";
    
    }
  }