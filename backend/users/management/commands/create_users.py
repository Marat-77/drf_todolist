from django.core.management.base import BaseCommand
from users.models import CustomUser


class Command(BaseCommand):
    def handle(self, *args, **options):
        superuser = CustomUser.objects.create_superuser(
            username='admin',
            email='admin@test.ru',
            password='paraNoiya245'
        )
        test_user = CustomUser.objects.create_user(
            username='user1',
            email='user1@test.ru',
            password='paraNoiya24'
        )
