# Blog for DESandoval.net

## Development
1. [Install Hugo](https://gohugo.io/getting-started/installing/)
2. `yarn` (or `npm install`)
3. `yarn local` (or `npm run local`)

### Environment variables
For the I Am... page to work, the following environment variables need to be set:
```
LASTFM_API_KEY
```
You can use `dotenv` to access these locally via a `.env` file in the directory root

## Deployment
Currently deployed on netlify. Can be deployed anywhere using `yarn build && hugo`
