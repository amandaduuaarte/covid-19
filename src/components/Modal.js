import {useState,} from 'react';
import {ViewModal, ModalContent, ModalTitle, 
  CloseModal, CloseButton, ModalInfo} from './componentsStyle';
import img from '../images/Icons/delete.png';
  

const Modal = ({country}) =>{
const [showModal, setShowModal] = useState(true);
  return(
    <>
{showModal && (
   <ViewModal>
        <ModalContent>
      <CloseButton  
      onClick={() => {setShowModal(!showModal)}}>  <CloseModal src={img}/> 
      </CloseButton>
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