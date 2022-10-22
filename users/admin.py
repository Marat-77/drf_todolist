from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('email',)}),
    )
    list_display = ('id', 'username', 'custom_group', 'email',)
    list_display_links = ('username',)
    ordering = ['id']

    def custom_group(self, obj):
        return ','.join(
            [group.name for group in obj.groups.all()]
        ) if obj.groups.count() else ''



# admin.site.register(User)


# from django.contrib import admin
# from users.models import CustomUser
# from django.contrib.auth.admin import UserAdmin
#
#
# @admin.register(CustomUser)
# class CustomUserAdmin(UserAdmin):
#     add_fieldsets = UserAdmin.add_fieldsets + (
#         (None, {'fields': ('email',)}),
#     )
#     list_display = ('id', 'username', 'custom_group', 'email',)
#     list_display_links = ('username',)
#     ordering = ['id']
#
#     def custom_group(self, obj):
#         return ','.join([g.name for g in obj.groups.all()]) if obj.groups.count() else ''