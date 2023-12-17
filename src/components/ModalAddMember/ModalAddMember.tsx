import styles from './modalAddMember.module.scss';
import * as React from 'react';
import { MdClear } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdDownloading } from "react-icons/md";
import ModalTransitionWrapper from '../ModalTransitionWrapper/ModalTransitionWrapper';
import TextField from '@mui/material/TextField'
import { Input } from '@mui/material';
import InputImg from '../InputImg/InputImg';

const ModalAddMember = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [file, setFile] = React.useState('');

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log('image', e.target.image.value);
    
    setFile('sent');
  }


  function handleFileOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    console.log('target', target.files);
  }

  return (
    <ModalTransitionWrapper handleClose={handleClose} handleOpen={handleOpen} open={open}>
      {/* this div is getting swapped / deleted after Wrapping it into <Slide></Slide> ?? why */}
      <div> 
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

            <section className={styles.formSection}>
              <div className={styles.autoForm}>
                <button className={styles.autoFormButton}>
                  <MdDownloading size={24}/>
                  Wypełnij formularz automatycznie
                </button>
                <p className={styles.warning}>
                  Uwaga! Wszystkie pola formularza zostaną nadpisane danymi z internetu. 
                </p>
              </div>
              
              <form className={styles.memberForm} onSubmit={handleOnSubmit}>
                <div className={styles.inputsContainer}>
                  <div className={styles.avatarSection}>
                    <InputImg />
                  </div>
                  <div className={styles.infoSection}>
                    {/* <div className={styles.class1}></div>
                    <div className={styles.class1}></div>
                    <div className={styles.class1}></div> */}
                    <TextField
                      required
                      disabled
                      type="text"
                      id="name-required"
                      label="Name"
                      defaultValue="Jan Kowalski"
                      size="small"
                    />
                    <TextField
                      required
                      type="text"
                      id="name-required"
                      label="Email & Phone"
                      defaultValue=""
                      size="small"
                    />
                    <TextField
                      type="text"
                      id="name-required"
                      label="Name"
                      defaultValue=""
                      size="small"
                    />
                  </div>
                </div>
                <div className={styles.modalActions}>
                  <button className={styles.cancelButton}>Anuluj</button>
                  <button type="submit" className={styles.confirmButton}>Potwierdź</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </ModalTransitionWrapper>
  );
}


export default ModalAddMember;