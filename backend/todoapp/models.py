from django.db import models
from users.models import CustomUser
NULLABLE = {'null': True, 'blank': True}

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=100, verbose_name="Title")
    link = models.URLField(**NULLABLE, verbose_name="Repo Link")
    users = models.ManyToManyField(CustomUser, verbose_name="Users")
    created = models.DateTimeField(auto_now_add=True, editable=False, blank=True, verbose_name="Created")
    updated = models.DateTimeField(auto_now=True, editable=False, blank=True, verbose_name="Edited")

    def __str__(self):
        return self.title


class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name="Project")
    text = models.CharField(max_length=300, verbose_name="Todo Text")
    created = models.DateTimeField(auto_now_add=True, editable=False, verbose_name="Created")
    updated = models.DateTimeField(auto_now=True, editable=False, verbose_name="Edited")
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name="User")

    is_active = models.BooleanField(default=True, verbose_name="Todo Status")

    def __str__(self):
        return f"{self.text}, {self.user}"
