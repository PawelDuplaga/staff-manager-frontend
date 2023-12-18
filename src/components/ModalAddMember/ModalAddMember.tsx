import styles from './modalAddMember.module.scss';
import * as React from 'react';
import { MdClear } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdDownloading } from "react-icons/md";
import ModalTransitionWrapper from '../ModalTransitionWrapper/ModalTransitionWrapper';
import TextField from '@mui/material/TextField'
import { Input } from '@mui/material';
import InputImg from '../InputImg/InputImg';
import InputText from '../InputText/InputText';
import AutoMemberForm from '../AutoMemberForm/AutoMemberForm';

const ModalAddMember = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <ModalTransitionWrapper handleClose={handleClose} handleOpen={handleOpen} open={open}>
      {/* this div is getting swapped / deleted after Wrapping it into <Slide></Slide> ?? why */}
      <div className={styles.modalBodyContainer}>
        <div className={styles.content}>
          
          <div className={styles.titleSection}>
            <div className={styles.title}>
              <h2>Dodawanie nowego członka</h2>
              <button>
                <MdClear />
              </button>
            </div>
            <h3 className={styles.supportTitle}>
              Wypełnij wszystkie pola poniżej lub pobierz z internetu
            </h3>
          </div>
          <AutoMemberForm />
          
        </div>
      </div>
    </ModalTransitionWrapper>
  );
}


export default ModalAddMember;