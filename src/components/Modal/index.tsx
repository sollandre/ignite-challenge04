import { ReactElement, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps{
  isOpen: boolean;
  children: ReactElement;
  setIsOpen: () => void;
}

function Modal(props: ModalProps){
  const [modalStatus, setModalStatus] = useState(false);
  const { isOpen } = props;
  
  // useEffect ( () => {
  //   console.log(props);
  //   setModalStatus(props.isOpen);
  // }, [isOpen])
  /*Different way of doing the above behavior without the typescript errors*/
  if(isOpen !== modalStatus){
    console.log(props);
    setModalStatus(isOpen);
  }

  const { children, setIsOpen } = props;

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
