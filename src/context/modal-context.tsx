import React, { useState, createContext } from 'react'
import ModalAddMember from '../components/ModalAddMember/ModalAddMember'
import ModalConfirmation from '../components/ModalConfirmation/ModalConfirmation'

type ModalContextProviderProps = {
    children: React.ReactNode
}

type ModalContextType = {
    confirmationModal: {
        isOpen: boolean
        setOpen: React.Dispatch<React.SetStateAction<boolean>>
    }
    addMemberModal: {
        isOpen: boolean
        setOpen: React.Dispatch<React.SetStateAction<boolean>>
    }
}


export const ModalContext = createContext<ModalContextType | null>(null)

const ModalContextProvider = ({ children } : ModalContextProviderProps) => {
    
    const [isModalConfirmationOpen, setIsModalConfirmationOpen] = useState(false);
    const [isModalAddMemberOpen, setIsModalAddMemberOpen] = useState(false);

    return (
        <ModalContext.Provider value={{
            confirmationModal: {
                isOpen: isModalConfirmationOpen,
                setOpen: setIsModalConfirmationOpen,
            },
            addMemberModal: {
                isOpen: isModalAddMemberOpen,
                setOpen: setIsModalAddMemberOpen,
            }
        }}>
            <ModalAddMember />
            <ModalConfirmation />
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;