// Show the button when scrolled down 100px from the top
window.onscroll = function() {
    const scrollButton = document.getElementById("scroll-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  };
  
  // Scroll to the top when the button is clicked
  document.getElementById("scroll-top").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  console.log("script.js is loaded");
  