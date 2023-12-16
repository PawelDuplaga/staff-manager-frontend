import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from './cellActions.module.scss';
import { MdMoreVert } from "react-icons/md";

export default function CellActions() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.cellActionsContainer}>
      <MdMoreVert onClick={handleClick} className={styles.actionIcon}/>
      <Menu
        disableAutoFocusItem
        className={styles.actionList}
        id="action-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: 15, vertical: 25 }}
      >
        <MenuItem
          autoFocus={false}
          onClick={handleClose}
          className={styles.menuButton}
        >Zablokuj
        </MenuItem>
      </Menu>
    </div>
  );
}
