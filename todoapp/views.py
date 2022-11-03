from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.mixins import CreateModelMixin, ListModelMixin, \
    RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.response import Response
from rest_framework import status
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
    # pagination_class = ProjectLimitOffsetPagination
    # filterset_class = ProjectFilter

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TodoModelViewSet(CreateModelMixin,
                       ListModelMixin,
                       RetrieveModelMixin,
                       UpdateModelMixin,
                       DestroyModelMixin,
                       GenericViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoHyperlinkedModelSerializer
    # pagination_class = ToDoLimitOffsetPagination
    filterset_class = TodoFilter
    # filterset_class = TodoProjectFilter
    # filterset_class = [TodoFilter, TodoProjectFilter]
    # TodoProjectFilter

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
