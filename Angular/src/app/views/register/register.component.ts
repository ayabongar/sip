import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserManager } from '../../api.services/user.manager';
import { EmailService } from '../../api.services/email.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userManager: UserManager,
    private emailService: EmailService
  ) {
    this.registerForm = this.fb.group({
      sid: ['', Validators.required],
      userID: ['', Validators.required],
      userCode: ['', Validators.required],
      userFullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      roleId: ['', Validators.required]
    });
  }

  fetchUserDetails() {
    const sid = this.registerForm.get('sid')?.value;
    this.userManager.GetAdUserBySID(sid).subscribe(
      (response: any) => {
        if (response && response.length > 0) {
          const user = response[0];
          this.registerForm.patchValue({
            userFullName: user.FullName,
            roleId: user.RoleId
          });
        } else {
          alert('Employee not found!');
        }
      },
      error => {
        console.error('Error fetching user details:', error);
        alert('Error fetching user details');
      }
    );
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formValue = {
        ...this.registerForm.value,
        isActive: false,
        roleId: 5 // Set the role to "Access denied"
      };

      this.userManager.Save(formValue).subscribe(
        response => {
          // Send email to the user
          this.sendEmailToUser(formValue.email);

          // Send email to supervisors
          this.sendEmailToSupervisors();

          alert('Registration successful! Please wait for the super user to activate your account.');
        },
        error => {
          console.error('Registration failed:', error);
          alert('Registration failed! Please try again.');
        }
      );
    }
  }

  sendEmailToUser(userEmail: string) {
    const subject = 'Registration successful';
    const body = 'Registration successful! Please wait for the super user to activate your account.';
    this.emailService.sendEmail(userEmail, subject, body).subscribe(
      response => {
        console.log('Email sent to user:', response);
      },
      error => {
        console.error('Error sending email to user:', error);
      }
    );
  }

  sendEmailToSupervisors() {
    const subject = 'New User Registration';
    const body = 'A new user has registered and is awaiting approval.';

    this.userManager.GetUserByRoleID(2).subscribe(
      (supervisors: any) => {
        if (supervisors && supervisors.length > 0) {
          supervisors.forEach((supervisor: any) => {
            this.emailService.sendEmail(supervisor.email, subject, body).subscribe(
              response => {
                console.log('Email sent to supervisor:', response);
              },
              error => {
                console.error('Error sending email to supervisor:', error);
              }
            );
          });
        }
      },
      error => {
        console.error('Error fetching supervisors:', error);
      }
    );
  }
}

