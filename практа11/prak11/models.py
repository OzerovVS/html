from django.db import models

# Create your models here.

class Role(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=200)
class User(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    role = models.ForeignKey(Role, max_length=200, on_delete=models.CASCADE)
class Item(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=200)
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)
class Group(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=200)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
class Classification(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=200)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
class UchZaz(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=200)
    classification = models.ForeignKey(Classification, on_delete=models.CASCADE)