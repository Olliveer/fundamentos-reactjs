import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [linkCount, setLinkCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLinkCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src={'https://avatars.githubusercontent.com/u/50416284?v=4'}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>José Oliveira</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:00:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button type={'button'} onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{linkCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
