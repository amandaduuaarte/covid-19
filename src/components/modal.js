import {useState, useEffect} from 'react';
import {ViewModal, ModalContent, ModalTitle, 
  CloseModal, CloseButton, ModalInfo} from './componentsStyle';
import apiNames  from '../services/apiStates';
import img from '../images/Icons/delete.png';

  const Modal = ({search}) =>{
  const [country, setCountry] = useState('');
  const [showModal, setShowModal] = useState(true);

  useEffect(()=>{
    apiNames
    .get(`https://covid19-brazil-api.vercel.app/api/report/v1/${search}`)
    .then((response)=> setCountry(response.data))
  })
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