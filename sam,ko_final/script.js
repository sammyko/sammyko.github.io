(function(){
      var words = [
          'Your',
          'My',
          'Our',
          '₩on',
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 2000);
        
  })();


$('nav').first().delay(400).animate({'opacity':'1'},600);

$('.footer').last().delay(400).animate({'opacity':'1'},600);

var coll = document.getElementsByClassName("collapsible");
var i;



for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

