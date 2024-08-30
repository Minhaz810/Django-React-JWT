from django.urls import path
from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView
)
from .views import GetUser,RegisterUser

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/',TokenRefreshView.as_view(), name='token_refresh'),
    path('user_list/',GetUser.as_view(),name='get_user'),
    path('register/',RegisterUser.as_view(),name= 'register')
]