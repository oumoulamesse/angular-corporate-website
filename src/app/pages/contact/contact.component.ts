import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      reason: ['', Validators.required]
    });
  }
onSubmit(): void {
  if (this.contactForm.invalid) return;

  const formData = new URLSearchParams();
  formData.append('name', this.contactForm.value.name);
  formData.append('email', this.contactForm.value.email);
  formData.append('subject', this.contactForm.value.subject || 'Nouveau message');
  formData.append('message', this.contactForm.value.reason);

  fetch('https://formspree.io/f/mvgrprja', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData.toString()
  })
  .then(res => {
    if (res.ok) {
      alert('Message envoyé avec succès ✅');
      this.contactForm.reset();
    } else {
      alert('Erreur Formspree ❌');
    }
  })
  .catch(() => {
    alert('Problème réseau ❌');
  });
}}
