document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting immediately
    
    // Fetch all form inputs
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.getElementById('gender').value;
    const counseling = document.querySelector('input[name="counseling"]:checked');
    const terms = document.getElementById('terms').checked;
  
    let errors = [];
  
    // Validate fields
    if (fullName === '') {
      errors.push('Full Name is required.');
    }
    if (email === '') {
      errors.push('Email Address is required.');
    } else if (!validateEmail(email)) {
      errors.push('Please enter a valid Email Address.');
    }
    if (gender === '') {
      errors.push('Please select a Gender.');
    }
    if (!counseling) {
      errors.push('Please select if you want counseling.');
    }
    if (!terms) {
      errors.push('You must agree to the terms and conditions.');
    }
  
    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      alert('Form submitted successfully!');
      this.submit(); // Now submit the form
    }
  });
  
  // Simple email validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }