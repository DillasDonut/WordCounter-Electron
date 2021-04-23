window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
   // Get the #text element
const textArea = document.querySelector('#text');
// Get the #word-count and #char-count elements
const characterCount = document.querySelector('#char-count');
const wordCount = document.querySelector('#word-count');

function getWordCount (field) {
    // Trim whitespace from the value
    const value = field.value.trim();
    
    // If it's an empty string, return zero
    if (!value) return 0;
  
    // Otherwise, return the word count
    return value.split(/\s+/).length;
  }

  function getCharacterCount (field) {
    return field.value.length;
  }
  

  function handleInput () {
    wordCount.textContent = getWordCount(this);
    characterCount.textContent = getCharacterCount(this);
  }
  
  
  //
  // Inits & Event Listeners
  //
  
  // Handle input events
  textArea.addEventListener('input', handleInput);

  })
  