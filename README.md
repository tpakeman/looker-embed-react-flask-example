# Simple Embedded Looker Application
_This repository contains all of the elements needed to run a simple web application containing an embedded Looker dashboard._

## Pre-requisites
* Node
  * Linux
    * `sudo apt install nodejs && sudo apt install npm`
  * [OSX](https://nodejs.org/en/download/)
* Yarn
  * `npm install --global yarn`
* Python 3.x
  * I recommend doing this through [homebrew](https://brew.sh/)
  * `brew install python@3.10` (or whatever 3.x version you prefer)
* pipenv
  * `brew install pipenv` or `pip3 install --user pipenv`
* [Looker instance with Admin API3 credentials](https://github.com/looker-open-source/sdk-codegen/tree/main/python#configuring-the-sdk)
  * Ensure you add `http://localhost:3000` to the [Embedded Domain Allowlist](https://cloud.google.com/looker/docs/admin-panel-platform-embed#embedded_domain_allowlist) and turn on 'Embed Authentication'

## Installation
* Copy `.env.example` to `.env` and update the Looker hostname value appropriately
* Make a `looker.ini` file inside the `api/` directory
  * Add the Looker admin credentials here [following these instructions](https://github.com/looker-open-source/sdk-codegen/tree/main/python#configuring-the-sdk)
* Edit the `api/user.json` file to populate some user data that will be used for the embedding
  * [Instructions can be found here](https://cloud.google.com/looker/docs/single-sign-on-embedding#collecting_the_necessary_looker_information)
* Install the react dependencies
  * `yarn install`
* Install the python dependencies in the api folder using a pipenv virtual environment
  * `cd api`
  * `pipenv install`
* Update the value of `DASHBOARD_ID` in `src/App.js` on line 6 

## Usage
* run `yarn develop`
* Navigate to `https://localhost:3000/` in your browser
  * Note - it's recommended to open the app in incognito mode or in a separate browser session to your normal Looker user account, as the SSO Authentication mechanism will interfere with any other Looker logins in the same session.

## Troubleshooting
* If you see an authentication error such as a 401 or 403 the most likely cause is because the `api/user.json` object contains invalid values - i.e. it cannot access the dashboard you are trying to embed
  * The best way to test this is to log in to Looker and sudo as your Embedded User and see if you have access when using the Looker UI. If not check access settings such as folder permissions, model sets and permission sets
* If this is not the issue, make sure your browser does not have restrictive Cookie settings. Looker requires third-party cookies to be enabled for the embedded application to work. These are blocked in Safari and in Chrome's incognito mode by default.
  * [More information on changing this here](https://cloud.google.com/looker/docs/best-practices/how-to-troubleshoot-sso-embed-authentication-errors#im-getting-redirected-to-a-page-with-the-401-error-message-you-are-not-authenitcated-to-view-this-page.)
* [More troubleshooting tools can be found here](https://community.looker.com/embedding-looker-powered-by-looker-75/sso-embed-tools-and-troubleshooting-resources-20620)

## Further reference
* [React.js](https://reactjs.org/)
* [Flask](https://flask.palletsprojects.com/en/2.2.x/)
* [Looker Embed SDK](https://looker-open-source.github.io/embed-sdk/)
* [Looker components](https://looker-open-source.github.io/components/latest/)

