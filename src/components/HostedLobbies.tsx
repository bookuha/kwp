import { LobbiesResponse } from "@/app/api/lobbies/route";

async function getLobbies() {
  const res = await fetch("http://localhost:3000/api/lobbies");

  const lobbies: LobbiesResponse = await res.json();
  return lobbies;
}

export const HostedLobbies = async () => {
  const lobbies = await getLobbies();

  return (
    <div>
      {lobbies.playing.map((g) => (
        <div key={g.host.id}>
          <p>{g.title}</p>
          <span>
            Players:{" "}
            {g.players.map((p) => (
              <span key={p.id}>{p.nickname}, </span>
            ))}
          </span>
          <p>{g.map}</p>
        </div>
      ))}
    </div>
  );
};
