import {FooterDiv, FinishInfo, FinishInformations} from './componentsStyle';

function Footer (){
  let style ={
    width: '100%',
  }
  return(
    <div style={style}>
    <FooterDiv>
    <FinishInfo> Informações necessárias sobre a covid-19 no Brasil.</FinishInfo>
    </FooterDiv>
    <FinishInformations>

    </FinishInformations>
    </div>
  )

}

export default Footer;