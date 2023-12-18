import styles from './modalConfirmation.module.scss';
import * as React from 'react';
import { MdClear } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import ModalTransitionWrapper from '../ModalTransitionWrapper/ModalTransitionWrapper';



type ModalConfirmationProps = {
  isVisible : boolean;
}

const ModalConfirmation = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalTransitionWrapper handleClose={handleClose} handleOpen={handleOpen} open={open}>
      {/* this div is getting swapped / deleted after Wrapping it into <Slide></Slide> ?? why */}
        <div className={styles.modalX}>
          <div className={styles.title}>
            <h2>Potwierdzenie</h2>
            <button onClick={handleClose}>
              <MdClear size={24}/>
            </button>
          </div>
          <div className={styles.content}>
            <MdCheckCircleOutline size={20} onClick={handleClose}/>
            <p>Członek zespołu został zablokowany</p>
          </div>
          <button className={styles.hideButton} onClick={handleClose}>
            Ukryj
          </button>
        </div>
    </ModalTransitionWrapper>
  );
}


export default ModalConfirmation;