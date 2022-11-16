# Simple Embedded Looker Application

## Pre-requisites
* Node + yarn
* Python 3.x and pipenv
* Looker instance with Admin API3 credentials

## Installation
* Copy `.env.example` to `.env` and update the value appropriately
* Make a `looker.ini` file inside the `api/` directory
  * Add the Looker admin credentials here [following these instructions](https://foo)
* Edit the `api/user.json` file to populate some user data that will be used for the embedding
  * [Instructions can be found here]()
* Install the react dependencies
  * `yarn install`
* Install the python dependencies in the api folder using a pipenv virtual environment
  * `cd api`
  * `pipenv shell`
  * `pipenv install`

## Usage
* run `yarn develop`
* Navigate to `https://localhost:3000/` in your browser

## Architecture

## Development

