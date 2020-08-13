from django.shortcuts import render, redirect
from .models import Dojo, Ninja

# Create your views here.
def index(request):
    # no_of_ninja = len(Ninja.objects.filter(school_id=dojo_id))
    context ={
        "all_dojos": Dojo.objects.all(),
        "all_ninjas": Ninja.objects.all(),
        # "no_of_ninja": len(Ninja.objects.filter(school_id=dojo_id)),

    }
    return render(request, "index.html", context)

def add_dojo(request):
    Dojo.objects.create(
        name=request.POST["dojo_name"], 
        city=request.POST["city"], 
        state=request.POST["state"])
    return redirect("/")

def add_ninja(request):
    Ninja.objects.create(
        first_name=request.POST["ninja_first_name"], 
        last_name=request.POST["ninja_last_name"], 
        school_id=request.POST["dojo_id"])
    return redirect("/")

def delete_ninja(request, ninja_id):
    Ninja.objects.get(id=ninja_id).delete()
    return redirect("/")

def delete_dojo(request, dojo_id):
    Dojo.objects.get(id=dojo_id).delete()
    return redirect("/")