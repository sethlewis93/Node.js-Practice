// Profile
/**
 * Node JS system events:
 * Data, Completion, and Error
 **/
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
  console.log(message);
}

const https = require("https");
function printError(error) {
  console.error(error.message);
}

function get(username) {
  try {
    // Connect to the API URL (https://teamtreehouse.com/sethlewis.json)
    const request = https.get(
      `https://teamtreehouse.com/${username}.json`,
      (res) => {
        let body = "";
        // Read the data
        res.on("data", (data) => {
          body += data.toString();
        });
        res.on("end", () => {
          try {
            // Parse the data
            const profile = JSON.parse(body);
            printMessage(
              username,
              profile.badges.length,
              profile.points.JavaScript
            );
          } catch (error) {
            printError(error);
          }
        });
        // Print the data
      }
    );
    request.on("error", (error) => printError(error));
  } catch (error) {
    printError(error);
  }
}

module.exports.get = get;
