async function deletePost() {
    const postId = window.location.pathname.split('/').pop();
  
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deletePost);
  