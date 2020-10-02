import React from 'react';
import '../css/generar.css';
import pic from "../img/certCCU.png";
import ReactDOM, { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Page, Text, View, Document, StyleSheet,Image, PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';
import firma from "../img/firmaHelena.png"

class Generar extends React.Component {
  
  
  componentDidMount(){
    try{
      const items = this.props.location.state.detail
  var evento = this.props.location.state.evento
  const id =items.id
  const nombre = items.nombre;
  const apellido = items.apellido;
  var imagen = []
  var asistencia = ""
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
  if(evento == "Conferencia virtual de usuarios Esri 2020"){
    imagen=pic
    asistencia = "Asistio a"
  }
  if(evento == "CUE2020Mapas"){
    asistencia = "En el marco de la Conferencia de Usuarios Esri 2020, participó en la Galería de mapas con el mapa:"
    evento = items.mapa
    imagen=pic
  }
  if(evento == "Evento Cucuta 2019"){
    imagen=pic
    asistencia = "Asistio a"
  }
  const MyDocument = () => (
    <Document title="Certificado" author="Esri">
    <Page size="B5" style={styles.page} orientation="landscape" wrap>
    <Image src={imagen} alt="images"  style={styles.pageBackground} />
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
  <Text style={{fontSize:"11"}}>{asistencia}</Text>
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
    const App2 = () => (
    <PDFDownloadLink document={<MyDocument />} fileName="Certificado.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Si no ves el documento, descargalo aqui!')}
    </PDFDownloadLink>
    );
    // document.getElementsByTagName("body")[0].style.overflowY="hidden"
    ReactDOM.render( <App></App>, document.getElementById("pdf"));
    ReactDOM.render( <App2></App2>, document.getElementById("descargar"));
    
    
     } catch{
            this.props.history.push('/')
        
    }
  }
  obtenerurl(){
    alert(document.getElementsByTagName("a")[0].getAttribute("href"))
  }
  
    render() {
      try{
      const items = this.props.location.state.detail
  const evento = this.props.location.state.evento
} catch{
  this.props.history.push('/')

}   
        return (
          <div style={{width:"100%",height:"100%",position:"absolute"}}>
          <div id="pdf" style={{width:"100%",height:"100%",position:"absolute"}}>
            {/* <App width="100%" height="100%"></App> */}
          </div>
          <div id="descargar">

          </div>
          </div>
          
        );
      }
    
}
export default Generar;