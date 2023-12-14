import ManagerTopBar from '../../components/ManagerTopBar/ManagerTopBar';
import styles from './home.module.scss';

const Home = () => {
  return (
		<div className={styles.homeContainer}>
      <ManagerTopBar />
		</div>
  );
};

export default Home