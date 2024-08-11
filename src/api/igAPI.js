const axios = require("axios");
const cheerio = require("cheerio");
const dotenv = require("dotenv");
dotenv.config();

const { INSTAGRAM_URL } = process.env;

const igAPI = async (username) => {
  try {
    const response = await axios.get(`${INSTAGRAM_URL}/${username}/`);

    let instagramProfile = {
      status: "Ok",
      data: [],
    };

    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      const name = $("meta[property='og:title']").attr("content");
      const description = $("meta[property='og:description']").attr("content");
      const url_name = $("meta[property='og:url']").attr("content");
      const profilePicUrl = $("meta[property='og:image']").attr("content");

      // Extract the username from the name
      const usernameMatch = name ? name.match(/\((.*?)\)/) : null;
      const extractedUsername = usernameMatch ? usernameMatch[1].trim() : '';

      instagramProfile.data.push({
        name: name ? name.split('(')[0].trim() : '',
        username: extractedUsername,
        description: description ? description.split('-')[0].trim() : '',
        url_name,
        profilePicUrl
      });
    }

    return instagramProfile;
  } catch (error) {
    console.error("Error fetching the URL:", error);
    throw error;
  }
};

module.exports = igAPI;
