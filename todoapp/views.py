from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from .models import Project, Todo
from .serializers import ProjectHyperlinkedModelSerializer
from .serializers import TodoHyperlinkedModelSerializer
from .filters import ProjectFilter, TodoFilter


# Create your views here.
class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20

class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectHyperlinkedModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoHyperlinkedModelSerializer
    pagination_class = ToDoLimitOffsetPagination
    filterset_class = TodoFilter
    # filterset_class = TodoProjectFilter
    # filterset_class = [TodoFilter, TodoProjectFilter]
    # TodoProjectFilter
