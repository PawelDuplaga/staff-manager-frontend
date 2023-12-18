import styles from './ModalBody.module.scss';
import * as React from 'react';
import { MdClear } from "react-icons/md";

type ModalBodyProps = {
  children: React.ReactNode
  title: string
  subtitle?: string
  onClose: () => void
}

const ModalBody = ({children, title, subtitle, onClose} : ModalBodyProps) => {

  return (
      <div className={styles.modalBodyContainer}>
        <div className={styles.titleSection}>
          <div className={styles.title}>
            <h2>{title}</h2>
            <button onClick={onClose}>
              <MdClear />
            </button>
          </div>
          { subtitle && 
          <h3 className={styles.supportTitle}>
            {subtitle}
          </h3> 
          }
        </div>
        {children}
      </div>
  );
}


export default ModalBody;