    //Validation for Contact Section
const form = document.getElementById('form');
const mail = document.getElementById('email');
const contactButton = document.querySelector('.sub-button');
const msg = document.querySelector('#error');
    
    // Error Message function
    function error(input) {
      const inputcase = input.toLowerCase();
      const regex = /@+./;
      
      //Test input value
      if (inputcase !== input) {
        msg.innerText = 'Please, enter a lower case input';
        msg.className = 'error-pop';
        return false;
      }
      if (!regex.test(input)) {
        msg.innerText = 'Your Email should have @ and . . Kindly add those';
        msg.className = 'error-pop';
        return false;
      }
      if (inputcase === input) {
        msg.innerText = 'Sucessful';
        form.submit();
        return true;
      }
    }
    
    form.addeEventListener('submit', (event) => {
      event.preventDefault();
      error(mail.value);
    });