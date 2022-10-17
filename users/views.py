# from rest_framework.viewsets import ModelViewSet
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, \
    UpdateModelMixin, DestroyModelMixin
from .models import User
from .serializers import UserModelSerializer

# Create your views here.


# class UserModelViewSet(ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserModelSerializer

class UserModelViewSet(ListModelMixin,
                       RetrieveModelMixin,
                       UpdateModelMixin,
                       # DestroyModelMixin,
                       GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


# ListModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
# GenericViewSet

# ListModelMixin,CreateAPIView, DestroyModelMixin,RetrieveAPIView,UpdateAPIView,GenericViewSet
