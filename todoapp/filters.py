from django_filters import rest_framework as filters
from .models import Project, Todo


class ProjectFilter(filters.FilterSet):
    project_name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['project_name']


class TodoFilter(filters.FilterSet):
    # project = filters.CharFilter(lookup_expr='contains')
    # project = filters.ModelChoiceFilter(queryset=Todo.objects.all())
    created_at = filters.DateTimeFromToRangeFilter()

    class Meta:
        model = Todo
        # fields = ['project', 'created_at']
        fields = ['created_at']

# class TodoProjectFilter(filters.FilterSet):
#     project = filters.CharFilter(lookup_expr='contains')
#     # project = filters.ModelChoiceFilter(queryset=Todo.objects.all())
#     # created_at = filters.DateTimeFromToRangeFilter()
#
#     class Meta:
#         model = Todo
#         fields = ['project']
