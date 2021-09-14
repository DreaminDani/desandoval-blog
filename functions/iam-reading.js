// Todo replace with raindrop
// Todo remove RSS parser as a dependency
exports.handler = async function (event, context, callback) {
  try {
    return  {
      statusCode: 200,
      body: JSON.stringify({})
    }
  } catch {
    return  {
      statusCode: 500,
      body: JSON.stringify({"error": "internal server error"})
    }
  }
  
}
