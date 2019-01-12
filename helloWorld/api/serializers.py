from api.models import Note
from rest_framework import serializers

class NoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Note
        fields = ('title', 'body', 'created_at')