import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hall-layout',
  templateUrl: './hall-layout.component.html',
  styleUrls: ['../../../styles/hall-layout.scss'],
})
export class HallLayoutComponent implements OnInit, OnDestroy {
  public items = [
    {
      id: 1,
      tableNumber: 1,
      personNumber: 3,
      maxPersonNumber: 4,
      checkinTime: '18:00',
      deadline: '23:00',
      phoneNumber: '89508566644',
      booker: 'Mr.Vlad',
      comment: '',
      isCommentOpen: false,
      status: 'free',
    },
    {
      id: 2,
      tableNumber: 2,
      personNumber: 3,
      maxPersonNumber: 4,
      checkinTime: '18:00',
      deadline: '23:00',
      phoneNumber: '89508566644',
      booker: 'Mr.Vlad',
      comment: '',
      isCommentOpen: false,
      status: 'booked',
    },
    {
      id: 3,
      tableNumber: 3,
      personNumber: 3,
      maxPersonNumber: 4,
      checkinTime: '18:00',
      deadline: '23:00',
      phoneNumber: '89508566644',
      booker: 'Mr.Vlad',
      comment: '',
      isCommentOpen: false,
      status: 'booked',
    },
    {
      id: 4,
      tableNumber: 4,
      personNumber: 3,
      maxPersonNumber: 4,
      checkinTime: '18:00',
      deadline: '23:00',
      phoneNumber: '89508566644',
      booker: 'Mr.Vlad',
      comment: '',
      isCommentOpen: false,
      status: 'taken',
    },
    {
      id: 5,
      tableNumber: 5,
      personNumber: 3,
      maxPersonNumber: 4,
      checkinTime: '18:00',
      deadline: '23:00',
      phoneNumber: '89508566644',
      booker: 'Mr.Vlad',
      comment: '',
      isCommentOpen: false,
      status: 'taken',
    },
  ]

  constructor() { }

  ngOnInit() {
    document.getElementById('hall-container').addEventListener('click', $event => this.closeDropdowns($event));
  }

  closeDropdowns($event) {
    const commentArea = document.getElementById('comment-area')
    console.log($event.target === commentArea)
    if (!$event.defaultPrevented && $event.target !== commentArea) {
      this.items.forEach(item => item.isCommentOpen = false);
    }
  }

  showComment($event, id: number): void {
    const currentTable = this.items.find(table => table.id === id);
    const allOtherTables = this.items.filter(table => table.id !== id);

    currentTable.isCommentOpen = !currentTable.isCommentOpen;
    allOtherTables.forEach(table => table.isCommentOpen = false);
    $event.preventDefault();
  }

  ngOnDestroy() {
    document.getElementById('hall-container').removeEventListener('click', this.closeDropdowns);
  }

}
