from django.db import models
from django.contrib.auth.models import User

class AuthorsInfo(models.Model):
    name = models.CharField(max_length=20, unique=True)
    user_name = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_authors')
    description = models.TextField()
    proffession = models.CharField(max_length=20)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name