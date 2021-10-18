import {useState,} from 'react';
import {FaTimes} from 'react-icons/fa';
import {ViewModal, ModalContent, ModalTitle, 
 ModalInfo, ModalFirst} from './componentsStyle';
import Img from '../images/DrawKit Vector Illustration - COVID-19 & Vaccinations V1.0/SVG/02.svg'

const Modal = ({country}) =>{
const [showModal, setShowModal] = useState(true);
  return(
    <>
{showModal && (
   <ViewModal>
        <ModalContent>
          <ModalFirst>
            <ModalTitle>
            País:
            {country.data?.country}
            </ModalTitle> 
          <ModalInfo>Número de casos: {country.data?.confirmed}</ModalInfo>
          <ModalInfo> Número de mortes: {country.data?.deaths}</ModalInfo>
          </ModalFirst>
          <img src={Img} style={{height:'65%', width:'50%', alignSelf: 'center'}}/>
          <FaTimes style={{alignSelf:'flex-start', cursor : 'pointer', 
          marginTop:'10px', color:'rgb(62, 31, 71)', height:'40px'}} 
              onClick={() => {setShowModal(!showModal)}}/>  
        </ModalContent>
        </ViewModal>
        )}
        </>
  )}

export default Modal