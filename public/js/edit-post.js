async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_text = document.querySelector('textarea[name="post-text"]').value.trim();
    const postId = window.location.pathname.split('/').pop();
  
    if (!title || !post_text) {
      alert('Please provide a title and post text.');
      return;
    }
  
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, post_text }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  