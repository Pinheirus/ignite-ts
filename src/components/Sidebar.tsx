import { PencilLine } from 'phosphor-react'

import styles from "./Sidebar.module.css";
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1682685794761-c8e7b2347702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/88349067?v=4"/>

        <strong>Lucas Pinheiro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
            < PencilLine size={20} />
            Editar seu perfil</a>
      </footer>
    </aside>
  );
}
