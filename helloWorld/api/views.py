from api.models import Note
from rest_framework import viewsets
from api.serializers import NoteSerializer
import textwrap

from django.http import JsonResponse
from django.views.generic.base import View
import requests
import json

# Create your views here.
class NoteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows notes to be viewed or edited
    """
    queryset = Note.objects.all().order_by('-created_at')
    serializer_class = NoteSerializer

class HomePageView(View):
    def dispatch(request, *args, **kwargs):
        urlRequest = "https://api.spotify.com/v1/albums/04rz93AqGy9JduzV3K81Dh/tracks"
        r = requests.get(urlRequest, headers={
            "Authorization": "Bearer BQB2s1sWABJubX3eNdfPlAxupI2UnVY20RZ1yloBHygEMyE2HoB8KzJ3LS3eb_Efh5w3eqigBe7SyL1UCeKyl39n5KVxfSUEkZrKDslBcOcsxv8j8HjL8Cbm_vLvOpeMGtL9Rie8klI0ccukyPRZdGruhXyFX1-4vZkFww"})
        resp_dict = r.json()
        return JsonResponse(resp_dict)

        # itemarr = resp_dict["items"]
        # songs = []
        # idreq = []
        # for item in itemarr:
        #     songs.append(item["name"])
        #     idreq.append(item["id"])
        # urlRequest2 = "https://api.spotify.com/v1/audio-features?ids="
        # id_string = ",".join(idreq)
        # r2 = requests.get(urlRequest2 + id_string, headers={
        #     "Authorization": "Bearer BQB2s1sWABJubX3eNdfPlAxupI2UnVY20RZ1yloBHygEMyE2HoB8KzJ3LS3eb_Efh5w3eqigBe7SyL1UCeKyl39n5KVxfSUEkZrKDslBcOcsxv8j8HjL8Cbm_vLvOpeMGtL9Rie8klI0ccukyPRZdGruhXyFX1-4vZkFww"})
        # resp_dict2 = r2.json()
        #
        # energyarr = []
        # featurearr = resp_dict2["audio_features"]
        # for item in featurearr:
        #     energyarr.append(item["energy"])
        # print(energyarr)
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

