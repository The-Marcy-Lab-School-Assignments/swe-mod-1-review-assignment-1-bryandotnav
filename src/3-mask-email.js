const maskEmail = (email) => {
let trimmed = email.trim();
let Index = trimmed.indexOf('@');
if (Index <= 1) {
    return trimmed;
}
return trimmed[0] + '***' + trimmed.slice(Index);
}

console.log(maskEmail("maya.rodriguez@example.com"));
// "m***@example.com"

console.log(maskEmail("  abc@example.com"));
// "a***@example.com"

console.log(maskEmail("j@example.com"));
// "j@example.com" (too short to mask)

// trim the email
// mask every character after the first one and before the @