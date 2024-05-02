from django.shortcuts import render


# Create your views here.
def main_page(request):
    # Передаем информацию о пользователе в контекст шаблона
    context = {'user': request.user}
    return render(request, 'main_page.html', context)
