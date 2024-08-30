from django.shortcuts import render
from .serializers  import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User


class GetUser(APIView):
    
    def get(self,request):
        user_list = User.objects.all()
        serialized_data = UserSerializer(user_list)

        return Response(
            {
            "data":serialized_data.data
            }
        )

    
    
