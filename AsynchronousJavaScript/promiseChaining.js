// When we have multiple asynchronous tasks that depend on each other, chaining promises allows you to create a clear and organized flow of execution. 



//**********this code is copied for education purpose only ************/

// Scenario: Social Media App Workflow
// Login a user.

// Fetch their profile using the user ID from login.

// Fetch their posts using the profile data.

// Render the latest post.
// Mock API functions (simulate network delays with setTimeout)

// 1. Login user
const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "1234") {
          resolve({ id: 1, name: "John Doe" }); // Success
        } else {
          reject(new Error("Invalid email or password")); // Failure
        }
      }, 1000);
    });
  };
  
  // 2. Fetch user profile (requires user ID from login)
  const fetchUserProfile = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          userId: userId,
          bio: "Frontend Developer",
          location: "New York",
        });
      }, 1000);
    });
  };
  
  // 3. Fetch user posts (requires user ID)
  const fetchUserPosts = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
            { id: 1, text: "Async/Await is awesome!" },
            { id: 2, text: "Learning promise chaining!" },
        ]);
      }, 1000);
    });
  };
  
  // 4. Render the latest post
  const renderLatestPost = (posts) => {
    const latestPost = posts[0];
    console.log("Latest post:", latestPost.text);
    return latestPost; // Pass data further down the chain if needed
  };
  
  // Promise Chain Execution
  loginUser("user@example.com", "1234") // Step 1: Login
    .then((user) => {
      console.log("Logged in as:", user.name);
      return fetchUserProfile(user.id); // Step 2: Pass user ID to next step
    })
    .then((profile) => {
      console.log("Profile data:", profile);
      return fetchUserPosts(profile.userId); // Step 3: Fetch posts
    })
    .then((posts) => {
      console.log("Posts fetched:", posts);
      return renderLatestPost(posts); // Step 4: Render
    })
    .then((latestPost) => {
      console.log("Rendered post:", latestPost.text);
    })
    .catch((error) => {
      console.error("Error:", error.message); // Handle ANY error in the chain
    });