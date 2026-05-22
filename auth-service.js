// auth-service.js
// Handles user authentication for Project Nova
// this is a different branch lol

const users = [];

function register(username, password) {
  const existing = users.find(u => u.username === username);
  if (existing) {
    return { success: false, message: "User already exists." };
  }
  users.push({ username, password });
  return { success: true, message: "User registered successfully." };
}

function login(username, password) {
  const user = users.find(
    u => u.username === username && u.password === password
  );
  if (!user) {
    return { success: false, message: "Invalid credentials." };
  }
  return { success: true, message: "Login successful." };
}

function logout(username) {
  console.log(`User ${username} has logged out.`);
  return { success: true };
}

module.exports = { register, login, logout };