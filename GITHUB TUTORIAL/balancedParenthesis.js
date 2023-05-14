
function isValidmyString(myString) {
    let stack = [];
    
    for (let i = 0; i < myString.length; i++) {
      let char = myString[i];
      
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } 
      else {
        if (stack.length === 0) {
          return 'no';
        }
        
        let currentChar = stack.pop();
        
        if (currentChar === '(' && char !== ')') {
          return 'no';
        }
        if (currentChar === '[' && char !== ']') {
          return 'no';
        }
        if (currentChar === '{' && char !== '}') {
          return 'no';
        }
      }
    }
    
    if (stack.length === 0) {
      return 'yes';
    } else {
      return 'no';
    }
  }

  console.log(isValidmyString("{([])}"))