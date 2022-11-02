from django.db import models
from users.models import CustomUser

# Create your models here.


class Project(models.Model):
    project_name = models.CharField(max_length=100,
                                    unique=True,
                                    blank=False,
                                    verbose_name='Project Name')
    project_link = models.URLField(max_length=255,
                                   blank=True,
                                   verbose_name='Project Repository Link')
    project_users = models.ManyToManyField(CustomUser)
    created_at = models.DateTimeField(auto_now_add=True,
                                      editable=False,
                                      verbose_name='Project Created')
    updated_at = models.DateTimeField(auto_now=True,
                                      editable=False,
                                      verbose_name='Project Updated')


class Todo(models.Model):
    project = models.ForeignKey(Project,
                                on_delete=models.CASCADE,
                                verbose_name='Project')
    todo_body = models.TextField(blank=False,
                                 verbose_name='Text Todo')
    todo_user = models.ForeignKey(CustomUser,
                                  on_delete=models.CASCADE,
                                  verbose_name='User')
    created_at = models.DateTimeField(auto_now_add=True,
                                      editable=False,
                                      verbose_name='Todo Created')
    updated_at = models.DateTimeField(auto_now=True,
                                      editable=False,
                                      verbose_name='Todo Updated')
    is_active = models.BooleanField(default=False,
                                    verbose_name='Status')
