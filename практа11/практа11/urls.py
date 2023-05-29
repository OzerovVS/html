"""
URL configuration for практа11 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from prak11.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),
    path('str3', index3),
    path('str4', index4),
    path('str5', index5),
    path('accounts/', include('django.contrib.auth.urls')),
    path('home/', include('prak11.urls')),
    path('create/', create_view),
    path('<int:id>/', person_detail_view),
    path('update/<int:id>/', update_view),
    path('delete/<int:id>/', delete_view),
    path('users/', person_view)
]
