const bcrypt = require('bcryptjs');

// Function to hash a password
function hashPassword(password) {
    // Set the number of rounds (cost factor) for bcrypt
    const saltRounds = 10;
    
    // Generate a salt and hash the password
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
        } else {
            console.log('Hashed Password:', hashedPassword);
        }
    });
}

// Example usage
const password = 'abcd';  // Replace with the password you want to hash
hashPassword(password);
