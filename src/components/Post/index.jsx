import styles from './Post.module.css';

export function Post({ author, content }) {
  return (
    <div>
      <h1>{author}</h1>
      <p>{content}</p>
    </div>
  );
}
