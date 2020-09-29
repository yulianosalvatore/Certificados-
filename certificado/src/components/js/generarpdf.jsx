import React from 'react';
import '../css/generar.css';
import pic from "../img/certCCU.png";
import ReactDOM, { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Page, Text, View, Document, StyleSheet,Image, PDFViewer } from '@react-pdf/renderer';
import firma from "../img/firmaHelena.png"

class Generar extends React.Component {
  
  
  componentDidMount(){
    try{
      const items = this.props.location.state.detail
  const evento = this.props.location.state.evento
  const id =items.id
  const nombre = items.nombre;
  const apellido = items.apellido;
  // Create styles
  const styles = StyleSheet.create({
    Text: {
      fontFamily: 'AvenirCondensedHand'
    },
    page: {
      alignItems: 'center',
      Fontfamily: 'AvenirCondensedHand'
    },
    section: {
      width: 200,
      '@media max-width: 400': {
        width: 300,
      },
      '@media orientation: landscape': {
        width: 400,
      },
    },
    view: {
      width: '30%',
      height: '6%',
  },
    pageBackground: {
      position: 'absolute',
      minWidth: '100%',
      minHeight: '100%',
      display: 'block',
      height: '100%',
      width: '100%',
    },
  });
  
  const MyDocument = () => (
    <Document title="Certificado" author="Esri">
    <Page size="B5" style={styles.page} orientation="landscape" wrap>
    <Image src={pic} alt="images"  style={styles.pageBackground} />
    <Text >  </Text>
    <Text > </Text>
    <Text > </Text>
    <Text >  </Text>
    <Text >  </Text>
    <Text >  </Text>
    <Text >  </Text>
    <Text >  </Text>
    <Text style={{fontSize:"11"}}>Certifica que </Text>
  <Text  style={{fontSize:"35"}}>{nombre} {apellido}</Text>
  <Text style={{fontSize:"13"}}>{id} </Text>
    <Text > </Text>
    <Text > </Text>
    <Text style={{fontSize:"11"}}>Asistio a </Text>
    <Text  style={{fontSize:"25"}}>{evento} </Text>
    <Text>  </Text>
                        <Image src={firma} style={styles.view} alt="images" />
                        
    <Text style={{fontSize:"12"}}>Helena Gutiérres  </Text>
    <Text style={{fontSize:"12"}}>Presidente  </Text>
    </Page>
  </Document>
    );
    const App = () => (
      <PDFViewer width="100%" height="100%">
        <MyDocument />
      </PDFViewer>
    );
    document.getElementsByTagName("body")[0].style.overflowY="hidden"
    ReactDOM.render( <App></App>, document.getElementById("pdf"));
     } catch{
            this.props.history.push('/')
        
    }
  }
  
    render() {
      try{
      const items = this.props.location.state.detail
  const evento = this.props.location.state.evento
} catch{
  this.props.history.push('/')

}   
        return (
          <div id="pdf" style={{width:"100%",height:"100%",position:"absolute"}}>
            {/* <App width="100%" height="100%"></App> */}
          </div>
        );
      }
    
}
export default Generar;