from django.contrib import admin
from .models import User, Teacher, Item, Group, Classification, UchZaz

# Register your models here.
class UserLook(admin.ModelAdmin):
    list_display=('Id', 'Name', 'Lastname')
class TeacherLook(admin.ModelAdmin):
    list_display=('id', 'Name', 'Age')
class ItemLook(admin.ModelAdmin):
    list_display=('id', 'Title', 'Teacher')
class GroupLook(admin.ModelAdmin):
    list_display=('id', 'Title', 'Item', 'User')
class ClassificationLook(admin.ModelAdmin):
    list_display=('id', 'Title', 'Group')
class UchzazLook(admin.ModelAdmin):
    list_display=('ID', 'Title', 'Classification')

admin.site.register(User, UserLook)
admin.site.register(Teacher)
admin.site.register(Item)
admin.site.register(Group)
admin.site.register(Classification)
admin.site.register(UchZaz)
