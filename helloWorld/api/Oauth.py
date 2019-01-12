import requests
import json


##fxn takes client key, secrent key, the token, and api url 
## 

# https://developer.byu.edu/docs/consume-api/use-api/oauth-20/oauth-20-python-sample-code

class Oauth():
	def request(client, secret, token, api):
		keys = {'grant_type': 'client_credentials'}
		response = requests.post(token,data=data,verify=False, allow_redirects=False,auth=(client, secret) )

		#getting response code 
		resonse_token = json.loads(response.text)
		return resonse_token
		# printing token as an exmple
		# print(tokens['access_token'])





#extra stuff from the website
# api_call_headers = {'Authorization': 'Bearer ' + tokens['access_token']}
# api_call_response = requests.get(test_api_url, headers=api_call_headers, verify=False)

# print api_call_response.text



