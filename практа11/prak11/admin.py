from django.contrib import admin
from .models import User, Item, Group, Classification, UchZaz, Role

# Register your models here.
class UserLook(admin.ModelAdmin):
    list_display=('id', 'name', 'lastname', 'role')
class ItemLook(admin.ModelAdmin):
    list_display=('id', 'title', 'teacher')
class GroupLook(admin.ModelAdmin):
    list_display=('id', 'title', 'item', 'user')
class ClassificationLook(admin.ModelAdmin):
    list_display=('id', 'title', 'group')
class UchzazLook(admin.ModelAdmin):
    list_display=('id', 'title', 'classification')
class RoleLook(admin.ModelAdmin):
    list_display=('id', 'title')

admin.site.register(User,UserLook)
admin.site.register(Item, ItemLook )
admin.site.register(Group, GroupLook)
admin.site.register(Classification, ClassificationLook)
admin.site.register(UchZaz, UchzazLook)
admin.site.register(Role, RoleLook)
