import React from 'react';
import '../css/imprimir.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';



class Imprimir extends React.Component {
    render() {
        try{
        const items = this.props.location.state.detail
        
        return (
            <>
                <Container className="container"> 

                    <br />

                    <div className="jumbotron
">
                    </div>



                    <div className="container">
                        <div className="text-center">
                            <div className="titulo">
                                <h2>Eventos Esri Colombia</h2>
                                <h3>Generación de certificados</h3>
                            </div>
                            {/* formulario a editar para completar datos y poder imprimir */}
                            <div className="from10">
                                <form className="form-horizontal" id="formEditar" action=""
                                    method="post" enctype="url-encoded" autocomplete="on">

                                    <div className="form-group">
                                        <label className="control-label col-sm-2" for="Nombres">Nombres*</label>
                                        <div className="col-sm-8 inputGroupContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-user"></i>
                                                </span>
                                                <input type="text" value={items[0].nombre} className="input2 form-control" name="Nombres" id="Nombres" placeholder="Nombres"  aria-describedby="basic-addon1"
                                                    required
                                                ></input> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" for="Apellidos">Apellidos*</label>
                                        <div className="col-sm-8 inputGroupContainer"> 
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-user"></i>
                                                </span>
                                                <input type="text" value={items[0].apellido} className="input2 form-control" name="Apellidos" id="Apellidos" placeholder="Apellidos"  aria-describedby="basic-addon1"
                                                    required
                                                ></input> 
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-sm-2" for="Cedula">Cedula*</label>
                                        <div className="col-sm-8 inputGroupContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-envelope"></i>
                                                </span>
                                                <input type="text" value={items[0].id} className="input2 form-control" name="Cedula" id="Cedula" placeholder="Cedula"  aria-describedby="basic-addon1"
                                                    required
                                                ></input> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" for="Email">Email*</label>
                                        <div className="col-sm-8 inputGroupContainer">
                                            <div className="input-group ui-widget">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-briefcase"></i>
                                                </span>
                                                <input type="email" value={items[0].email} className="input2 form-control" name="Email" id="Email" placeholder="Email"  aria-describedby="basic-addon1"
                                                    required
                                                ></input> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" for="Empresa">Empresa*</label>
                                        <div className="col-sm-8 inputGroupContainer">
                                            <div className="input-group ui-widget">
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-briefcase"></i>
                                                </span>
                                                <input type="text" value={items[0].empresa} className="input2 form-control" name="Empresa" id="Empresa" placeholder="Empresa"  aria-describedby="basic-addon1"
                                                    required
                                                ></input>
                                            </div>
                                        </div>
                                    </div>
                                    {/* inputs escondidos del usuario, se usan para crear el certificado */}
                                    <input type="hidden" className="form-control" name="Asistencia" id="Asistencia" placeholder="Asistencia"></input>
                                    <input type="hidden" className="form-control" name="EventoUser" id="EventoUser" placeholder="EventoUser"></input>

                                    <div className="form-group">
                                        <label className="col-sm-4 control-label"></label>
                                        <div className="col-sm-4">
                                            <button type="submit" className="Imprimir" id="Imprimir">Imprimir&nbsp;<i
                                                className="glyphicon glyphicon-print"></i></button>
                                                <button type="submit" className="ver" id="ver">Ver&nbsp;<i
                                                className="glyphicon glyphicon-print"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <br />

                </Container>


            </>
        )
        }catch(error){
            return(
                <Container>
                    <h5>Acceso denegado</h5>
                </Container>
            )
        }
    }
}
export default Imprimir;