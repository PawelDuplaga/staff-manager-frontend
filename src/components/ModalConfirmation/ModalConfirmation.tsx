import styles from './modalConfirmation.module.scss';
import * as React from 'react';
import { MdCheckCircleOutline } from "react-icons/md";
import ModalTransitionWrapper from '../ModalTransitionWrapper/ModalTransitionWrapper';
import ModalBody from '../ModalBody/ModalBody';

type ModalConfirmationProps = {
  isVisible : boolean;
}

const ModalConfirmation = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalTransitionWrapper handleClose={handleClose} handleOpen={handleOpen} open={open}>
      <ModalBody 
        title="Potwierdzenie"
        onClose={handleClose}
      >
        <div className={styles.content}>
          <MdCheckCircleOutline size={20} onClick={handleClose}/>
          <p>Członek zespołu został zablokowany</p>
        </div>
        <button className={styles.hideButton} onClick={handleClose}>
          Ukryj
        </button>
      </ModalBody>
    </ModalTransitionWrapper>
  );
}


export default ModalConfirmation;