from django.shortcuts import render
from django.urls import reverse_lazy
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView


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