import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Define the AutomationItem type
interface AutomationItem {
  title: string;
  time: string;
}
@Component({
  selector: 'app-failed-automation',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './failed-automation.component.html',
  styleUrl: './failed-automation.component.scss'
})
export class FailedAutomationComponent implements OnInit {
  automationItems: AutomationItem[] = [
    { title: 'Outing Schedule For Every Departement', time: '5 Minutes Ago' },
    { title: 'Meeting HR Department', time: 'Yesterday, 12:30 PM' },
    { title: 'IT Department Need Two More Talents For UX/UI Designer Position', time: 'Yesterday, 09:15 AM' },
    { title: 'IT Department Need Two More Talents For UX/UI Designer Position', time: 'Yesterday, 09:15 AM' },
    { title: 'IT Department Need Two More Talents For UX/UI Designer Position', time: 'Yesterday, 09:15 AM' },
    { title: 'Client Meeting for Q4 Budget Discussion', time: '2 Hours Ago' },
    { title: 'Project X Development Update', time: 'Today, 10:00 AM' },
    { title: 'HR Onboarding for New Interns', time: 'Today, 09:30 AM' },
    { title: 'IT Infrastructure Maintenance Scheduled', time: 'Yesterday, 03:00 PM' },
    { title: 'Marketing Campaign Strategy Planning', time: 'Yesterday, 11:00 AM' }
];

  
   constructor() {}
  
    ngOnInit(): void {}
  }
