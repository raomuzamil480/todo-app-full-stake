from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer, RegisterSerializer


class TodoViewSet(viewsets.ModelViewSet):
    """
    Logged-in user ke apne todos hi dikhayega aur manage karne dega.
    """
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Todo.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RegisterView(generics.CreateAPIView):
    """
    Naya user signup karne ke liye. Koi authentication zaroori nahi.
    """
    queryset = None
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        from django.contrib.auth.models import User
        return User.objects.all()
