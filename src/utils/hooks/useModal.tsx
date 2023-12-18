import { ModalContext } from "../../context/modal-context";
import { useContext } from "react";

type useModalProps = {
    modalType: 'confirmation' | 'addMember';
    message?: string
}

const useModal = ({ modalType, message } : useModalProps) => {
    const context = useContext(ModalContext);
    if (context === null){
        throw new Error(
            "useSlides must be used within a ModalContextProvider"
        );
    }

    if(modalType === 'confirmation'){
        return {...context.confirmationModal, message}
    }
    else {
        return {...context.addMemberModal}
    }

}

export default useModal