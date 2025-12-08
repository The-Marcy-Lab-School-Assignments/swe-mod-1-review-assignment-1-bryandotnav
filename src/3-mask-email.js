const maskEmail = (email) => {
    let count = 0;
    let trimmed = email.trim();
    let name = email.indexOf("@")
    for(let i = 0; i < email.length; i++){
        if(email[i] === "@") break;
        count++;
    }
    if(count <= 2) {
        return email
    } 
}

console.log(maskEmail("maya.rodriguez@example.com"));
// "m***@example.com"

console.log(maskEmail("  abc@example.com"));
// "a***@example.com"

console.log(maskEmail("j@example.com"));
// "j@example.com" (too short to mask)
