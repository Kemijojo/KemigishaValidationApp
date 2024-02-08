function validateCredentials(email, password) {
    // Define the valid email and password
    let validEmail = "kemigishajoan@gmail.com";
    let validPassword = "2200706128@2024";
 
    // Check if the provided email and password match the valid ones
    if (email === validEmail && password === validPassword) {
        console.log(`User email is ${email}, successful login`);
    } else {
        console.log("Invalid user details");
    }
}
 // calling code
 validateCredentials("kemigishajoan@gmail.com", "2200706128@2024");


