import * as React from 'react';
import ModalTransitionWrapper from '../ModalTransitionWrapper/ModalTransitionWrapper';
import AutoMemberForm from '../AutoMemberForm/AutoMemberForm';
import ModalBody from '../ModalBody/ModalBody';

const ModalAddMember = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <ModalTransitionWrapper handleClose={handleClose} handleOpen={handleOpen} open={open}>
      <ModalBody
        title="Dodawanie nowego członka zespołu"
        subtitle="Wypełnij wszystkie pola poniżej lub pobierz z internetu"
        onClose={handleClose}
      >
        <AutoMemberForm />
      </ModalBody>
    </ModalTransitionWrapper>
  );
}


export default ModalAddMember;