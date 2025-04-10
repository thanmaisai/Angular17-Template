import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() change: string = '';
  @Input() icon: string = '';
  @Input() isPositive: boolean = true;
  @Input() isNegative: boolean = false;
  @Input() period: string = 'yesterday';
}
