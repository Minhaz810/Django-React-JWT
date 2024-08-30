from django.db import models

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length = 255, null= True, blank= True)
    country = models.CharField(max_length=255, null= True, blank= True)

    def __str__(self):
        return self.name

class Book(models.Model):
    name = models.CharField(max_length = 255,null= True, blank= True)
    author = models.ForeignKey(Author,null= True, blank= True, related_name='author',on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=5,decimal_places=2,default=0.0)

    def __str__(self):
        return self.name