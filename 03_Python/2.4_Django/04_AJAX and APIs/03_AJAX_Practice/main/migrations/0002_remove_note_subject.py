# Generated by Django 2.2.4 on 2020-08-17 05:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='note',
            name='subject',
        ),
    ]
