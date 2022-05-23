const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

// Terminal JS //
consoleText(['Joshua Naing', ' a Programmer', ' a Web Developer', ' a Game Developer'], 'text',['#ff9a57','white','goldedrod','goldedrod']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
}

// Email Js
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "jethbetlog@gmail.com",
        Password : "12345Betlog",
        To : 'jethbetlog@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Contact Inquiry",
        Body :"Name : " + document.getElementById("name").value
                +"<br> Email: " + document.getElementById("email").value
                +"<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully")
    );

}
