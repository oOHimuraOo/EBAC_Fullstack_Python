from django.views import generic

class PostView(generic.DetailView):
    template_name = 'post_detail.html'
    
    def get_object(self, queryset = None):
        from blog.models import Post
        
        
        slug = self.kwargs.get('slug')
        
        context = Post.objects.get(slug = slug)
        
        return context
    
    def get_context_data(self, **kwargs):
        from blog.models import AuthorsInfo
        
        context = super().get_context_data(**kwargs)
        authors = AuthorsInfo.objects.order_by('name')
        
        context['author_list'] = authors
        
        return context