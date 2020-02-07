const RSSParser = require("rss-parser");

exports.handler = async function (event, context, callback) {
  try {
    const rss = new RSSParser();
    const response = await rss.parseURL('http://wallabag.desandoval.net/daniel/Uie7r5pfgWbD7eH/unread.xml')
    return  {
      statusCode: 200,
      body: JSON.stringify(response.items)
    }
  } catch {
    return  {
      statusCode: 500,
      body: JSON.stringify({"error": "internal server error"})
    }
  }
  
}