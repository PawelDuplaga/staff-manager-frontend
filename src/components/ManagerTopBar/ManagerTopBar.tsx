import styles from './managerTopBar.module.scss';

const ManagerTopBar = () => {
  return (
		<div className={styles.managertopbarContainer}>
      <div className={styles.topTitleFrame}>
        <h1>Lista członków zespołu</h1>
        <h3>Zarządzaj listą członków swojego zespołu</h3>
      </div>
      <button className={styles.buttonAdd}>Zaimportuj członka zespołu</button>
      <button className={styles.buttonImport}>Dodaj członka zespołu</button>

		</div>
  );
};

export default ManagerTopBar