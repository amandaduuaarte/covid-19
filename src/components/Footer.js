import {FooterDiv, FinishInfo, FinishInformations, TextFooter} from './componentsStyle';

function Footer (){
  let style ={
    width: '100%',
  }
  return(
    <div style={style}>
    <FooterDiv>
    <FinishInfo> Informações necessárias sobre a covid-19.</FinishInfo>
    </FooterDiv>
    <FinishInformations>
      <TextFooter> Code by: Amanda </TextFooter>
    </FinishInformations>
    </div>
  )

}

export default Footer;