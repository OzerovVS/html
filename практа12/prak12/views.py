from django.shortcuts import render
from .models import User, Teacher, Item, Group, Classification, UchZaz

# Create your views here.

def index(request):
    cont = {'users': User.objects.order_by('id'), 'teachers': Teacher.objects.order_by('id'),'items': Item.objects.order_by('id'),'groups': Group.objects.order_by('id'),'classifications': Classification.objects.order_by('id'),'uchzazs': UchZaz.objects.order_by('id')}
    return render(request, 'html/index.html', cont)
