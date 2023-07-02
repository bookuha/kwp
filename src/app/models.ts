export interface Player {
  id: string;
  nickname: string;
  pid: string;
  role?: "semi-pro" | "pro";
  isPlaying?: boolean;
}
export interface GameLobby {
  host: Player;
  map: string;
  maxRealPlayers: number;
  maxplayers: number;
  numObservers: number;
  numRealPlayers: number;
  numplayers: number;
  obs: number;
  players: Player[];
  title: string;
  version: string;
}
