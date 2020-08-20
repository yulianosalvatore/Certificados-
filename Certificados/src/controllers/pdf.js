const { pool } = require('../db');
var PDFDocument = require('pdfkit');
const fs = require("fs");

// traemos los datos de la tabla 
const getUsersPdf = async (req, res) => {
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
                .fontSize(30)
                .text('Nombre: ' + nombre + ' ' + apellido, 85, 220, {
                    align: 'center',
                    width: 600,
                    indent: 30,
                    height: 200,
                    ellipsis: true
                });
            pdf.moveDown()
                .fillColor('black')

                .font('Times-Roman')
                .fontSize(30)
                .text('Cedula: ' + id, {
                    align: 'center',
                    width: 600,
                    indent: 30,
                    height: 200,
                    ellipsis: true
                });

            pdf.moveDown()
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(30)
                .text('Empresa: ' + empresa, {
                    align: 'center',
                    width: 600,
                    indent: 30,
                    height: 200,
                    ellipsis: true
                });
            pdf.moveDown()
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(30)
                .text('Email: ' + email, {
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

//     switch (clase) {
//         case 'certCCU':
//             //contenido del pdf 
//             //imagen
//             pdf.moveDown()
//                 .image('./src/img/certCCU.png', 0, 5, { width: 808 })

//             //texto
//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Nombre: ' + nombre + ' ' + apellido, 85, 200, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });
//             pdf.moveDown()
//                 .fillColor('black')

//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Cedula: ' + id, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });

//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Empresa: ' + empresa, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });
//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Email: ' + email, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });

//             // descargar pdf
//             pdf.pipe(fs.createWriteStream(__dirname + '../../../Certificado.pdf'));
//             console.log('Archivo creado satisfactoriamente ....');

//             pdf.end();
//             break;
//         case 'certCru':
//             //contenido del pdf 
//             //imagen
//             pdf.moveDown()
//                 .image('./src/img/certCru.png', 0, 0, { width: 808 })

//             //texto
//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Nombre: ' + nombre + ' ' + apellido, 85, 200, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });
//             pdf.moveDown()
//                 .fillColor('black')
 
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Cedula: ' + id, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });

//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Empresa: ' + empresa, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });
//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Email: ' + email, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });
//             // descargar pdf
//             pdf.pipe(fs.createWriteStream(__dirname + '../../../Certificado.pdf'));
//             console.log('Archivo creado satisfactoriamente ....');

//             pdf.end();

//             break;
//         case 'CertCRU2019':
//             //contenido del pdf 
//             //imagen
//             pdf.moveDown()
//                 .image('./src/img/CertCRU2019.png', -4, 2, { width: 816 })

//             //texto
//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Nombre: ' + nombre + ' ' + apellido, 85, 200, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });
//             pdf.moveDown()
//                 .fillColor('black')

//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Cedula: ' + id, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });

//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Empresa: ' + empresa, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });
//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Email: ' + email, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });
//             // descargar pdf
//             pdf.pipe(fs.createWriteStream(__dirname + '../../../Certificado.pdf'));
//             console.log('Archivo creado satisfactoriamente ....');

//             pdf.end();

//             break;
//         case 'CertCucuta2019':
//             //contenido del pdf 
//             //imagen
//             pdf.moveDown()
//                 .image('./src/img/CertCucuta2019.png', 0, 0, { width: 808 })

//             //texto
//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Nombre: ' + nombre + ' ' + apellido, 85, 220, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });
//             pdf.moveDown()
//                 .fillColor('black')

//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Cedula: ' + id, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });

//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Empresa: ' + empresa, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });
//             pdf.moveDown()
//                 .fillColor('black')
//                 .font('Times-Roman')
//                 .fontSize(30)
//                 .text('Email: ' + email, {
//                     align: 'center',
//                     width: 600,
//                     indent: 30,
//                     height: 200,
//                     ellipsis: true
//                 });
//            // descargar pdf
//             pdf.pipe(fs.createWriteStream(__dirname + '../../../Certificado.pdf'));
//             console.log('Archivo creado satisfactoriamente ....');

//             pdf.end();
//             break;
//         case 'CertCucuta20194':
//  //contenido del pdf 
//     imagen
//     pdf.moveDown()
//     .image('./src/img/CertCucuta20194.png', 15, 5, {width: 808})

//     //texto
//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(20)
//         .text('Nombre: ' + nombre + ' ' + apellido, 85, 120, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });
//     // pdf.moveDown()
//        //  .fillColor('black')

//        // .font('Times-Roman')
//        // .fontSize(20)
//        // .text('Cedula: ' + id, {
//        //     align: 'center',
//          //   width: 600,
//            // indent: 30,
//            // height: 100,
//            // ellipsis: true
//         //});

//     //pdf.moveDown()
//       //  .fillColor('black')
//         //.font('Times-Roman')
//         //.fontSize(20)
//         //.text('Empresa: ' + empresa, {
//         //    align: 'center',
//          //  width: 600,
//         //    indent: 30,
//            // height: 100,
//           //  ellipsis: true
//        // });
//     // pdf.moveDown()
//      //   .fillColor('black')
//       //  .font('Times-Roman')
//       //  .fontSize(20)
//        // .text('Email: ' + email, {
//          //   align: 'center',
//           //  width: 600,
//          //   indent: 30,
//          //   height: 100,
//          //   ellipsis: true
//        // });
//     // descargar pdf
//     pdf.pipe(fs.createWriteStream(__dirname + '../../../Certificado.pdf'));
//     console.log('Archivo creado satisfactoriamente ....');

//     pdf.end();
//             break;
//         case 'CertCucuta20195':
//       //contenido del pdf 
//      //imagen
//     pdf.moveDown()
//     .image('./src/img/CertCucuta20195.png', 0, 5, {width: 808})
//     //texto
//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(25)
//         .text('Nombre: ' + nombre + ' ' + apellido, 85, 150, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });
//     pdf.moveDown()
//         .fillColor('black')

//         .font('Times-Roman')
//         .fontSize(25)
//         .text('Cedula: ' + id, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });

//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(25)
//         .text('Empresa: ' + empresa, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });
//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(25)
//         .text('Email: ' + email, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });
//     // descargar pdf
//     pdf.pipe(fs.createWriteStream(__dirname + '../../../Certificado.pdf'));
//     console.log('Archivo creado satisfactoriamente ....');

//     pdf.end();
//             break;
//         case 'certificadoCCU2019':

//     //contenido del pdf 
//     //imagen
//     pdf.moveDown()
//     .image('./src/img/certificadoCCU2019.png', 0, 5, {width: 808})
//     //texto
//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(20)
//         .text('Nombre: ' + nombre + ' ' + apellido, 85, 200, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });
//     pdf.moveDown()
//         .fillColor('black')

//         .font('Times-Roman')
//         .fontSize(20)
//         .text('Cedula: ' + id, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });

//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(20)
//         .text('Empresa: ' + empresa, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });
//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(20)
//         .text('Email: ' + email, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });




//     // descargar pdf
//     pdf.pipe(fs.createWriteStream(__dirname + '../../../Certificado.pdf'));
//     console.log('Archivo creado satisfactoriamente ....');

//     pdf.end();
//             break;
//         case 'certPaz':
//     // contenido del pdf 
//     // imagen
//     pdf.moveDown()
//     .image('./src/img/certPaz.png', 0, 0, {width: 814})
//     //texto
//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(30)
//         .text('Nombre: ' + nombre + ' ' + apellido, 85, 200, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });
//     pdf.moveDown()
//         .fillColor('black')

//         .font('Times-Roman')
//         .fontSize(30)
//         .text('Cedula: ' + id, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });

//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(30)
//         .text('Empresa: ' + empresa, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });
//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(30)
//         .text('Email: ' + email, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });

//     // descargar pdf
//     pdf.pipe(fs.createWriteStream(__dirname + '../../../Certificado.pdf'));
//     console.log('Archivo creado satisfactoriamente ....');

//     pdf.end();

//             break;
//         case 'PlantillaCertificadoEsriNOSA2':
//     //contenido del pdf 
//     //imagen
//     pdf.moveDown()
//     .image('./src/img/PlantillaCertificadoEsriNOSA2.png', 0, 30, {width: 809})
//     //texto
//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(20)
//         .text('Nombre: ' + nombre + ' ' + apellido, 85, 180, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });
//     pdf.moveDown()
//         .fillColor('black')

//         .font('Times-Roman')
//         .fontSize(20)
//         .text('Cedula: ' + id, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });

//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(20)
//         .text('Empresa: ' + empresa, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });
//     pdf.moveDown()
//         .fillColor('black')
//         .font('Times-Roman')
//         .fontSize(20)
//         .text('Email: ' + email, {
//             align: 'center',
//             width: 600,
//             indent: 30,
//             height: 200,
//             ellipsis: true
//         });




//     // descargar pdf
//     pdf.pipe(fs.createWriteStream(__dirname + '../../../Certificado.pdf'));
//     console.log('Archivo creado satisfactoriamente ....');

//     pdf.end();
//             break;

//         default:
//             throw new Exception("No existe la opcion ingresada");
//             break;
//     }


};

module.exports = {
    getUsersPdf,

}


