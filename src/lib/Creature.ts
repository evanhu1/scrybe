import { Effect } from "./Effect";
import { GameState } from "./GameState";

/**
 * Base class for creatures in the game.
 */
export abstract class Creature {
  name: string;
  health: number;
  effect: Effect;
  defense: number;

  /**
   * Constructs a new creature.
   * @param name The name of the creature.
   * @param health The health value of the creature.
   * @param effect The effect of the creature.
   * @param defense The defense value of the creature.
   */
  constructor(name: string, health: number, effect: Effect, defense: number) {
    this.name = name;
    this.health = health;
    this.effect = effect;
    this.defense = defense;
  }

  abstract triggerEffect(gameState: GameState, ...params: any[]): void;

  /**
   * Receives damage from an attack.
   * @param damage The amount of damage received.
   */
  receiveDamage(damage: number): void {
    this.health -= damage;
  }

  /**
   * Checks if the creature is alive.
   * @returns True if the creature's health is greater than 0.
   */
  isAlive(): boolean {
    return this.health > 0;
  }
}
