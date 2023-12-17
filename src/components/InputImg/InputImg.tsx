import styles from './inputImg.module.scss';

const InputImg = () => {

  return (
   <div>
     <label htmlFor="imageInput" className={styles['custom-file-upload']}>
       Custom Upload
     </label>
    <input 
      type='file'
      id='imageInput'
      name='imageInput'
      className={styles.imageInput}
      accept='image/png, image/jpeg'
      multiple={false}
      
    >
       
     </input>
   </div>
  );
};

export default InputImg