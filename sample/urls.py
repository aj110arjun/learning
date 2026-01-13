from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
<<<<<<< Updated upstream
=======
    path('images/<int:product_id>', views.product_view, name="product_view"),
    path('counter/', views.counter, name="counter"),
>>>>>>> Stashed changes
]