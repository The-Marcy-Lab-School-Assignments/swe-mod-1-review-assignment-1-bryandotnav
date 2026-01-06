const extractHashtags = (post) => {
  // Your code here
  const hashtags = post.split(' ').filter(word => word.startsWith('#'));
  if(hashtags.length) {
    return hashtags 
  } else {
    return "No hashtags here"
  }
}

console.log(extractHashtags("Love this #coding bootcamp! #javascript #WebDev"));
// ["#coding", "#javascript", "#WebDev"]

console.log(extractHashtags("No hashtags here"));
// []

console.log(extractHashtags("#First word #last-word and #middle123 word"));
// ["#First", "#last-word", "#middle123"]
