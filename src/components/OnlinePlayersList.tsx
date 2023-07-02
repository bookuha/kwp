import { Player } from "@/app/models";

async function getPlayers() {
  const res = await fetch("http://localhost:3000/api/players");

  const players: Player[] = await res.json();

  return players;
}

export const OnlinePlayersList = async () => {
  const players = await getPlayers();

  console.log(players);

  if (!players || players.length === 0) {
    return (
      <div>
        <span className="text-neutral-600">
          No players online at this moment.
        </span>
      </div>
    );
  }

  return (
    <div>
      <p>players on-line:</p>
      {players.length}
    </div>
  );
};
