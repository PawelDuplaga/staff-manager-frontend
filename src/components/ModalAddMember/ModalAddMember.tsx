import * as React from 'react';
import ModalTransitionWrapper from '../ModalTransitionWrapper/ModalTransitionWrapper';
import AutoMemberForm from '../AutoMemberForm/AutoMemberForm';
import ModalBody from '../ModalBody/ModalBody';
import useModal from '../../utils/hooks/useModal';



const ModalAddMember = () => {
  const {isOpen, setOpen} = useModal({ modalType: "addMember"});

  return (
    <ModalTransitionWrapper handleClose={() => setOpen(false)} open={isOpen}>
      <ModalBody
        title="Dodawanie nowego członka zespołu"
        subtitle="Wypełnij wszystkie pola poniżej lub pobierz z internetu"
        onClose={() => setOpen(false)}
      >
        <AutoMemberForm />
      </ModalBody>
    </ModalTransitionWrapper>
  );
}


export default ModalAddMember;