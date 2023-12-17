import styles from './ModalTransitionWrapper.module.scss';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';



type ModalTransitionWrapperProps = {
  children : React.ReactElement;
  handleClose: () => void;
  handleOpen: () => void;
  open: boolean;
}

const ModalTransitionWrapper = ({ 
  children, 
  handleClose, 
  handleOpen, 
  open } : ModalTransitionWrapperProps) => {

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Slide 
            direction="up" 
            in={open} 
            className={styles.slide} 
            mountOnEnter 
            unmountOnExit
          >
            {children}
          </Slide>
        </Modal>
    </>
  );
}


export default ModalTransitionWrapper;