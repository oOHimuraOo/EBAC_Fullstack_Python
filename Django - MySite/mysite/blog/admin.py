from django.contrib import admin

# Register your models here.
from .models import Post, Article, AuthorsInfo

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'status', 'created_on')
    list_filter = ('status',)
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}
    
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('headline', 'author', 'created_on',)
    list_filter = ('status',)
    search_fields = ['headline', 'subhead', 'author', 'content']
    prepopulated_fields = {'slug': ('headline',)}

class AuthorInfoAdmin(admin.ModelAdmin):
    list_display = ('name', 'user_name', 'proffession')
    list_filter = ('proffession',)
    search_fields = ('name', 'user_name', 'proffession')


admin.site.register(Post, PostAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(AuthorsInfo, AuthorInfoAdmin)