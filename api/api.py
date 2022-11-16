from looker_sdk import models, init40
from flask import Flask, request
import json

app = Flask(__name__)
sdk = init40()

def fetch_user_data():
    """Function to return some static user data"""
    with open('user.json', 'r') as f:
        data = json.loads(f.read())
    return data

def fetch_sso_url(user_data, resource_path):
    """General function to fetch an SSO URL from the API"""
    hostname = sdk.auth.settings.base_url
    resource_path = resource_path if not resource_path.startswith('/embed/') else resource_path.split('/embed/')[-1]
    link_params = models.EmbedSsoParams(target_url=f"{hostname}/{resource_path}", **user_data)
    api_response = sdk.create_sso_embed_url(link_params)
    return api_response.url

@app.route('/api/sso_auth')
def sso_auth():
    """Return a valid SSO URL"""
    resource_path = request.args.get('src')
    user_data = fetch_user_data()
    url = fetch_sso_url(user_data, resource_path)
    return {'url': url, 'result': 'success' }
