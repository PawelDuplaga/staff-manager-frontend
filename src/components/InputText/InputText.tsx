import styles from './InputText.module.scss';
import { TextField } from '@mui/material';

//moved TextField to separate file to unload form styling file

type InputTextProps = {
  type: 'text' | 'email' | 'password',
  label: string,
  required? : boolean,
  disabled? :boolean,
  defaultValue?: string,
}


const InputText = ({ 
  type, 
  label, 
  required = false, 
  disabled = false, 
  defaultValue = ''
} : InputTextProps )  => {
  return (
    <TextField
      className={styles.inputtextContainer}
      required = {required}
      disabled = {disabled}
      type={type}
      id={label}
      label={label}
      defaultValue={defaultValue}
      size="small"
    />
  );
};

export default InputText