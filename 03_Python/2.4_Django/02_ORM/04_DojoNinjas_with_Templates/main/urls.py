from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('add-dojo', views.add_dojo),
    path('add-ninja', views.add_ninja),
    path('dojo/<int:dojo_id>/delete', views.delete_dojo),
    path('ninja/<int:ninja_id>/delete', views.delete_dojo),
    # path('<int:ninja_id>', views.index),
]