import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Pinheirus.png",
      name: "Lucas Pinheiro",
      role: "Desenvolvedor Front End",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publisheAt: new Date("2023-08-28 12:12:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Marllock.png",
      name: "Marreco",
      role: "Desenvolvedor Mobile",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publisheAt: new Date("2023-07-27 12:12:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapepr}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />);
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
