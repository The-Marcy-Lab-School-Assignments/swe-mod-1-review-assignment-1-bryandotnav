const extractHashtags = (post) => {
  // Your code here
  let hashtag = []
  for (let i = 0; i < post.length; i++) {

  }
}

console.log(extractHashtags("Love this #coding bootcamp! #javascript #WebDev"));
// ["#coding", "#javascript", "#WebDev"]

console.log(extractHashtags("No hashtags here"));
// []

console.log(extractHashtags("#First word #last-word and #middle123 word"));
// ["#First", "#last-word", "#middle123"]
