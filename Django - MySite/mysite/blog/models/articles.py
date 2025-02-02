from django.db import models
from django.contrib.auth.models import User

STATUS = {
    (0, 'Draft'),
    (1, 'Publish')
}

class Article(models.Model):
    headline = models.TextField(blank=False, max_length=150, unique=True)
    subhead = models.TextField(blank=False, max_length=450)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_articles')
    slug = models.SlugField(max_length=200, unique=True)
    content = models.TextField(blank=False)
    updated_on = models.DateTimeField(auto_now=True)

    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.headline