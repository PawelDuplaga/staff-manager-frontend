import ButtonAddMember from './ButtonAddMember/ButtonAddMember';
import ButtonImportMember from './ButtonImportMember/ButtonImportMember';
import styles from './managerTopBar.module.scss';

const ManagerTopBar = () => {
  return (
		<div className={styles.managertopbarContainer}>
      <div className={styles.topTitleFrame}>
        <h1>Lista członków zespołu</h1>
        <h3>Zarządzaj listą członków swojego zespołu</h3>
      </div>
      <ButtonImportMember callback={() => {}}/>
      <ButtonAddMember callback={() => {}}/>
		</div>
  );
};

export default ManagerTopBar