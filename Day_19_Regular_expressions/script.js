//Regular Expression

//Basic Regular Expression---------------------------------------------------------------------

// 1.
function matchJavaScript(text) {
    const regex = /JavaScript/g; // Regular expression to match the word "JavaScript"
    const matches = text.match(regex); // Find all matches
  
    if (matches) {
      console.log("Matches for 'JavaScript':", matches);
    } else {
      console.log("No matches found for 'JavaScript'.");
    }
  }
  
  // Example usage:
  const exampleText1 = "I love JavaScript! JavaScript is a versatile language. Learning JavaScript can be fun.";
  matchJavaScript(exampleText1);
  


// 2.
function matchDigits(text) {
    const regex = /\d+/g; // Regular expression to match all digits (one or more)
    const matches = text.match(regex); // Find all matches
  
    if (matches) {
      console.log("Matches for digits:", matches);
    } else {
      console.log("No digits found.");
    }
  }
  
  // Example usage:
  const exampleText2 = "The numbers are 123, 4567, and 89. Let's find them all!";
  matchDigits(exampleText2);
  

// Character classes and Quantifiers------------------------------------------------------------------
// 3.
function matchCapitalWords(text) {
    const regex = /\b[A-Z][a-z]*\b/g; // Regular expression to match words starting with a capital letter
    const matches = text.match(regex); // Find all matches
  
    if (matches) {
      console.log("Matches for words starting with a capital letter:", matches);
    } else {
      console.log("No words starting with a capital letter found.");
    }
  }
  
  // Example usage:
  const exampleText3 = "Alice went to the Park with Bob. They saw a beautiful Lake and a majestic Eagle.";
  matchCapitalWords(exampleText3);
  


// 4.
function matchDigitSequences(text) {
    const regex = /\d+/g; // Regular expression to match sequences of one or more digits
    const matches = text.match(regex); // Find all matches
  
    if (matches) {
      console.log("Matches for sequences of digits:", matches);
    } else {
      console.log("No sequences of digits found.");
    }
  }
  
  // Example usage:
  const exampleText4 = "The flight numbers are 1234, 5678, and 90. Call me at 555-1234.";
  matchDigitSequences(exampleText4);
  


// Grouping and Capturing---------------------------------------------------------------------------
// 5.
function capturePhoneNumberParts(phoneNumber) {
    const regex = /\((\d{3})\) (\d{3})-(\d{4})/; // Regular expression to capture phone number parts
    const match = phoneNumber.match(regex); // Find matches and capture groups
  
    if (match) {
      const [fullMatch, areaCode, centralOfficeCode, lineNumber] = match;
      console.log("Full Match:", fullMatch);
      console.log("Area Code:", areaCode);
      console.log("Central Office Code:", centralOfficeCode);
      console.log("Line Number:", lineNumber);
    } else {
      console.log("No valid phone number found.");
    }
  }
  
  // Example usage:
  const phoneNumber = "(123) 456-7890";
  capturePhoneNumberParts(phoneNumber);
  

// 6.
function captureEmailParts(email) {
    const regex = /^(\w+)@([\w.]+)$/; // Regular expression to capture username and domain
    const match = email.match(regex); // Find matches and capture groups
  
    if (match) {
      const [fullMatch, username, domain] = match;
      console.log("Full Match:", fullMatch);
      console.log("Username:", username);
      console.log("Domain:", domain);
    } else {
      console.log("No valid email address found.");
    }
  }
  
  // Example usage:
  const email = "username@example.com";
  captureEmailParts(email);
  


//Assertion and Bounddaries---------------------------------------------------
// 7.
function matchWordAtStart(text, word) {
    const regex = new RegExp(`^${word}\\b`, 'i'); // Regular expression to match the word at the beginning
    const match = text.match(regex); // Find matches
  
    if (match) {
      console.log(`Word '${word}' at the start of the string:`, match[0]);
    } else {
      console.log(`No match for '${word}' at the beginning of the string.`);
    }
  }
  
  // Example usage:
  const exampleText7 = "Hello world, this is a test.";
  matchWordAtStart(exampleText7, "Hello");
  


// 8.
function matchWordAtEnd(text, word) {
    const regex = new RegExp(`\\b${word}$`, 'i'); // Regular expression to match the word at the end
    const match = text.match(regex); // Find matches
  
    if (match) {
      console.log(`Word '${word}' at the end of the string:`, match[0]);
    } else {
      console.log(`No match for '${word}' at the end of the string.`);
    }
  }
  
  // Example usage:
  const exampleText8 = "This is a test.";
  matchWordAtEnd(exampleText8, "test");
  


//Pratical Applications---------------------------------------------------
// 9.
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*()])[A-Za-z\d@!#$%^&*()]{8,}$/;
    const isValid = regex.test(password);
  
    if (isValid) {
      console.log("Password is valid.");
    } else {
      console.log("Password is invalid.");
    }
  }
  
  // Example usage:
  const password = "Password1!";
  validatePassword(password);
  



// 10.
function validateURL(url) {
    const regex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9#]*)?$/;
    const isValid = regex.test(url);
  
    if (isValid) {
      console.log("URL is valid.");
    } else {
      console.log("URL is invalid.");
    }
  }
  
  // Example usage:
  const url = "https://www.example.com";
  validateURL(url);
  