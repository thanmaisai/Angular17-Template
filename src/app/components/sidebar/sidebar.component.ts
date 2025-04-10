import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navItems = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard', active: true },
    { icon: 'users', label: 'Users', route: '/users', active: false, badge: 6 },
    { icon: 'transactions', label: 'Transactions', route: '/transactions', active: false },
    { icon: 'analytics', label: 'Analytics', route: '/analytics', active: false }
  ];

  settingsItems = [
    { icon: 'profile', label: 'Profile', route: '/settings/profile', description: 'Update your details' },
    { icon: 'security', label: 'Security', route: '/settings/security', description: 'Manage your password' },
    { icon: 'communication', label: 'Communication', route: '/settings/communication', description: 'Email and phone' },
    { icon: 'permissions', label: 'Permissions', route: '/settings/permissions', description: 'Access control' },
    { icon: 'help', label: 'Help', route: '/help', description: 'Get support' },
    { icon: 'logout', label: 'Logout', route: '/logout', description: 'Exit the app' }
  ];
}
