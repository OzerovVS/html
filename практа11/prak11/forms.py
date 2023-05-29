from .models import *
from django.forms import ModelForm

class PersonForm(ModelForm):

    class Meta:
        model = User
        fields = ('name', 'lastname', 'role')