from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser

# Create your models here.

# class User(AbstractBaseUser):
#     id = models.AutoField(primary_key=True, unique=True)
#     username = models.CharField(max_length=100, unique=True, blank=False)
#     first_name = models.CharField(max_length=155)
#     last_name = models.CharField(max_length=155)
#     email = models.EmailField(max_length=100, unique=True)
#     USERNAME_FIELD = 'username'


class User(AbstractUser):
    # username = models.CharField(max_length=100, unique=True, blank=False)
    # first_name = models.CharField(max_length=155)
    # last_name = models.CharField(max_length=155)
    email = models.EmailField(max_length=150, unique=True, blank=False)


# from django.contrib.auth.models import AbstractUser
# from django.db import models
# from django.utils.translation import gettext_lazy as _
#
#
# class CustomUser(AbstractUser):
#     email = models.EmailField(
#         _('email address'),
#         unique=True,
#     )
#
#     class Meta:
#         verbose_name = _('user')
#         verbose_name_plural = _('users')
#
#     def __str__(self):
#         return f"{self.pk} {self.username}"