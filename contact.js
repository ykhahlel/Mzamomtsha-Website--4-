
const form = document.getElementById('form');
const firstName = document.getElementById('name');
const lastName = document.getElementById('surname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const organization = document.getElementById('organization');
const popup = document.getElementById('popup');

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form_control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form_control success';
}


  // show input email error message
  function emailError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form_control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

    if (input.id === 'email') {
      small.innerText += ' Format: name@domain.com';
    }
  }
  // check email is valid
  function checkEmail(input) {
    const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      emailError(input, `Please enter a valid email address.`);
    }
  }

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input length
const nameRegex = /^[a-z]+$/i;
function checkName(input) {
  if (nameRegex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} must contain only upper and lower case letters`);
  }
}

// Error phone number
function showPhone(input, message, format) {
  const formControl = input.parentElement;
  formControl.className = 'form_control error';
  const small = formControl.querySelector('small');
  small.innerText = `${message}. Format: ${'+27711234523'} / ${'0711486892'}`;
}

// check phone number
const phoneRegex = /^(\+27|0)[1-9]\d{8}$/;
function checkPhone(input) { 
  if (phoneRegex.test(input.value.trim())) {
    // Format phone number
    const formattedPhone = input.value.replace(phoneRegex, function(match) {
      if (match.charAt(0) === '+') {
        return match.replace(/^(\+27)(\d{2})(\d{3})(\d{4})$/, '$1 $2 $3 $4');
      } else {
        return match.replace(/^0(\d{2})(\d{3})(\d{4})$/, '0 $1 $2 $3');
      }
    })
    // Remove spaces between numbers
    .replace(/\s+/g, '');

    // Update input value with formatted phone number
    input.value = formattedPhone.trim(); 
    showSuccess(input);
  } else {
    showPhone(input, 'Please enter a valid phone number');
  }
}

//check organization and message

const regex = /^[a-zA-Z0-9]+$/i;
function checkAlphanumeric(input) {
  if (regex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} must contain only characters and numbers`);
  }
}


// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check if all form fields have been filled correctly
function checkForm() {
  const allFieldsValid = Array.from(form.querySelectorAll('.form_control')).every(function(field) {
    return field.classList.contains('success');
  });
  // If all fields are valid, show the popup
  if (allFieldsValid) {
    showPopup();
  }
}

// This function shows the popup
function showPopup() {
  popup.classList.add("open-popup");
}

// This function hides the popup and resets the form
function showForm() {
  var formID = document.getElementById('head');
  formID.classList.remove("open-head");
  popup.classList.remove("open-popup");
  form.reset()
}

function changeBackgroundColor(element) {
  element.style.backgroundColor = "#F0AB9C";
  }

function resetBackgroundColor(element) {
  element.style.backgroundColor = "";
  }
// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([firstName, lastName, email, phone, organization, message]);
  checkName(firstName);
  checkName(lastName);
  checkEmail(email);
  checkPhone(phone);
  checkAlphanumeric(organization);
  checkAlphanumeric(message);


  checkForm();
});

