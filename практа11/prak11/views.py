from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "prak11/index.html", {'user':User.objects})
def index2(request):
    return render(request, "prak11/prak10_1.html")
def index3(request):
    return render(request, "prak11/prak10_2.html")
def index4(request):
    return render(request, "prak11/prak10_3.html")
def index5(request):
    return render(request, "prak11/prak10_4.html")
    
    