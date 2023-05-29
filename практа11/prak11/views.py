from django.shortcuts import render
from django.urls import reverse_lazy
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView
from django.shortcuts import render,redirect,get_object_or_404
from .models import *
from .forms import *
from django.http import Http404


# Create your views here.

def index(request):
    return render(request, "prak11/index.html")
def home(request):
    return render(request, "users/home.html")
def index3(request):
    return render(request, "prak11/prak10_2.html")
def index4(request):
    return render(request, "prak11/prak10_3.html")
def index5(request):
    return render(request, "prak11/prak10_4.html")
    
class SignUp(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'


# Create your views here.

def create_view(request):

    if request.method == 'POST':
        form = PersonForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form =PersonForm()
        context = {
            'form': form
        }
        return render(request, 'prak11/create.html', context)
    

def person_view(request):
    dataset = User.objects.all()
    return render(request, 'prak11/listview.html', {'dataset': dataset})
 
def person_detail_view(request, id):
    try:
        data = User.objects.get(id=id)
    except PersonForm.DoesNotExist:
        raise Http404('Такого не существует')
 
    return render(request, 'prak11/detailview.html', {'data': data})

def update_view(request, id):
    try:
        old_data = get_object_or_404(User, id=id)
    except Exception:
        raise Http404('Такого не существует')
    
    if request.method =='POST':
        form = PersonForm(request.POST, instance=old_data)
        if form.is_valid():
            form.save()
            return redirect(f'/{id}')
    else:
        form = PersonForm(instance = old_data)
        context ={
            'form':form
        }
        return render(request, 'prak11/update.html', context)
    

def delete_view(request, id):
    try:
        data = get_object_or_404(User, id=id)
    except Exception:
        raise Http404('Такого не существует')
 
    if request.method == 'POST':
        data.delete()
        return redirect('/')
    else:
        return render(request, 'prak11/delete.html')