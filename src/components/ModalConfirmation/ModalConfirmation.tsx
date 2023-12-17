import styles from './modalConfirmation.module.scss';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import { MdClear } from "react-icons/md";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { MdCheckCircleOutline } from "react-icons/md";



type ModalConfirmationProps = {
  isVisible : boolean;
}

const style = {
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalConfirmation = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-confirmation-title"
          aria-describedby="modal-confirmation-description"
        >
          <Slide direction="up" in={open} className={styles.slide} mountOnEnter unmountOnExit>
            <div> 
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
            </div>
          </Slide>
        </Modal>
    </>
  );
}


export default ModalConfirmation;