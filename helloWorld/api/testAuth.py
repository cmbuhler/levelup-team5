#!/usr/bin/env
import Oauth as AUTH

import requests
import  base64
import json 
# https://stackoverflow.com/questions/18139093/base64-authentication-python



client = "41af0e72781d46a0a52fac7f3860d7f0"
secret = "6b888f52bd224b9891fef6c35f178b5f"

api_URL = "https://accounts.spotify.com/api/token"
urlRequest = "https://api.spotify.com/v1/albums/04rz93AqGy9JduzV3K81Dh/tracks"
def main():
	grant_type = 'client_credentials'

	body_params = {'grant_type' : grant_type}

	# AUTH.
	response=requests.post(api_URL, data=body_params, auth = (client, secret)) 
	print(response.json())


# usrPass = "userid:password"
# b64Val = base64.b64encode(usrPass)
# r=requests.post(api_URL, 
#                 headers={"Authorization": "Basic %s" % b64Val},
#                 data=payload)




if __name__ == "__main__":
    main()