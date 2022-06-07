// Todo remove RSS parser as a dependency
import fetch from "node-fetch";
import { stringify } from 'querystring';

require('dotenv').config()
const collectionId = 0;
const params = {
  perpage: 10,
};

export async function handler (event, context, callback) {
  try {
    const response = await fetch(`https://api.raindrop.io/rest/v1/raindrops/${collectionId}?${stringify(params)}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.RAINDROP_TEST_TOKEN}`
      }
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()
    // console.log(data);
    if (data.items) {
      return {
        statusCode: 200,
        body: JSON.stringify(data.items)
      }
    } else {
      throw new Error(`raindrops cannot be retrieved from ${JSON.toString(data)}`)
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
