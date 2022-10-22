from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser

# Create your models here.


class User(AbstractUser):
    # username = models.CharField(max_length=100, unique=True, blank=False)
    # first_name = models.CharField(max_length=155)
    # last_name = models.CharField(max_length=155)
    email = models.EmailField(max_length=150, unique=True, blank=False)
