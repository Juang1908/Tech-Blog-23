async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-body"]').value;
  
    if (!title || !post_content) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          post_content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  