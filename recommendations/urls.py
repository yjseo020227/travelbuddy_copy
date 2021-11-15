# pages/urls.py
from django.urls import path, re_path
from .views import homePageView
from.views import get_data

urlpatterns = [
    path('', homePageView, name='home'),
    re_path(r'^api/data/$', get_data, name = 'get_data'),
]