from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from api.views import api_overview

urlpatterns = [
    path('', view=api_overview, name='api-overview')
]
