import React from 'react';
import '../css/imprimir.css';
import sweet from "sweetalert"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import ReactDOM, { render } from "react-dom";


class Imprimir extends React.Component {
    constructor(props) {
        super(props);
        try{
            this.state = props.location.state.detail[0];
            this.evento = props.location.state.evento;
        }catch(error){
                this.props.history.push('/')
        }
      }
      componentDidMount(){
        var raw = JSON.stringify({ email: this.state.email});
    fetch("http://localhost:4000/Mapa", {
      method: "post",
      body: raw,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res[0]) {
            // this.props.document.getElementById("Mapa").appendChild(<option>{res[0].Nombre}</option>)
            // res.map(mapa=>(ReactDOM.render( <option>{mapa.Nombre}</option>, document.getElementById("Mapa"))))
            ReactDOM.render(
                <div>
                <label className="control-label col-sm-2" for="Evento">
                      Nombre del mapa*
                    </label>
                    <div className="col-md-8 inputGroupContainer">
                      <div className="input-group">
                        <div class="input-group">
                        <select
                          ref={this.Mapa}
                          name="Mapa"
                          id="Mapa"
                          className="input form-control"
                          aria-describedby="basic-addon1"
                          required
                        >
                            {res.map(mapa=>(<option>{mapa.Nombre}</option>))}
                        </select>
                        </div>
                      </div>
                    </div>
                    </div>
            ,document.getElementById("seleccionar")
            )
        } else {
        }
      })
      .catch((err) => console.log(err));
    }
    
    nombreChange(value){
        
        var str = value; 
            var matches = str.match(/(\d+)/); 
              
            if (matches) { 
            }else{
                this.setState({
                    nombre: value
                });
            }
    }
    apellidoChange(value){
        
        var str = value; 
            var matches = str.match(/(\d+)/); 
              
            if (matches) { 
            }else{
                this.setState({
                    apellido: value
                });
            }
    }
    cedulaChange(value){
        var str = value
        if(str.slice(-1)==''){

        }else{
        this.setState({
            id: value
        });
    }
    }
    empresaChange(value){
        this.setState({
            empresa: value
        });
    }
        Nombre = React.createRef();
        apellido = React.createRef();
        Cedula = React.createRef();
        empresa = React.createRef();
        Mapa = React.createRef();
    handle = (e) => {
        e.preventDefault();
        try{
        this.props.history.push({
            pathname: '/generarpdf',
            state: { detail: this.state, evento:this.evento, mapa:this.Mapa.current.value}
          })}
          catch{
            this.props.history.push({
                pathname: '/generarpdf',
                state: { detail: this.state, evento:this.evento}
              })
          }
        // var win = window.open('/generarpdf/'+this.state, '_blank');
//   win.focus();
      };
    render() {
        document.getElementsByTagName("body")[0].style.overflowY="visible"
        // try{
        const items = this.props.location.state.detail
        
        return (
            <>
                <div> 
                    <br />

                    <div className="jumbotron">
                    </div>



                    <div >
                            <br></br>
                            <br></br><br></br><br /><br /><br /><br />
                            {/* formulario a editar para completar datos y poder imprimir */}
                                <form onSubmit={this.handle} action=""
                                    method="post" enctype="url-encoded" autocomplete="on">
                                        <div id="seleccionar" className="form-group imprimirG">
                    
                  </div>
                                    <div className="form-group imprimirG">
                                        <label className="control-label col-sm-2"  for="Nombres">Nombres*</label>
                                        <div className="col-sm-8 inputGroupContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-user"></i>
                                                </span>
                                                <input type="text" onChange={e => this.nombreChange(e.target.value)} value={this.state.nombre} ref={this.Nombre}  className="input form-control" name="Nombres" id="Nombres" placeholder="Nombres"  aria-describedby="basic-addon1" required
                                                    required
                                                ></input> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group imprimirG">
                                        <label className="control-label col-sm-2" for="Apellidos">Apellidos*</label>
                                        <div className="col-sm-8 inputGroupContainer"> 
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-user"></i>
                                                </span>
                                                <input type="text"  ref={this.apellido} onChange={e => this.apellidoChange(e.target.value)} value={this.state.apellido} className="input form-control" name="Apellidos" id="Apellidos" placeholder="Apellidos"  aria-describedby="basic-addon1" required
                                                    required
                                                ></input> 
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group imprimirG">
                                        <label className="control-label"style={{marginLeft:"15px"}} for="Cedula">Numero de identificación*</label>
                                        <div className="col-sm-8 inputGroupContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-envelope"></i>
                                                </span>
                                                <input type="number" onChange={e => this.cedulaChange(e.target.value)} ref={this.Cedula} value={this.state.id} className="input form-control" name="Cedula" id="Cedula" placeholder="Cedula"  aria-describedby="basic-addon1" required
                                                    required
                                                ></input> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group imprimirG">
                                        <label className="control-label col-sm-2" for="Email">Email*</label>
                                        <div className="col-sm-8 inputGroupContainer">
                                            <div className="input-group ui-widget">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-briefcase"></i>
                                                </span>
                                                <input type="email"ref={this.email}  value={this.state.email}  className="input form-control" name="Email" id="Email" placeholder="Email"  aria-describedby="basic-addon1" required
                                                    required
                                                ></input> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group imprimirG">
                                        <label className="control-label col-sm-2" for="Empresa">Empresa*</label>
                                        <div className="col-sm-8 inputGroupContainer">
                                            <div className="input-group ui-widget">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-briefcase"></i>
                                                </span>
                                                <input type="text" ref={this.empresa}  onChange={e => this.empresaChange(e.target.value)} value={this.state.empresa} className="input form-control" name="Empresa" id="Empresa" placeholder="Empresa"  aria-describedby="basic-addon1"required
                                                    required
                                                ></input>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <br />
                                    <div className="text-center">
                                            <button type="submit" className="Imprimir" id="Imprimir">Descargar PDF&nbsp;<i
                                               ></i></button>
                                        </div>
                                        <br />
                                    
                                </form>
                                
                    </div>
                    
                </div>
                

            </>
        )
    // }catch(error){
    //     return(
    //         <Container>
    //             {this.props.history.push('/')}
    //         </Container>
            
    //     )
    // }
    }
}
export default Imprimir;