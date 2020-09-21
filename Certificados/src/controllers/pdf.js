
var PDFDocument = require('pdfkit');
const fs = require("fs");

// traemos los datos de la tabla 
const getUsersPdf = async (req, res,db) => {
    var id = req.body.id;
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var empresa = req.body.empresa;
    var email = req.body.email;
    

    var pdf = new PDFDocument({
        layout: 'landscape',
        size: [619, 810,],
        margin: 5,
        info: {
            Title: 'Certificado',
            Author: 'Esri',
        }
    })
    pdf.pipe(res)
//contenido del pdf 
            //imagen
            pdf.moveDown()
                        .image('./src/img/certCCU.png', 0, 5, { width: 808 })

            //texto
            pdf.moveDown()
            .fillColor('black')

            .font('Times-Roman')
            .fontSize(20)
            .text(' ' + id, 87, 160, {
                align: 'center',
                width: 600,
                indent: 30,
                height: 200,
                ellipsis: true
            });
            pdf.moveDown()
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(20)
                .text('' + nombre + ' ' + apellido, {
                    align: 'center',
                    width: 600,
                    indent: 30,
                    height: 200,
                    ellipsis: true
                });
               

           
            pdf.moveDown()
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(20)
                .text(' ' + empresa, {
                    align: 'center',
                    width: 600,
                    indent: 30,
                    height: 200,
                    ellipsis: true
                });
            pdf.moveDown()
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(20)
                .text(' ' + email, {
                    align: 'center',
                    width: 600,
                    indent: 30,
                    height: 200,
                    ellipsis: true
                });
                
                pdf.moveDown()
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(11)
                .text('Asistio a ',{
                    align: 'center',
                    width: 600,
                    indent: 30,
                    height: 200,
                    ellipsis: true
                });
                pdf.moveDown()
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(20)
                .text('Evento Cucuta 2019',{
                    align: 'center',
                    width: 600,
                    indent: 30,
                    height: 200,
                    ellipsis: true
                });
                //firma helena 
                pdf.moveDown()
                .image('./src/img/firmahelena.png', 305, 400, { width: 200 })
                pdf.moveDown()
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(11)
                .text(' ' , {
                    align: 'center',
                    width: 600,
                    indent: 30,
                    height: 200,
                    ellipsis: true
                });
                pdf.moveDown()
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(11)
                .text(' Helena Gutiérrez' , {
                    align: 'center',
                    width: 600,
                    indent: 30,
                    height: 200,
                    ellipsis: true
                });
                pdf.moveDown()
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(11)
                .text(' Presidente' , {
                    align: 'center',
                    width: 600,
                    indent: 30,
                    height: 200,
                    ellipsis: true
                });

           // descargar pdf
            pdf.pipe(fs.createWriteStream(__dirname + '../../../Certificado.pdf'));
            console.log('Archivo creado satisfactoriamente ....');

            pdf.end();

};

module.exports = {
    getUsersPdf,

}


