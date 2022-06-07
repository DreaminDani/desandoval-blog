import fetch from "node-fetch";
import { stringify } from 'querystring';

require('dotenv').config()
const params = {
  method: 'user.getrecenttracks',
  user: 'd3sandoval',
  api_key: process.env.LASTFM_API_KEY,
  format: 'json',
  limit: 10,
};

export async function handler (event, context) {
  try {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?${stringify(params)}`, {
      headers: { Accept: 'application/json' }
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()
    
    if (data.recenttracks && data.recenttracks.track) {
      return {
        statusCode: 200,
        body: JSON.stringify(data.recenttracks.track)
      }
    } else {
      throw new Error(`tracks cannot be retrieved from ${JSON.toString(data)}`)
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}