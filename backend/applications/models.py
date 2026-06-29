from django.db import models
from django.db import models
from jobs.models import Job

class Application(models.Model):

    STATUS = [
        ('Applied', 'Applied'),
        ('Under Review', 'Under Review'),
        ('Selected', 'Selected'),
        ('Rejected', 'Rejected'),
    ]

    applicant_name = models.CharField(max_length=100)
    applicant_email = models.EmailField()
    resume = models.TextField()
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS, default='Applied')

    def __str__(self):
        return self.applicant_name
