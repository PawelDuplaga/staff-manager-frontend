import styles from './ButtonAddMember.module.scss';
import { MdAdd } from "react-icons/md";

type ButtonAddMemberProps = {
  callback: () => void;
}

const ButtonAddMember = ({ callback }: ButtonAddMemberProps) => {
  return (
		<button 
      className={styles.buttonAddMemberContainer}
      onClick={callback}
    >
      <div className={styles.innerFrame}>
        <MdAdd size={24}/>
        Dodaj członka zespołu
      </div>  
		</button>
  );
};

export default ButtonAddMember