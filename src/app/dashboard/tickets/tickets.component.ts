import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  imports: [NewTicketComponent, TicketComponent]
})
export class TicketsComponent {
  @Input() tickets: Ticket[] = [];
  @Output() completeTicket: EventEmitter<string> = new EventEmitter();

  onCloseTicket(id: string) {
    this.completeTicket.emit(id)
  }
}