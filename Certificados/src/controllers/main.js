//Consultar todos los registrados
const getTableData = (req, res, db) => {
  // const {email} = req.body

  db.query('select * from semillero."EventoCucuta"')
    .then((items) => {
      if (items.rows.length) {
        res.json(items.rows);
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
  db.query('select * from semillero."'+cursos+'" where email = $1', value)
    .then((items) => {
      if (items.rows.length) {
        res.json(items.rows);
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch((err) => res.status(400).json({ dbError: "db error" }));
};

//Cruds que vienen en el ejemplo aun no probadas

const postTableData = (req, res, db) => {
  const { Nombre, apellido, empresa, asistencia, email } = req.body;
  db('semillero."EventoCucuta"')
    .insert({ Nombre, apellido, empresa, asistencia, email })
    .returning("*")
    .then((item) => {
      res.json(item);
    })
    .catch((err) => res.status(400).json({ dbError: "db error" }));
};

const putTableData = (req, res, db) => {
  const { id, Nombre, apellido, empresa, asistencia, email } = req.body;
  db('semillero."EventoCucuta"')
    .where({ id })
    .update({ Nombre, apellido, empresa, asistencia, email })
    .returning("*")
    .then((item) => {
      res.json(item);
    })
    .catch((err) => res.status(400).json({ dbError: "db error" }));
};

const deleteTableData = (req, res, db) => {
  const { id } = req.body;
  db('semillero."EventoCucuta"')
    .where({ id })
    .del()
    .then(() => {
      res.json({ delete: "true" });
    })
    .catch((err) => res.status(400).json({ dbError: "db error" }));
};

module.exports = {
  getTableData,
  getData,
  postTableData,
  putTableData,
  deleteTableData,
};
