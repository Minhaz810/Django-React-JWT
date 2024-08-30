from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.shortcuts import render
from .serializers  import UserSerializer,RegisterSerializer
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth.models import User


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



class GetUser(APIView):
    
    def get(self,request):
        user_list = User.objects.all()
        print(user_list)
        serialized_data = UserSerializer(user_list ,many =True)

        return Response(
            {
            "data":serialized_data.data
            }
        )

class RegisterUser(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(
                {
                    'status': 'error',
                    'details': serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST
            )
        return Response(
            {"status": "success", "data": []},
            status=status.HTTP_200_OK
        )
    
    
