import { GameState } from "../GameState"

export type Card = {
  name: string
  imageUrl: string
  description: string
  cost: number
  effect: (state: GameState) => GameState
}