import { Creature } from "./Creature";
import { Effect } from "./Effect";
import { Card } from "./types/cardType";

/**
 * Represents the state of the game at any given time. This includes the players,
 * the cards on the board, and any active effects.
 */
export class GameState {
  players: Player[];
  activeEffects: Effect[];
  creaturesOnBoard: Creature[];
  currentPlayerIndex: number;

  constructor(players: Player[]) {
    this.players = players;
    this.activeEffects = [];
    this.creaturesOnBoard = [];
    this.currentPlayerIndex = 0; // Assuming the game starts with the first player
  }
  
  /**
   * Adds an effect to the list of active effects.
   * @param effect The effect to add.
   */
  addEffect(effect: Effect): void {
    this.activeEffects.push(effect);
  }

  /**
   * Removes an effect from the list of active effects.
   * @param effect The effect to remove.
   */
  removeEffect(effect: Effect): void {
    this.activeEffects = this.activeEffects.filter(e => e !== effect);
  }

  /**
   * Adds a creature to the board.
   * @param creature The creature to add.
   */
  addCreature(creature: Creature): void {
    this.creaturesOnBoard.push(creature);
  }

  /**
   * Removes a creature from the board.
   * @param creature The creature to remove.
   */
  removeCreature(creature: Creature): void {
    this.creaturesOnBoard = this.creaturesOnBoard.filter(c => c !== creature);
  }

  /**
   * Advances the turn to the next player.
   */
  nextTurn(): void {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
  }

  /**
   * Gets the current player whose turn it is to play.
   * @returns The current player.
   */
  getCurrentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }
}

/**
 * Represents a player in the game.
 */
class Player {
  health: number;
  resources: number;
  hand: Card[];

  constructor(health: number, resources: number, hand: Card[]) {
    this.health = health;
    this.resources = resources;
    this.hand = hand;
  }

  /**
   * Adds a card to the player's hand.
   * @param card The card to add.
   */
  addCardToHand(card: Card): void {
    this.hand.push(card);
  }

  /**
   * Removes a card from the player's hand.
   * @param card The card to remove.
   */
  removeCardFromHand(card: Card): void {
    this.hand = this.hand.filter(c => c !== card);
  }

  /**
   * Adjusts the player's health by a specified amount.
   * @param amount The amount to adjust the health by.
   */
  adjustHealth(amount: number): void {
    this.health += amount;
  }

  /**
   * Adjusts the player's resources by a specified amount.
   * @param amount The amount to adjust the resources by.
   */
  adjustResources(amount: number): void {
    this.resources += amount;
  }
}
