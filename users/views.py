from rest_framework.viewsets import ModelViewSet
# from rest_framework.viewsets import GenericViewSet, ModelViewSet
# from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, \
#     UpdateModelMixin, DestroyModelMixin, CreateModelMixin
from .models import CustomUser
from .serializers import (CustomUserModelSerializer,
                          CustomUserModelSerializerNew)

# Create your views here.


class CustomUserModelViewSet(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserModelSerializer

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return CustomUserModelSerializer
        return CustomUserModelSerializerNew


# class UserModelViewSet(ListModelMixin,
#                        RetrieveModelMixin,
#                        UpdateModelMixin,
#                        # DestroyModelMixin,
#                        CreateModelMixin,
#                        GenericViewSet):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserModelSerializer


# ListModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
# GenericViewSet

# ListModelMixin,CreateAPIView, DestroyModelMixin,RetrieveAPIView,
# UpdateAPIView,GenericViewSet
