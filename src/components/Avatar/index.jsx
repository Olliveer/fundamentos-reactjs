import styles from './Avatar.module.css';

export function Avatar({ src, hasBorder = true }) {
  return (
    <img
      className={!hasBorder ? styles.avatar : styles.avatarWithBorder}
      src={src}
      alt=""
    />
  );
}
