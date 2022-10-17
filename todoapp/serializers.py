from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Project, Todo


class ProjectHyperlinkedModelSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class TodoHyperlinkedModelSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Todo
        fields = '__all__'
