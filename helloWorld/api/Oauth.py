import requests
import  base64
import json 
##fxn takes client key, secrent key, the token, and api url 
## 

# https://developer.byu.edu/docs/consume-api/use-api/oauth-20/oauth-20-python-sample-code
# urlRequest = "https://api.spotify.com/v1/albums/04rz93AqGy9JduzV3K81Dh/tracks"


client = "41af0e72781d46a0a52fac7f3860d7f0"
secret = "6b888f52bd224b9891fef6c35f178b5f"
api_URL = "https://accounts.spotify.com/api/token"



# def main():
# 	grant_type = 'client_credentials'

# 	body_params = {'grant_type' : grant_type}

# 	# AUTH.
# 	response=requests.post(api_URL, data=body_params, auth = (client, secret)) 
# 	print(response.json())



class Oauth():
	def getToken(self):
		grant_type = 'client_credentials'
		body_params = {'grant_type' : grant_type}
		# AUTH.
		response=requests.post(api_URL, data=body_params, auth = (client, secret)) 
		# print(response.json())
		return response.json()["access_token"]

