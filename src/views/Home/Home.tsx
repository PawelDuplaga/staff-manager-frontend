import ManagerTopBar from '../../components/ManagerTopBar/ManagerTopBar';
import MembersTable from '../../components/MembersTable/MembersTable';
import styles from './home.module.scss';

const Home = () => {
  return (
		<div className={styles.homeContainer}>
      <ManagerTopBar />
      <MembersTable />
		</div>
  );
};

export default Home