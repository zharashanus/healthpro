
from django.contrib import admin
from django.urls import path, re_path, include
from lendpage import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.main_page, name='main_page'),
]
