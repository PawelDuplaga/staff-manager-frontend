import styles from './ButtonImportMember.module.scss';
import { MdOutlineCloudDownload } from "react-icons/md";

type ButtonImportMemberProps = {
  callback: () => void;
}

const ButtonImportMember = ({ callback }: ButtonImportMemberProps) => {
  return (
		<button 
      className={styles.buttonImportMemberContainer}
      onClick={callback}
    >
      <div className={styles.innerFrame}>
        <MdOutlineCloudDownload size={24}/>
        Importuj członka zespołu
      </div>  
		</button>
  );
};

export default ButtonImportMember