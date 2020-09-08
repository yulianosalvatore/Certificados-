import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';


class DASH extends React.Component {

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
                <Container >
                    <br />
                        {/*  
                     <div className="load">
                        <div className="image-load">
                            <img src="ajax-loader.gif" />
                        </div>
                    </div> */}

                        <div className="jumbotron">
                            {/* <img src="../img/banner.png" style="width: 100%;" className="img-responsive hidden-xs"></img>
                         <img src="../img/bannermobile.png" class="img-responsive visible-xs-block" width="100%" height="auto" alt="Banner Registro"></img>
                     */}
                        </div>



                        <div className="container">
                            <div className="text-center">
                                <div className="from1">
                                    <div className ="titulo">
                                    <h2>Eventos Esri Colombia</h2>
                                    <h3>Generación de certificados</h3>
                                    </div>
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
                                                    <select name="Evento" id="Evento" className="input"
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
                                                    <input type="text"   className="input" name="Correo" id="Correo" placeholder="Correo"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label"></label>
                                            <div className="col-sm-4">
                                                <button type="submit" className="Enviar" id="Enviar">Consultar&nbsp;<i
                                                    class="glyphicon glyphicon-send"></i></button>
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
export default DASH;