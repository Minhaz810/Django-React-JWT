from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import serializers
from django.contrib.auth.models import User,Group,Permission
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'

class GroupSerializer(serializers.ModelSerializer):
    permissions = PermissionSerializer(many = True)
    class Meta:
        model = Group
        fields = ['id', 'name','permissions']


class UserSerializer(serializers.ModelSerializer):
    groups = GroupSerializer(many = True)
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name","username","groups"]


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(required = True, validators = [UniqueValidator(User.objects.all())])
    email = serializers.EmailField(required = True, validators = [UniqueValidator(User.objects.all())])
    password = serializers.CharField(required = True, write_only =True, validators = [validate_password])
    password2 = serializers.CharField(required = True, write_only =True, validators = [validate_password])
    first_name = serializers.CharField(required = True, allow_null = True, allow_blank =True)
    last_name = serializers.CharField(required = True, allow_null = True, allow_blank =True)

    # class Meta:
    #     model = User
    #     fields = '__all__'

    def validate(self, attrs):
        if attrs['password']!=attrs['password2']:
            raise ValidationError("passwords did not match")
        return attrs
    
    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create(
            username = validated_data['username'],
            email = validated_data['email'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
        )

        user.set_password(validated_data['password'])
        user.save()

        group = Group.objects.get(name = "Customer")
        user.groups.add(group)

        return user
    

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token