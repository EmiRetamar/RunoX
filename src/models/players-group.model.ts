import { Player } from "./player.model";

export class PlayersGroup {
  readonly players: Player[];

  constructor() {
    this.players = [];
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  addPlayers(players: Player[]) {
    this.players.push(...players);
  }

  getPlayerById(playerId: string) {
    const player = this.players.find((player) => player.id === playerId);

    if (!player) {
      console.error(
        `El jugador con id ${playerId} no esta en el grupo de jugadores`
      );

      return;
    }

    return player;
  }
}
