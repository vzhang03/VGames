const axios = require('axios');

// Google OAuth client ID from your input
const GOOGLE_AUTH_CLIENT_ID = process.env.GOOGLE_AUTH_CLIENT_ID;

/**
 * Generate a random username of specified length
 * @param {number} length - Length of the username
 * @returns {string} Random username
 */
function generateRandomUsername(length = 8) {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Generate a random email address
 * @returns {string} Random email address
 */
function generateRandomEmail() {
  const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "example.com"];
  const username = generateRandomUsername(Math.floor(Math.random() * 8) + 5); // 5-12 characters
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${username}@${domain}`;
}

/**
 * Send a request to Google's OAuth endpoint with random credentials
 * @returns {Promise} Promise representing the request
 */
async function pingGoogleServer() {
  const username = generateRandomUsername();
  const email = generateRandomEmail();
  
  // Prepare request data
  const params = new URLSearchParams({
    'client_id': GOOGLE_AUTH_CLIENT_ID,
    'username': username,
    'email': email,
    'response_type': 'code',
    'redirect_uri': 'urn:ietf:wg:oauth:2.0:oob',
    'scope': 'email profile'
  });
  
  // Google OAuth endpoint
  const url = "https://accounts.google.com/o/oauth2/auth";
  
  try {
    // Set a timeout to prevent hanging
    const response = await axios.get(`${url}?${params.toString()}`, {
      timeout: 5000
    });
    
    console.log(`Request sent with username: ${username}, email: ${email}`);
    console.log(`Status code: ${response.status}`);
    
    // Don't print full response content as it could be very large
    console.log(`Response length: ${response.data.length} characters`);
    console.log("-".repeat(50));
    
    return response.status;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(`Status code: ${error.response.status}`);
      console.log(`Response length: ${error.response.data.length} characters`);
    } else if (error.request) {
      // The request was made but no response was received
      console.log("No response received from server");
    } else {
      // Something happened in setting up the request
      console.log(`Error occurred: ${error.message}`);
    }
    console.log("-".repeat(50));
    return null;
  }
}

/**
 * Main function to run the script
 */
async function main() {
  console.log("Starting ping script with random credentials...");
  console.log(`Using client ID: ${GOOGLE_AUTH_CLIENT_ID}`);
  console.log("-".repeat(50));
  
  let count = 0;
  
  // Set up interval for pinging
  const runPing = async () => {
    count++;
    console.log(`Ping #${count}`);
    await pingGoogleServer();
    
    // Add a delay to avoid rate limiting
    const delay = Math.random() * 2000 + 1000; // 1-3 seconds
    console.log(`Waiting ${(delay/1000).toFixed(2)} seconds before next request...`);
  };
  
  // Initial ping
  await runPing();
  
  // Continue pinging at intervals
  const intervalId = setInterval(async () => {
    await runPing();
  }, 3000); // Base interval of 3 seconds, plus the random delay in runPing
  
  // Handle script termination
  process.on('SIGINT', () => {
    clearInterval(intervalId);
    console.log("\nScript terminated by user.");
    process.exit(0);
  });
}

// Run the script
main().catch(error => {
  console.error("Unhandled error:", error);
  process.exit(1);
});