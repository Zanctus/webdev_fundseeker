// Get the modal
var modal = document.getElementById("modal")
var modal2 = document.getElementById("modal2")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]

// When the user clicks on the button, open the modal
function revealModal(chosen_div) {

  let count = 0
  function delayReveal(){
    modal.style.opacity = `${count}`
  }

  modal.style.display = "block"
  
  for (let i = 0; i < 5; i++){
    count = count + 0.2

    myTimeout = setTimeout(delayReveal, 1)
  }

  contact = document.getElementById('contact-num')
  story = document.getElementById('story-para')

  if (chosen_div == 'box1') {
    contact.innerHTML = '0988-452-9912'
    story.innerHTML = 'As a Barangay Captain, it is my utmost responsibility to address the needs and concerns of my community. Today, I come before you with a heartfelt plea for assistance.<br><br>' + 
    'Recently, a devastating fire engulfed several houses in our barangay, leaving many of our fellow citizens homeless and in dire need of help. It breaks my heart to witness the pain and suffering they are going through in the aftermath of this tragedy.<br><br>' +
    'Therefore, I am initiating a donation drive to collect funds that will be used to purchase new clothes for our affected citizens.'
  }

  else if (chosen_div == 'box2') {
    contact.innerHTML = '0905-765-1136'
    story.innerHTML = 'My little sister has been diagnosed with a severe heart condition that has progressively worsened over time. The doctors have informed us that a heart transplant is the only viable option to save her life and give her a chance at a healthy future. However, the costs associated with this life-saving procedure are overwhelming for our family to bear alone.<br><br>' +
    'I humbly request your financial assistance to help cover the expenses associated with the heart transplant surgery. Thank you from the depths of my heart for your consideration, compassion, and support. '
  }

  else {
    contact.innerHTML = '0995-778-2617'
    story.innerHTML = 'Warm greetings to all of you! As the principal of Magayunon Elementary School, I am privileged to witness the growth and development of our young students every day. Books are the gateway to knowledge and imagination, and they play a crucial role in shaping our children\'s minds. Unfortunately, our school\'s library and classroom resources are currently inadequate to meet the diverse reading needs of our students.<br><br>'+
    'That is why I am appealing to your generosity and asking for your support in our endeavor to enhance the reading experience for our students. Your financial contributions will be used exclusively to purchase new books for their learning needs.'
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"
  modal.style.opacity = '0'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal2) {
    modal.style.display = "none"
    modal.style.opacity = '0'

    modal2.style.display = "none"
    modal2.style.opacity = '0'

    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
      clearTimeout(i); 
    }
  }
}

function nextClicked() {

  let count = 0
  function delayReveal(){
    modal2.style.opacity = `${count}`
  }

  modal2.style.display = "block"
  modal2.style.opacity = '1'

  for (let i = 0; i < 5; i++){
    count = count - 0.2

    myTimeout = setTimeout(delayReveal, 6000)
  }
  
  myTimeout2 = setTimeout(() => {modal2.style.display = "none"}, 6250)

}