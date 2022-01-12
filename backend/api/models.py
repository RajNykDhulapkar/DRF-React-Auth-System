from django.db import models


class Product(models.Model):

    """Model for all the Product"""

    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}"
