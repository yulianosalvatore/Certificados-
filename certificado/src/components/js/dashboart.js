import React from "react";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import sweet from "sweetalert"
import { Container } from "reactstrap";

class DASH extends React.Component {
  state = {
    res: []
  }
  // handlechange = e => {
  //     this.setState({
  //         from: {
  //             ...this.state.from,
  //             [e.target.name]: e.target.value,
  //         }
  //     })
  // }
  Email = React.createRef();
  Evento = React.createRef();
  handle = (e) => {
    e.preventDefault();
    const evento = this.Evento.current.value;
    const email = this.Email.current.value;
    const split = evento.split(",");
    const evento1 =  split[0];
    const evento2= split[1];
    // alert(this.Email.current.value)

    var raw = JSON.stringify({ email: email, evento: evento1 });

    fetch("http://localhost:4000/select", {
      method: "post",
      body: raw,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res[0]) {
          // this.setState({res})
          // alert(this.state.res)
          // this.props.history.push('/imprimir');
          this.props.history.push({
            pathname: '/imprimir',
            state: { detail: res, evento: evento2 }
          })

        } else {
          sweet({
            text: "Usted NO asistio a este evento",
            icon: "error",
            timer: "3000",
            button: false
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div>
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
          <br></br>
          <div >
          <br></br><br></br>
          <br></br><br></br>
          <br></br><br></br>

                <div className="titulo text-center">
                  <h2 className="avenir">Eventos Esri Colombia</h2>
                  <h3  >Generación de certificados</h3>
                </div>
                {/* Formulario de busqueda de registro por evento y correo */}
                
                <form
                  onSubmit={this.handle}
                  // className="form-horizontal"
                  id="formConsulta"
                  action=""
                  method="post"
                  enctype="url-encoded"
                  autocomplete="on"
                >
                  <div className="form-group left">
                    <label className="control-label col-sm-2" for="Evento">
                      Evento*
                    </label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            {" "}
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              class="bi bi-calendar-check"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                              />
                            </svg>{" "}
                          </span>
                        </div>
                        <select
                          ref={this.Evento}
                          name="Evento"
                          id="Evento"
                          className="input2 form-control"
                          onchange="cambioEvento()"
                          aria-describedby="basic-addon1"
                          required
                        >
                          <option value="">Seleccione el evento</option>
                          <option value="WebinarMineria2020, Webinar Cómo habilitar la eficiencia operacional en procesos mineros con ArcGIS">
                            Webinar Cómo habilitar la eficiencia operacional en procesos mineros con ArcGIS
                          </option>
                          <option value="WebinarCovid2020, Webinar Solución de continuidad del negocio durante  el COVID-19">
                            Webinar Solución de continuidad del negocio durante
                            el COVID-19{" "}
                          </option>
                          <option value="CCU2019, CCU 2019">CCU 2019</option>
                          <option value="CRU2018, CRU 2018">CRU 2018</option>
                          <option value="CCU2018_Asistentes, CCU 2018">CCU 2018</option>
                          <option value="CRU2019Buc,  CRU 2019 Bucaramanga">
                            CRU 2019 Bucaramanga
                          </option>
                          <option value="CRU2019Cali, CRU 2019 Cali">CRU 2019 Cali</option>
                          <option value="CRU2019Barr, CRU 2019 Barranquilla">
                            CRU 2019 Barranquilla
                          </option>
                          <option value="EventoCucuta, Evento Cucuta 2019">
                            Evento Cucuta 2019
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group left">
                    <label className="control-label col-sm-2" for="Correo">
                      Correo*
                    </label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            @
                          </span>
                        </div>
                        <input
                          type="email"
                          ref={this.Email}
                          className="input2 form-control"
                          name="Correo"
                          id="Correo"
                          placeholder="Correo usado para inscribirse al evento"
                          aria-describedby="basic-addon1"
                          required
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-group ">
                  <br></br>
                  <div className="lado">
                      <button type="submit" className="Enviar" id="Enviar">
                        Consultar
                      </button>
                      </div>
                  </div>
                </form>
          </div>
          <br />
          <br />
          <footer className="footer">
            <div className="container">
              <p className="text-muted credit">Powered by <a target="_blank"
                href="http://desarrolladores.esri.co">GeoGeeks</a>.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
export default DASH;
