// Select elements from the DOM
const usernameInput = document.getElementById('username');
const submitUserButton = document.getElementById('submitUser');
const postSection = document.getElementById('postSection');
const postInput = document.getElementById('postInput');
const postButton = document.getElementById('postButton');
const postThread = document.getElementById('postThread');

let currentUser = '';

// Event listener: When Submit is clicked, lock the name and show the posting area
submitUserButton.addEventListener('click', () => {
    currentUser = usernameInput.value.trim();
    if (currentUser) {
        postSection.style.display = 'block';
        usernameInput.disabled = true;
        submitUserButton.disabled = true;
    }
});

// Event listener: When Post is clicked, generate the post and encrypted string
postButton.addEventListener('click', () => {
    const postText = postInput.value.trim();
    if (postText) {
        const date = new Date().toLocaleString();
        
        // Encrypt the data (Username + Post + Date) using Base64
        const rawData = `${currentUser} | ${postText} | ${date}`;
        const encryptedPost = btoa(rawData); 
        
        // Create the HTML structure for the new post
        const postHTML = `
            <div class="post">
                <strong>ORIGINAL POST:</strong> ${postText}<br>
                <small>ENCRYPTED: ${encryptedPost}</small>
            </div>
        `;
        
        // Append the new post to the thread container
        postThread.innerHTML += postHTML;
        
        // Clear the textarea after posting
        postInput.value = '';
    }
});
