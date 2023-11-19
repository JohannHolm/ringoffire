import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.sass',
})
export class GameComponent implements OnInit {
  pickCardAnimation: boolean = false;
  currentCard: string;
  game!: Game;

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      console.log('New Card', this.currentCard);
      console.log('Game', this.game);
    }
    setTimeout(() => {
      this.game.playerCards.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
  }
}
