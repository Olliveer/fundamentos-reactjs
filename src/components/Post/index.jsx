import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';

export function Post({ post }) {
  const [comments, setComments] = useState(['Muito Bom, parabéns']);
  const [newComment, setNewComment] = useState('');

  const publishedAtFormatted = format(
    post.publuishedAt,
    "d 'de' LLLL  HH:mm'h'",
    {
      locale: ptBR,
    },
  );

  const publishedAtRelativeToNow = formatDistanceToNow(post.publuishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function deleteComment(comment) {
    setComments(comments.filter((c) => c !== comment));
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime="2022-05-11 08:00:30">
          {publishedAtRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href={line.content}>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type={'submit'}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
