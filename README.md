# Example app for Pipedrive Marketplace

A very basic example of how to:
* Authorize with OAuth using [passportjs](http://www.passportjs.org/)
* Get all open deals from Pipedrive
* Mark selected deal randomly as won or lost

## Installation and usage
* Create a test app in [Developer Hub](https://app.pipedrive.com/developer-hub) with the following callback URL: `http://localhost:3000/auth/pipedrive/callback`
* Run `npm install`
* Rename `config.example.js` to `config.js` and edit the `clientID` and `clientSecret` values
* Run `node index.js` and open http://localhost:3000