// this is a modern js feature where user can handle asynchronous code in a synchronous and structured way to work with promises and asyncs operations.
// This feature is useful for making more readable and maintainable.

//user need to start with async keyword


async function fetchUser(id) {
    try {
      const response = await fetch(`${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error; // Re-throw to allow the caller to handle it
    }
  }
  
  async function fetchPosts(id) {
    try {
      const response = await fetch(`${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error; // Re-throw to allow the caller to handle it
    }
  }
  
  fetchUser(1)
    .then(user => {
      console.log('User :', user.name);
      return fetchPosts(user.id);
    })
    .then(posts => {
      console.log('Posts : ', posts);
      renderPosts(posts);
    })
    .catch(error => {
      console.log('Request failed:', error);
    });