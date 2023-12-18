import styles from './cellName.module.scss';

type CellNameProps = {
  name: string,
  profileImg: string,
}

//Cell component for tanstack table

const CellName = ({ name, profileImg } : CellNameProps) => {

  return (
    <div className={styles.cellNameContainer}>
      <img src={profileImg} alt={`${name} profile image`}/>
      {name}
    </div>
  )
}

export default CellName