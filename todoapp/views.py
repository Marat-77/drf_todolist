from rest_framework.viewsets import ModelViewSet
from .models import Project, Todo
from .serializers import ProjectHyperlinkedModelSerializer
from .serializers import TodoHyperlinkedModelSerializer


# Create your views here.
class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectHyperlinkedModelSerializer


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoHyperlinkedModelSerializer
