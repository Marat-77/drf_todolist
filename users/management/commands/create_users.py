from users.models import User
from django.core.management.base import BaseCommand
from django.utils.crypto import get_random_string


class Command(BaseCommand):
    help = 'Create random users'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int, help='Indicates the number of users to create')

    def handle(self, *args, **options):
        total = options['total']

        for i in range(total):
            username = f'test_{get_random_string()}'
            new_first_name = f'test_name_{i}'
            new_last_name = f'test_last_name_{i}'
            new_email = f'test_{username}@test.ru'
            User.objects.create_user(username=username,
                                     first_name=new_first_name,
                                     last_name=new_last_name,
                                     email=new_email)
