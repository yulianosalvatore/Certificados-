
//traemos los datos de la tabla 
const getUsers = async (req, res,db)=>{
   db.query('select * from semillero."EventoCucuta"')
   .then((response)=>{
    if (response.rows.length) {
      res.json(response.rows);
    } else {
      res.json({ dataExists: "false" });
    }
  })
  .catch((err) => res.status(400).json({ dbError: "db error" }));
};


//consultar por correo un solo registro
const getData = (req, res, db) => {
  const { email } = req.body;
  const {evento} =req.body;
  // cursos ="EventoCucuta";
  cursos = evento;
  value = [email];
  db.query('select * from semillero."'+cursos+'" where email = $1 and asistencia= '+"'si'", value, ) 
    .then((items) => {
      if (items.rows.length) {
        res.json(items.rows);
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch((err) => res.status(400).json({ dbError: "db error" }));
};

// traemos los datos de la tabla por el id 
const getUsersById = async (req, res,db)=>{
  const { id } = req.body;
    db.query('select * from semillero."EventoCucuta" WHERE id= $1',[id])
    .then((response)=>{
      if (response.rows.length) {
        res.json(response.rows);
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch((err) => res.status(400).json({ dbError: "db error" }));
  };

//insertamos datos a la tabla 
const createUser = async (req, res,db)=>{
     const {id, nombre, apellido, empresa, asistencia, email} = req.body;
     db.query('insert into semillero."EventoCucuta" (id, nombre, apellido, empresa, asistencia, email) values ($1,$2,$3,$4,$5,$6)',[id, nombre, apellido, empresa, asistencia, email])
     .then(()=>{
     res.json({
         message:'Usuario registrado  ',
         body:{
             user:{ id, nombre, apellido, empresa, asistencia, email}
         }
        })
     })
     .catch((err) => res.status(400).json({ dbError: "db error" }));
    
 };

 //actualizar dato por id 
 const updateUser = async (req, res,db)=>{
    const { id, nombre, apellido, empresa, asistencia, email} = req.body;
    db.query('UPDATE semillero."EventoCucuta"  set  nombre = $1, apellido = $2, empresa = $3, asistencia = $4, email = $5  WHERE id = $6 ',[nombre, apellido, empresa, asistencia, email,id])
    .then(()=>{
    res.json('Usuario actualizado');
  })
  .catch((err) => res.status(400).json({ dbError: "db error" }));
 };
//eliminmos  dato por el id 
 const deleteUser = async (req,res,db) =>{
    const id = req.body;
    const response = await db.query('DELETE from semillero."EventoCucuta" WHERE id= $1',[id.id])
    .then(()=>{
    res.json('Usuario eliminado ');
  })
  .catch((err) => res.status(400).json({ dbError: "db error" }));
 };

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    getData
}