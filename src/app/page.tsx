import { LatestGames } from "@/components/LatestGames";
import { OnlinePlayersList } from "@/components/OnlinePlayersList";
import { HostedLobbies } from "@/components/HostedLobbies";

export default function Home() {
  return (
    <>
      <span className="text-xl">The home page of Shatabrick Remastered.</span>
      <OnlinePlayersList />
      <LatestGames />
      <HostedLobbies />
    </>
  );
}
