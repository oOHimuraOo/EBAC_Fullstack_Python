from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = "index.html"
    
    def get_context_data(self, **kwargs):
        from blog.models import Post
        from blog.models import AuthorsInfo
        
        context = super().get_context_data(**kwargs)
        
        posts = Post.objects.filter(status=1).order_by('-created_on')
        author_list = AuthorsInfo.objects.order_by('name')
        
        context['posts'] = posts
        context['author_list'] = author_list
        
        print(context)
        return context