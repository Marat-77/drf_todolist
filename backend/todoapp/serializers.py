from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import Project, Todo


# ModelSerializer
# class ProjectHyperlinkedModelSerializer(HyperlinkedModelSerializer):
class ProjectHyperlinkedModelSerializer(ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class TodoHyperlinkedModelSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Todo
        fields = '__all__'
