import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
 
const data = [
    { id: 1, nombre: "yuliano", apellido: "quiñones", empresa: "esri", asistencia: "1", correo: "yquinonez@esri.co" },
    { id: 2, nombre: "lina", apellido: "zabaleta", empresa: "esri", asistencia: "1", correo: "lina@esri.co" },
];

class Crud1 extends React.Component {
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

    render() {
        return (
            <>
                <Container className="container">
                    <br />
{/*  
                     <div className="load">
                        <div className="image-load">
                            <img src="ajax-loader.gif" />
                        </div>
                    </div> */}

                     <div className="jumbotron text-center" style="padding: 0px;">
                         <img src="../img/banner.png" style="width: 100%;" className="img-responsive hidden-xs"></img>
                         <img src="../img/bannermobile.png" class="img-responsive visible-xs-block" width="100%" height="auto" alt="Banner Registro"></img>
                     </div> 
    


                    <div className="container">
                        <div className="text-center">
                            <h2>Eventos Esri Colombia</h2>
                            <h3>Generación de certificados</h3>
                            {/* Formulario de busqueda de registro por evento y correo */}
                            <form className="form-horizontal" id="formConsulta" action="" //logica/controlador/ctrlBusqueda.php
                                method="post" enctype="url-encoded" autocomplete="on">
                                <div className="form-group">
                                    <label className="control-label col-sm-2" for="Evento">Evento*</label>
                                    <div className="col-md-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="glyphicon glyphicon-briefcase"></i>
                                            </span>
                                            <select name="Evento" id="Evento" class="form-control selectpicker"
                                                onchange="cambioEvento()" required>
                                                <option value="">Seleccionar evento</option>
                                                <option value="WebinarMineria2020">Webinar Cómo habilitar la eficiencia operacional en procesos mineros con ArcGIS</option>
                                                <option value="WebinarCovid2020">Webinar Solución de continuidad del negocio durante el COVID-19 </option>
                                                <option value="CCU2019">CCU 2019</option>
                                                <option value="CRU2018">CRU 2018</option>
                                                <option value="CCU2018_Asistentes">CCU 2018</option>
                                                <option value="CRU2019Buc">CRU 2019 Bucaramanga</option>
                                                <option value="CRU2019Cali">CRU 2019 Cali</option>
                                                <option value="CRU2019Barr">CRU 2019 Barranquilla</option>
                                                <option value="EventoCucuta">Evento Cucuta 2019</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" for="Correo">Correo*</label>
                                    <div className="col-sm-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="glyphicon glyphicon-user"></i>
                                            </span>
                                            <input type="text" className="form-control" name="Correo" id="Correo" placeholder="Correo"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-4 control-label"></label>
                                    <div className="col-sm-4">
                                        <button type="submit" className="btn btn-primary btn-block" id="btnEnviar">Consultar&nbsp;<i
                                            class="glyphicon glyphicon-send"></i></button>
                                    </div>
                                </div>
                            </form>
                            {/* formulario a editar para completar datos y poder imprimir */}
                            <form className="form-horizontal" id="formEditar" action="" //certificadopdf.php
                                method="post" enctype="url-encoded" autocomplete="on">
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
                                    <label className="control-label col-sm-2" for="Cedula">ID*</label>
                                    <div className="col-sm-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="glyphicon glyphicon-envelope"></i>
                                            </span>
                                            <input type="text" className="form-control" name="Cedula" id="Cedula" placeholder="ID"></input>
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
                                        <button type="submit" className="btn btn-primary btn-block" id="btnImprimir">Imprimir&nbsp;<i
                                            className="glyphicon glyphicon-print"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br />

                </Container>


            </>
        )
    }
}
export default Crud1;