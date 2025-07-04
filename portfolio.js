// Nav Bar Responsive

const menu = document.querySelector('#close')
const NavBar = document.querySelector('.responsiveNav')

menu.onclick = function(){
  NavBar.classList.toggle('open')
  const isopen = NavBar.classList.contains('open')

  menu.classList = isopen ? 'ri-close-line' : 'ri-menu-line'

}

// Bottom Arrow.......!

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#D85C2A ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  scrollProgress.style.animation = "color 2s linear infinite";
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// active Nav link

let logoLink = document.getElementById('logo');

logoLink.addEventListener('click', () => {
  location.reload();
});


// For Arrows

function ScrollContainer(directoin){
  const container = document.querySelector('.explore__grid');
  const Amount = 500;
  if (directoin === 'left'){
    container.scrollLeft -= Amount;
  }else if (directoin === 'right'){
    container.scrollLeft += Amount;
  }
}

//  for skill Animation============================================================================================================================

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function animateNumber() {
  const number = document.getElementById("number");
  let counter = 0;
  const interval = setInterval(function () {
    if (counter == 95) {
      clearInterval(interval);
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
    }
  }, 21);

  const number1 = document.getElementById("number1");
  let counter1 = 0;
  const interval1 = setInterval(function () {
    if (counter1 == 80) {
      clearInterval(interval1);
    } else {
      counter1 += 1;
      number1.innerHTML = counter1 + "%";
    }
  }, 25);

  const number2 = document.getElementById("number2");
  let counter2 = 0;
  const interval2 = setInterval(function () {
    if (counter2 == 70) {
      clearInterval(interval2);
    } else {
      counter2 += 1;
      number2.innerHTML = counter2 + "%";
    }
  }, 30);

  const number3 = document.getElementById("number3");
  let counter3 = 0;
  const interval3 = setInterval(function () {
    if (counter3 == 90) {
      clearInterval(interval3);
    } else {
      counter3 += 1;
      number3.innerHTML = counter3 + "%";
    }
  }, 30);

  const number4 = document.getElementById("number4");
  let counter4 = 0;
  const interval4 = setInterval(function () {
    if (counter4 == 70) {
      clearInterval(interval4);
    } else {
      counter4 += 1;
      number4.innerHTML = counter4 + "%";
    }
  }, 30);

  const number5 = document.getElementById("number5");
  let counter5 = 0;
  const interval5 = setInterval(function () {
    if (counter5 == 65) {
      clearInterval(interval5);
    } else {
      counter5 += 1;
      number5.innerHTML = counter5 + "%";
    }
  }, 33);

  const number6 = document.getElementById("number6");
  let counter6 = 0;
  const interval6 = setInterval(function () {
    if (counter6 == 55) {
      clearInterval(interval6);
    } else {
      counter6 += 1;
      number6.innerHTML = counter6 + "%";
    }
  }, 33);

  const number7 = document.getElementById("number7");
  let counter7 = 0;
  const interval7 = setInterval(function () {
    if (counter7 == 60) {
      clearInterval(interval7);
    } else {
      counter7 += 1;
      number7.innerHTML = counter7 + "%";
    }
  }, 35);
}


function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
      animateNumber();
    }
  });
}

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersect, {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5 // Trigger when 50% of the element is visible
});

// Observe the skill div
const skillDiv = document.querySelector('#circle');
const skillDiv1 = document.querySelector('#circle1');
const skillDiv2 = document.querySelector('#circle2');
const skillDiv3 = document.querySelector('#circle3');
const skillDiv4 = document.querySelector('#circle4');
const skillDiv5 = document.querySelector('#circle5');
const skillDiv6 = document.querySelector('#circle6');
const skillDiv7 = document.querySelector('#circle7');
observer.observe(skillDiv);
observer.observe(skillDiv1);
observer.observe(skillDiv2);
observer.observe(skillDiv3);
observer.observe(skillDiv4);
observer.observe(skillDiv5);
observer.observe(skillDiv6);
observer.observe(skillDiv7);


// For Validation of Form 

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var isValid = true;

  // Validate name
  if (name == "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    isValid = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  // Validate email
  if (email == "") {
    document.getElementById("emailError").innerHTML = "Email is required";
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById("emailError").innerHTML = "Invalid email format";
    isValid = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }


  // If message is empty
  if (message == "") {
    document.getElementById("messageError").innerHTML = "Message is required";
    isValid = false;
  } else {
    document.getElementById("messageError").innerHTML = "";
  }



  var badWords = ["lodu", "chutiyo", "chodu", "bsdk", "lund", "bkl", "mc", "chutiye", "jhathu", "chut","bc","ben chod"];
  var rudeWords = ["fuck", "fucking", "fuck you"]; // Words to handle differently

  var messageLower = message.toLowerCase();
  var isRude = false;

  

  for (var i = 0; i < badWords.length; i++) {
    if (messageLower.indexOf(badWords[i]) !== -1) {
      var typed = new Typed('#msgvalid', {
        strings: ['chal be ' + badWords[i] + ' 🖕🏻 Baap Se Pangga Nhi lete..! Kindy Write Something else..!'],
        typeSpeed: 50,
      });
      isValid = false;
      setTimeout(function () {
        document.getElementById("msgvalid").innerHTML = "";
      }, 8000);
      isRude = true;
      break;
    }
  }

  if (!isRude) {
    for (var j = 0; j < rudeWords.length; j++) {
      if (messageLower.indexOf(rudeWords[j]) !== -1) {
        // Handle differently
        var typed = new Typed('#msgvalid', {
          strings: ['Ohh! Seriously !! I will Fuck You 4 Times 🖕🏻🖕🏻🖕🏻🖕🏻'],
          typeSpeed: 50,
        });
        var spokenMessage = 'Ohh! Seriously !! I will Fuck You 4 Times';
        speakMessage(spokenMessage);
        isValid = false;
        setTimeout(function () {
          document.getElementById("msgvalid").innerHTML = " ";
        }, 7000);
        isRude = true;
        break; // No need to continue checking if a rude word is found
      }
    }
  }

  // Speak out error messages
  if (!isValid) {
    speakErrors();
  }

  for (var i = 0; i < badWords.length; i++) {
    if (messageLower.indexOf(badWords[i]) !== -1) {
      var spokenMessage = 'chal be ' + badWords[i] + '! Kindy Write Something else..!';
      speakMessage(spokenMessage);
      isValid = false;
      isRude = true;
      break;
    }
  }


  return isValid;

}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function speakMessage(message) {
  var utterance = new SpeechSynthesisUtterance(message);
  utterance.volume = 1; 
  utterance.rate = 1; 
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

function speakErrors() {
  var nameError = document.getElementById('nameError').innerText;
  var emailError = document.getElementById('emailError').innerText;
  var messageError = document.getElementById('messageError').innerText;
  var Rude = document.getElementById('msgvalid').innerText;

  var errorMessages = [nameError, emailError, messageError, Rude];

  var utterance = new SpeechSynthesisUtterance();
  utterance.volume = 1;
  utterance.rate = 1;
  utterance.pitch = 1;

  for (var i = 0; i < errorMessages.length; i++) {
    if (errorMessages[i] !== '') {
      utterance.text += errorMessages[i] + '. ';
    }
  }

  speechSynthesis.speak(utterance);
}

function initiateUPIPayment(projectName, downloadUrl) {
    const upiId = "mistryjagruti823-1@okhdfcbank"; 
    const payeeName = "Dev Mistry";
    const amount = "49";
    const currency = "INR";
    const note = `Payment for ${projectName}`;

    // UPI deep link
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=${currency}&tn=${encodeURIComponent(note)}`;

    // Open UPI app
    window.location.href = upiLink;

    // After a few seconds, ask for confirmation
    setTimeout(() => {
      const confirmPayment = confirm("Did you complete the payment?");
      if (confirmPayment) {
        // Trigger download
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert("Payment not completed. Try again!");
      }
    }, 5000); // ⏳ Wait 5 seconds for UPI app to open
  }
