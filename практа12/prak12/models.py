from django.db import models

# Create your models here.
class User(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
class 
