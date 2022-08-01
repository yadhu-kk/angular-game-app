import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  typedMessage: string = '';
  messages: any;
  message: any = [];
  isHumanTurn: boolean = true;
  isHumanWinner: boolean = false;
  isComputerWinner: boolean = false;
  tracker: string[] = new Array(9).fill(null);

  tiles: Tile[] = [
    { text: '', cols: 1, rows: 1, color: 'grey' },
    { text: '', cols: 1, rows: 1, color: 'skyblue' },
    { text: '', cols: 1, rows: 1, color: 'lightgreen' },
    { text: '', cols: 1, rows: 1, color: 'lightgreen' },
    { text: '', cols: 1, rows: 1, color: 'skyblue' },
    { text: '', cols: 1, rows: 1, color: 'grey' },
    { text: '', cols: 1, rows: 1, color: 'grey' },
    { text: '', cols: 1, rows: 1, color: 'skyblue' },
    { text: '', cols: 1, rows: 1, color: 'lightgreen' },
  ];

  constructor(private MessageServiceService: MessageServiceService) {}
  postMessage() {
    if (this.typedMessage) {
      this.MessageServiceService.postMessage({
        msg: this.typedMessage,
        userName: 'nobody',
      });
      this.typedMessage = '';
    }
  }
  ngOnInit(): void {}

  setMove(index: number): void {
    if (
      this.tracker[index] == null &&
      !this.isHumanWinner &&
      !this.isComputerWinner
    ) {
      this.tracker[index] = 'X';
      this.tiles[index].text = 'X';
      this.isHumanWinner = this.checkWinner();
      this.isHumanTurn = false;
      if (!this.isHumanWinner) {
        this.findMove();
        this.isComputerWinner = this.checkWinner();
        if (this.isComputerWinner) {
          this.isHumanTurn = false;
        }
      }
    }
  }
  checkWinner(): boolean {
    if (
      (this.tracker[0] == this.tracker[1] &&
        this.tracker[0] == this.tracker[2] &&
        this.tracker[0] != null) ||
      (this.tracker[3] == this.tracker[4] &&
        this.tracker[3] == this.tracker[5] &&
        this.tracker[3] != null) ||
      (this.tracker[6] == this.tracker[7] &&
        this.tracker[6] == this.tracker[8] &&
        this.tracker[6] != null) ||
      (this.tracker[0] == this.tracker[3] &&
        this.tracker[0] == this.tracker[6] &&
        this.tracker[0] != null) ||
      (this.tracker[1] == this.tracker[4] &&
        this.tracker[1] == this.tracker[7] &&
        this.tracker[1] != null) ||
      (this.tracker[2] == this.tracker[5] &&
        this.tracker[2] == this.tracker[8] &&
        this.tracker[2] != null) ||
      (this.tracker[0] == this.tracker[4] &&
        this.tracker[0] == this.tracker[8] &&
        this.tracker[0] != null) ||
      (this.tracker[2] == this.tracker[4] &&
        this.tracker[2] == this.tracker[6] &&
        this.tracker[2] != null)
    ) {
      return true;
    }
    return false;
  }

  findMove() {
    let isMoved = false;
    while (!isMoved) {
      let possibleMoveIndex = Math.floor(Math.random() * 9);
      if (this.tracker[possibleMoveIndex] == null) {
        this.tracker[possibleMoveIndex] = 'O';
        this.tiles[possibleMoveIndex].text = 'O';
        this.isHumanTurn = true;
        isMoved = true;
      }
    }
  }
}
