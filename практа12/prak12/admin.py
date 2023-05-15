from django.contrib import admin
from .models import User, Teacher, Item, Group, Classification, UchZaz

# Register your models here.
class UserLook(admin.ModelAdmin):
    list_display=('id', 'name', 'lastname')
class TeacherLook(admin.ModelAdmin):
    list_display=('id', 'name', 'age')
class ItemLook(admin.ModelAdmin):
    list_display=('id', 'title', 'teacher')
class GroupLook(admin.ModelAdmin):
    list_display=('id', 'title', 'item', 'user')
class ClassificationLook(admin.ModelAdmin):
    list_display=('id', 'title', 'group')
class UchzazLook(admin.ModelAdmin):
    list_display=('id', 'title', 'classification')

admin.site.register(User, UserLook)
admin.site.register(Teacher, TeacherLook)
admin.site.register(Item, ItemLook)
admin.site.register(Group, GroupLook)
admin.site.register(Classification, ClassificationLook)
admin.site.register(UchZaz, UchzazLook)
