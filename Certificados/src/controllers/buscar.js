const {pool}= require('../db');

// haceos el filtro de asisitencia por mendio del cooreo y la tabla 
const getAsis = async (req, res)=>{
    const correo = req.params.correo;
    const response = await pool.query('select "asistencia" from semillero."EventoCucuta" WHERE email= $1',[correo]);
    res.status(200).json(response.rows);

    if (response ==si) {
        alert('incluir formulario imprimir ')
    }else{
          alert('El usuario se registro pero no asistio al curso ')
    }
    
 };
 


 module.exports = {
     getAsis
  }