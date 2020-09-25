import React from 'react';
import '../css/generar.css';
import pic from "../img/CertCucuta2019.png";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Page, Text, View, Document, StyleSheet,Image, PDFViewer } from '@react-pdf/renderer';


class Generar extends React.Component {
  items = this.props.location.state.detail
  evento = this.props.location.state.evento
  id =this.items.id
  nombre = this.items.nombre;
  apellido = this.items.apellido;
  empresa = this.items.empresa;
  email = this.items.email;
  Document(){
  // Create styles
  const styles = StyleSheet.create({
    Text: {
      fontFamily: 'AvenirCondensedHand'
    },
    page: {
      alignItems: 'center',
      Fontfamily: 'AvenirCondensedHand',
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
    <Text style={{fontSize:"11"}}>Certifico que </Text>
  <Text  style={{fontSize:"35"}}>{this.nombre} {this.apellido}</Text>
  <Text style={{fontSize:"13"}}>C.C {this.id} </Text>
    <Text style={{fontSize:"13"}}>{this.email}</Text>
    <Text > </Text>
    <Text > </Text>
    <Text style={{fontSize:"11"}}>Asistio a </Text>
    <Text  style={{fontSize:"25"}}>{this.evento} </Text>
    <Text > </Text>
    <Text >  </Text>
    <Text >  </Text>
    <Text >  </Text>
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
    document.getElementById("root").style.width="100%"
    document.getElementById("root").style.position="absolute"
    document.getElementById("root").style.height="100%"
    document.getElementsByTagName("body")[0].style.overflowY="hidden"
    ReactDOM.render( <App></App>, document.getElementById("root"));
  }
    render() {
      this.Document()
      // ReactDOM.render( <App></App>, document.getElementsByTagName('body')[0]);
        return (
          // <h1></h1>
          <div >
            {/* <App width="100%" height="100%"></App> */}
          </div>
        );
      }
      
}

export default Generar;