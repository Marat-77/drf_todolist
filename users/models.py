from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.


class CustomUser(AbstractBaseUser):
    id = models.AutoField(primary_key=True, unique=True)
    first_name = models.CharField(max_length=155)
    last_name = models.CharField(max_length=155)
    username = models.CharField(max_length=155, unique=True)
    email = models.EmailField(max_length=155, unique=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    USERNAME_FIELD = 'username'
