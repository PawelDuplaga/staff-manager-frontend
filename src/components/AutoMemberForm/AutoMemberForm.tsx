import React, { useState } from 'react';
import { MdDownloading } from 'react-icons/md';
import styles from './autoMemberForm.module.scss';
import InputImg from '../InputImg/InputImg';
import InputText from '../InputText/InputText';

const AutoMemberForm = () => {
  
  const [file, setFile] = useState('');

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
            <InputText 
              type='text'
              label='Nazwa'
              required
            />
            <InputText 
              type='email'
              label='Adres e-mail'
              required
            />
            <InputText 
              type='text'
              label='Numer telefonu'
            />
          </div>
        </div>
        <div className={styles.modalActions}>
          <button className={styles.cancelButton}>Anuluj</button>
          <button type="submit" className={styles.confirmButton}>Potwierdź</button>
        </div>
      </form>
    </section>
  );
};

export default AutoMemberForm