from django.urls import path

from blog.views import HomeView
from blog.views import PostView

urlpatterns = [
    path('post/<slug:slug>/', PostView.as_view(), name='post_detail'),
    path('', HomeView.as_view(), name='home'),
]