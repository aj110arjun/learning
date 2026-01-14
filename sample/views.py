from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def product_view(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    primary_image = product.images.filter(is_primary=True)
    images = product.images.filter(is_primary=False)
    
    context = {
        'product':product,
        'primary_image': primary_image,
        'images': images,
    }

    return render(request, 'product_image.html', context)


def counter(request):
    return render(request, 'counter.html')

