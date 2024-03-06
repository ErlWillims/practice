const messagesContainer = document.getElementById('messages');
  const usersContainer = document.getElementById('users');
  const inputMessage = document.getElementById('input-message');
  const sendButton = document.getElementById('send-button');

  const users = [];
  const messages = [];

  // Function to add a message to the chat
  function addMessage(user, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${user}:</strong> ${message}`;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Function to update the list of connected users
  function updateUsersList() {
    usersContainer.innerHTML = '<strong>Connected Users:</strong>';
    users.forEach(user => {
      const userElement = document.createElement('div');
      userElement.textContent = user;
      usersContainer.appendChild(userElement);
    });
  }

  // Event listener for the send button
  sendButton.addEventListener('click', () => {
    const message = inputMessage.value.trim();
    if (message !== '') {
      // For simplicity, assume the user is already logged in
      const currentUser = 'User1';
      addMessage(currentUser, message);
      // For simplicity, update the list of connected users every time a message is sent
      updateUsersList();
      inputMessage.value = '';
    }
  });

  // For simplicity, assume the user is already logged in
  const currentUser = 'User1';
  users.push(currentUser);

  // Initial messages
  addMessage('System', `${currentUser} has joined the chat.`);

  // Initial user list
  updateUsersList();