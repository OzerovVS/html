from django.db import models

# Create your models here.

class User(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
class Teacher(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=200)
    age = models.CharField(max_length=200)
class Item(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    title = models.CharField(max_length=200)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
class Group(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    title = models.CharField(max_length=200)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
class Classification(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    title = models.CharField(max_length=200)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
class UchZaz(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    title = models.CharField(max_length=200)
    classification = models.ForeignKey(Classification, on_delete=models.CASCADE)
