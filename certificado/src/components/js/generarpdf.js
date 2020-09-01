import React from 'react';
import '../css/generar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

const data = [
    { id: 1, nombre: "yuliano", apellido: "quiñones", empresa: "esri", asistencia: "1", correo: "yquinonez@esri.co" },
    { id: 2, nombre: "lina", apellido: "zabaleta", empresa: "esri", asistencia: "1", correo: "lina@esri.co" },
];

class Generar extends React.Component {
    state = {
        data: data,
      
    };


    handlechange = e => {
        this.setState({
            from: {
                ...this.state.from,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {
        return (
            <>
                <Container className="container">
                    <br />

                    {/*  <div className="load">
                        <div className="image-load">
                            <img src="ajax-loader.gif" />
                        </div>
        </div>*/}

                      <div className="jumbotron">
                        {/* <img src="../img/banner.png" style="width: 100%;" className="img-responsive hidden-xs"></img>
                         <img src="../img/bannermobile.png" class="img-responsive visible-xs-block" width="100%" height="auto" alt="Banner Registro"></img>
                      */}
                         </div> 



                    <div className="container">
                        <div className="text-center">
                            <h2>Eventos Esri Colombia</h2>
                            <h3>Genera tus Certificados</h3>
                           {/* formulario a editar para completar datos y poder imprimir */}
                           <div className="from1">
                            <form className="form-horizontal" id="formEditar" action="" //certificadopdf.php
                                method="post" enctype="url-encoded" autocomplete="on">
                                <div className="form-group">
                                    <label className="control-label col-sm-2" for="plantilla">Plantilla*</label>
                                    <div className="col-sm-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="glyphicon glyphicon-user"></i>
                                            </span>
                                            <input type="text" className="form-control" name="plantilla" id="plantilla" placeholder="Plantilla"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" for="Nombres">Nombres*</label>
                                    <div className="col-sm-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="glyphicon glyphicon-user"></i>
                                            </span>
                                            <input type="text" className="form-control" name="Nombres" id="Nombres" placeholder="Nombres"></input>
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
                                            <input type="text" className="form-control" name="Apellidos" id="Apellidos" placeholder="Apellidos"></input>
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
                                            <input type="text" className="form-control" name="Cedula" id="Cedula" placeholder="Cedula"></input>
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
                                            <input type="text" className="form-control" name="Email" id="Email" placeholder="Email" ></input>
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
                                            <input type="text" className="form-control" name="Empresa" id="Empresa" placeholder="Empresa"></input>
                                        </div>
                                    </div>
                                </div>
                                {/* inputs escondidos del usuario, se usan para crear el certificado */}
                                <input type="hidden" className="form-control" name="Asistencia" id="Asistencia" placeholder="Asistencia"></input>
                                <input type="hidden" className="form-control" name="EventoUser" id="EventoUser" placeholder="EventoUser"></input>

                                <div className="form-group">
                                    <label className="col-sm-4 control-label"></label>
                                    <div className="col-sm-4">
                                        <button type="submit"  className="btn btn-primary btn-block" id="btnImprimir">Imprimir&nbsp;<i
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
    }
}
export default Generar;