import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [FormsModule],
})
export class NewTicketComponent {
  onSubmit(title: string, ticketText: String) {
    console.log(title);
    console.log(ticketText);
  }
}