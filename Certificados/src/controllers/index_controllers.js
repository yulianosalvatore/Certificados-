const {pool}= require('../db');



//traemos los datos de la tabla 
const getUsers = async (req, res)=>{
   const response = await pool.query('select * from semillero."EventoCucuta"');
   res.status(200).json(response.rows);
};

// traemos los datos de la tabla por el id 
const getUsersById = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query('select * from semillero."EventoCucuta" WHERE id= $1',[id]);
    res.json(response.rows)
    
 };

//insertamos datos a la tabla 
const createUser = async (req, res)=>{
     const {id, nombre, apellido, empresa, asistencia, email} = req.body;
     const response = await pool.query('insert into semillero."EventoCucuta" (id, nombre, apellido, empresa, asistencia, email) values ($1,$2,$3,$4,$5,$6)',[id, nombre, apellido, empresa, asistencia, email]);
    console.log(response);
     res.json({
         message:'Usuario registrado  ',
         body:{
             user:{ id, nombre, apellido, empresa, asistencia, email}
         }
     })
    
 };

 //actualizar dato por id 
 const updateUser = async (req, res)=>{
    const id = req.params.id;
    const { nombre, apellido, empresa, asistencia, email} = req.body;
    const response = await pool.query('UPDATE semillero."EventoCucuta"  set  nombre = $1, apellido = $2, empresa = $3, asistencia = $4, email = $5  WHERE id = $6 ',[nombre, apellido, empresa, asistencia, email,id]);
    console.log(response);
    res.json('Usuario actualizado');
 };
//eliminmos  dato por el id 
 const deleteUser = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE from semillero."EventoCucuta" WHERE id= $1',[id]);
    console.log(response);
    res.json('Usuario eliminado ');
 };

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
}