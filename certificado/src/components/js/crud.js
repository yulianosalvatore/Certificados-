import React from 'react';
import '../css/crud.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Button } from 'reactstrap';

const data = [
  { id: 1, nombre: "yuliano", apellido: "quiñones", empresa: "esri", asistencia: "1", correo: "yquinonez@esri.co" },
  { id: 2, nombre: "lina", apellido: "zabaleta", empresa: "esri", asistencia: "1", correo: "lina@esri.co" },
];

class Crud extends React.Component {
  state = {
    data: data,
    from: {
      id: " ",
      nombre: " ",
      apellido: " ",
      empresa: " ",
      asistencia: " ",
      correo: " ",
    },
    modalInsertar: false,
    modalEditar: false,
  };


  handlechange = e => {
    this.setState({
      from: {
        ...this.state.from,
        [e.target.name]: e.target.value,
      }
    })
  }
  // modal insertar 
  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  }
  ocultarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  }
  // modal editar 
  mostrarModalEditar =(Registro)=>{
    this.setState({ modalEditar: true, from:Registro});
  }
  ocultarModalEditar = () => {
    this.setState({ modalEditar: false });
  }

  insertar = () => {
    var valornumerico = { ...this.state.from };
    valornumerico.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valornumerico);
    this.setState({ data: lista, modalInsertar: false });
  }

  editar = (dato) => {
    var contador = 0;
    var lista = this.state.data;
    lista.map((Registro)=>{
      if (dato.id == Registro.id) {
        lista[contador].nombre = dato.nombre;
        lista[contador].apellido = dato.apellido;
        lista[contador].empresa = dato.empresa;
        lista[contador].asistencia = dato.asistencia;
        lista[contador].correo = dato.correo;
      }
      contador++;
    });
    this.setState({ data: lista, modalEditar:false })
  }
eliminar=(dato)=>{
  var opcion= window.confirm("Desea eliminar el usuario "+dato.id);
  if(opcion){
    var contador=0;
    var lista =this.state.data;
    lista.map((Registro)=>{
      if(Registro.id==dato.id){
        lista.splice(contador, 1);  
      }
      contador++;
    });
    this.setState({data:lista});
  }
}


  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>Agregar nuevo usuario </Button>
          <Table>

            <thead><tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Empresa</th>
              <th>Asistencia</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr></thead>
            <tbody>

              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.nombre}</td>
                  <td>{elemento.apellido}</td>
                  <td>{elemento.empresa}</td>
                  <td>{elemento.asistencia}</td>
                  <td>{elemento.correo}</td>
                  <td><Button color="primary" onClick={() => this.mostrarModalEditar(elemento)}>Editar</Button>
                    <Button color="danger" onClick={() => this.eliminar(elemento)}  >Eliminar</Button></td>
                </tr>
              ))}
            </tbody>

          </Table>
          <br />

          {/* ingresar usuario  */}

        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <div className="registro" >
            <div className=" contentRegistro">
          <ModalHeader>
          <div class="titleRegistro"> Ingresar Registro </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id</label><br/>
              <input className="input" readOnly type="Text" value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>Nombre</label><br/>
              <input className="input" name="nombre" type="Text" onChange={this.handlechange}
              />
            </FormGroup>

            <FormGroup>
              <label>Apellido</label><br/>
              <input className="input" name="apellido" type="Text" onChange={this.handlechange}
              />
            </FormGroup>

            <FormGroup>
              <label>Empresa</label><br/>
              <input className="input" name="empresa" type="Text" onChange={this.handlechange}
              />
            </FormGroup>

            <FormGroup>
              <label>Asisitencia</label><br/>
              <input className="input" name="asistencia" type="Text" onChange={this.handlechange}
              />
            </FormGroup>

            <FormGroup>
              <label>Correo</label><br/>
              <input className="input" name="correo" type="Text" onChange={this.handlechange}
              />
            </FormGroup>
          </ModalBody>

         <div className ="contentButtons">
          <ModalFooter>
            <Button  className="Buttons" onClick={() => this.insertar()}>Insertar</Button>
            <Button className="Buttons" onClick={() => this.ocultarModalInsertar()}>Cancelar</Button>
          </ModalFooter>
          </div>
          </div>
          </div>
        </Modal>

        {/* actulizar usuario  */}
        <Modal isOpen={this.state.modalEditar}>
        <div className="registro" >
            <div className=" contentRegistro">
          <ModalHeader>
          <div class="titleRegistro"> Editar Registro </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id</label><br/>
              <input className="input" readOnly type="Text" value={this.state.from.id}
              />
            </FormGroup>

            <FormGroup>
              <label>Nombre</label><br/>
              <input className="input" name="nombre" type="Text" onChange={this.handlechange} value={this.state.from.nombre}
              />
            </FormGroup>

            <FormGroup>
              <label>Apellido</label><br/>
              <input className="input" name="apellido" type="Text" onChange={this.handlechange} value={this.state.from.apellido}
              />
            </FormGroup>

            <FormGroup>
              <label>Empresa</label><br/>
              <input className="input" name="empresa" type="Text" onChange={this.handlechange} value={this.state.from.empresa}
              />
            </FormGroup>

            <FormGroup>
              <label>Asisitencia</label><br/>
              <input className="input" name="asistencia" type="Text" onChange={this.handlechange} value={this.state.from.asistencia}
              />
            </FormGroup>

            <FormGroup>
              <label>Correo</label><br/>
              <input className="input" name="correo" type="Text" onChange={this.handlechange} value={this.state.from.correo}
              />
            </FormGroup>
          </ModalBody>

          <div className ="contentButtons">
          <ModalFooter>
            <Button className ="Buttons" onClick={() => this.editar(this.state.from)}  >Editar</Button>
            <Button className ="Buttons" onClick={() => this.ocultarModalEditar()} >Cancelar</Button>
          </ModalFooter>
          </div>
          </div>
          </div>
        </Modal>



      </>
    )
  }
}

export default Crud;