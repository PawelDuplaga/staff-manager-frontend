import styles from './ModalTransitionWrapper.module.scss';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';



type ModalTransitionWrapperProps = {
  children : React.ReactElement;
  handleClose: () => void;
  open: boolean;
}

const ModalTransitionWrapper = ({ 
  children, 
  handleClose,
  open } : ModalTransitionWrapperProps) => {

  return (
    <>
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
            <div>
              {children}
            </div>
          </Slide>
        </Modal>
    </>
  );
}


export default ModalTransitionWrapper;