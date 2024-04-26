import { GameState } from "./GameState";

/**
 * Base class for effects that can be applied to the game state.
 */
export abstract class Effect {
  /**
   * Applies the effect to the given game state.
   * @param gameState The current state of the game.
   * @returns The new state of the game after the effect is applied.
   */
  abstract apply(gameState: GameState): GameState;
}
