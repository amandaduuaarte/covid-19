import {useState,} from 'react';
import {FaTimes} from 'react-icons/fa';
import {ViewModal, ModalContent, ModalTitle, 
  CloseModal, CloseButton, ModalInfo} from './componentsStyle';
 

const Modal = ({country}) =>{
const [showModal, setShowModal] = useState(true);
  return(
    <>
{showModal && (
   <ViewModal>
        <ModalContent>
      <FaTimes style={{alignSelf:'flex-end'}} 
      onClick={() => {setShowModal(!showModal)}}/>  
          <ModalTitle>
            País:
            {country.data?.country}
          </ModalTitle>
          <ModalInfo>Número de casos:{country.data?.confirmed}</ModalInfo>
          <ModalInfo> Número de mortes: {country.data?.deaths}</ModalInfo>
        </ModalContent>
        </ViewModal>
        )}
        </>
  )}

export default Modal