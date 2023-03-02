async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    // form validation
    if (!username || !password) {
      alert('Please enter a valid username and password.');
      return;
    }
  
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create user.');
    }
  }
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  