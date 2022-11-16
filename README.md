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

## Usage
* run `yarn develop`
* Navigate to `https://localhost:3000/` in your browser
  * Note - it's recommended to open the app in incognito mode or in a separate browser session to your normal Looker user account, as the SSO Authentication mechanism will interfere with any other Looker logins in the same session.

## Further reference
* [React.js](https://reactjs.org/)
* [Flask](https://flask.palletsprojects.com/en/2.2.x/)
* [Looker Embed SDK](https://looker-open-source.github.io/embed-sdk/)
* [Looker components](https://looker-open-source.github.io/components/latest/)

