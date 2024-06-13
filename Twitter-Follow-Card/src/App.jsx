import TwitterFollowCard from "./TwitterFollowCard";
import "./App.css";

export function App() {
  const users = [
    {
      username: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: true,
    },
    {
      username: "DUALIPA",
      name: "Dua Lipa",
      isFollowing: true,
    },
    {
      username: "imantadotv",
      name: "imantado",
      isFollowing: false,
    },
    {
      username: "aXoZerr",
      name: "aXo",
      isFollowing: true,
    },
    {
      username: "shakira",
      name: "Shakira",
      isFollowing: false,
    },
    {
      username: "auronplay",
      name: "Auron",
      isFollowing: false,
    },
    {
      username: "samyriveratv",
      name: "rivers",
      isFollowing: false,
    },
    {
      username: "SpreenDMC",
      name: "spreen",
      isFollowing: true,
    },
  ];

  return (
    <section className="App">
      <h2 className="App-title">A quién seguir</h2>
      {users.map(({ username, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={username}
            username={username}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
      <a className="App-show-more" href="#">
        Show more
      </a>
    </section>
  );
}
