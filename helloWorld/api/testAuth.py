#!/usr/bin/env
from Oauth import Oauth
import requests
import  base64
import json 
# https://stackoverflow.com/questions/18139093/base64-authentication-python




def main():

	auth = Oauth()
	print(auth.getToken())



if __name__ == "__main__":
    main()