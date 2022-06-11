import { Header } from './components/Header';

import './global.css';

import styles from './App.module.css';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author={'John Doe'}
            content={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
            }
          />
        </main>
      </div>
    </div>
  );
}

export default App;
