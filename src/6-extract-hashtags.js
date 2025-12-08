const extractHashtags = (post) => {
  // Your code here
  let hashes = []
  let none = [];
  for(let i = 0; i < post.length; i++) {
  }
  return hashes;
}

console.log(extractHashtags("Love this #coding bootcamp! #javascript #WebDev"));
// ["#coding", "#javascript", "#WebDev"]

console.log(extractHashtags("No hashtags here"));
// []

console.log(extractHashtags("#First word #last-word and #middle123 word"));
// ["#First", "#last-word", "#middle123"]
