from api.Oauth import Oauth

from api.models import Note
from rest_framework import viewsets
from api.serializers import NoteSerializer

from django.http import JsonResponse, HttpResponse
from django.views.generic.base import View
import requests
import json
import urllib

# Create youdr views here.
class NoteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows notes to be viewed or edited
    """
    queryset = Note.objects.all().order_by('-created_at')
    serializer_class = NoteSerializer


def MovieView(request):
    movie = request.GET.get("movie")
    auth = Oauth()

    queryDict = {
        "q" : movie,
        "type" : "album",
        "limit" : "1"
    }

    queryString = urllib.parse.urlencode(queryDict)
    searchRequest = "https://api.spotify.com/v1/search?" + queryString
    searchResults = requests.get(searchRequest, headers={
        "Authorization": "Bearer " + auth.getToken(),
    })
    searchResultsDict = searchResults.json()

    movieRecord = searchResultsDict["albums"]["items"][0]
    if movieRecord is None:
        print("Can not find " + movie)
        movid = "04rz93AqGy9JduzV3K81Dh"
        imageLink = ""
        movName = "Lord Of The Rings: The Fellowship Of The Ring (Original Motion Picture Soundtrack)"
    else:
        movid = movieRecord["id"]
        imageLink = movieRecord["images"][0]["url"]
        movName = movieRecord["name"]

    result = {}
    result["name"] = movName
    result["image"] = imageLink

    
    urlRequest = "https://api.spotify.com/v1/albums/"+ movid +"/tracks"
    r = requests.get(urlRequest, headers={
        "Authorization": "Bearer " + auth.getToken()})
    resp_dict = r.json()

    itemarr = resp_dict["items"]
    songs = []
    idreq = []
    for item in itemarr:
        songs.append(item["name"])
        idreq.append(item["id"])
    urlRequest2 = "https://api.spotify.com/v1/audio-features?ids="
    id_string = ",".join(idreq)
    r2 = requests.get(urlRequest2 + id_string, headers={
        "Authorization": "Bearer " + auth.getToken()})
    resp_dict2 = r2.json()   
    # print(resp_dict2) 
    energy = []
    danceability = []
    happiness = []
    featurearr = resp_dict2["audio_features"]
    for item in featurearr:
        energy.append(item["energy"])
        danceability.append(item["danceability"])
        happiness.append(item["valence"])
    print(energy)

    result["songs"] = songs
    result["energy"] = energy
    result["danceability"] = danceability
    result["happiness"] = happiness
    return JsonResponse(result)


class HomePageView(View):
    def dispatch(request, *args, **kwargs):
        result = {}
        auth = Oauth()
        urlRequest = "https://api.spotify.com/v1/albums/6zeHM5CV0CjcS0K8ouWE4N/tracks"
        r = requests.get(urlRequest, headers={
            "Authorization": "Bearer " + auth.getToken()})
        resp_dict = r.json()
        # return JsonResponse(resp_dict)
        

        itemarr = resp_dict["items"]
        songs = []
        idreq = []
        for item in itemarr:
            songs.append(item["name"])
            idreq.append(item["id"])
        urlRequest2 = "https://api.spotify.com/v1/audio-features?ids="
        id_string = ",".join(idreq)
        r2 = requests.get(urlRequest2 + id_string, headers={
            "Authorization": "Bearer " + auth.getToken()})
        resp_dict2 = r2.json()
        
        energy = []
        danceability = []
        featurearr = resp_dict2["audio_features"]
        for item in featurearr:
            energy.append(item["energy"])
            danceability.append(item["danceability"])
        print(energy)

        result["songs"] = songs
        result["energy"] = energy
        result["danceability"] = danceability
        return JsonResponse(result)
        #
        # song_string = ", ".join(songs)
        # response_text = textwrap.dedent('''\
        #     <html>
        #     <head>
        #         <title>ATAYAYAYYY!</title>
        #     </head>
        #     <body>
        #         <h1>AASODASDKKSADJ</h1>
        #         <p>THIS WORKS THIS WORKS!</p>
        #         ''' + song_string + '\n' + str(energyarr) + '''
        #
        #     </body>
        #     </html>
        # ''')
        # return HttpResponse(response_text)

