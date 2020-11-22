$(document).ready(function () {


    var coll = $(".collapsible");
    console.log(coll);
 
    coll.on("click", function(e) {
      alert('hello');
      debugger;
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
    


});