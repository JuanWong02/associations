const Sequelize = require('sequelize').Sequelize;

let sequelize = new Sequelize('students','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('MySQL connection successful.');
    })
    .catch((err) => {
        console.error('MySQL connection error: ',err);
    });


module.exports = {
    sequelize
}

const {Student} = require('./../models/student');
const {Group} = require('./../models/group');
const {Documentation} = require('./../models/documentation');
const {Project} = require('./../models/project');

//Associations

//One-to-one
Student.hasOne(Documentation); // student tiene documentacion

//One-to-many
Group.hasMany(Student);  //el grupo tiene varios estudiantes
Student.belongsTo(Group); //el estudiante pertenece al grupo

//Many-to-many
Student.belongsToMany(Project, {through: 'StudentProject'});
Project.belongsToMany(Student, {through: 'StudentProject'});

sequelize.sync();

//sequelize.sync();

// manejar promesas forma mas comoda
(async () => {
   // await Group.create({name: '4to'}); // esperar a que se ejecute (await)

    //Query existing Group    //lo consulta y lo guarda en variable
  //let group4 = await Group.findOne({
  //      where: {
  //          name: '4to'
  //      }
  // });
  //  print a group
  // console.log(JSON.stringify(group4)); //transformar objeto en texto para poder imprimir


    //Create Students

   // let group4 = await Group.findOne({
     //   where: {
       //     name: '4to'
        //}
    //});

    //let pedro = await Student.create({name: 'Pedro'});
    //let cubano = await Student.create({name: 'Cubano'});
    //let juan = await Student.create({name: 'Juan'});
    //let erick = await Student.create({name: 'Erick'});
    //let jessy = await Student.create({name: 'Jessy'});
    //let benji = await Student.create({name: 'Benji'});

    //group4.setStudents([pedro, cubano, juan, erick, jessy, benji]);
    //await group4.save();

   
    //Query Students of Group

  //  let group4 = await Group.findOne({
  //      where: {
   //         name: '4to'
  //      }
 //   });

  //  let studentsOf4to = await group4.getStudents();

    //4thGradeStudentNames
  //  let nameOfStudentsOf4to = studentsOf4to.map(s => s.name);

  //  console.log(nameOfStudentsOf4to);
    
  //update student name
 // let benji = await Student.findOne({
 //     where: {
 //         name: 'benji'
 //     }
 // });
 // benji.name = 'Benji';
 // await benji.save();

//Delete Student

//let erick = await Student.findOne({
//  where: {
//    name: 'Erick'
//  }
//})
//await erick.destroy();


//Create and "link" one-to-one

//let benji = await Student.findOne({
 // where: {
  //    name: 'benji'
//  }
//});

//let benjisDocumentation = await Documentation.create({
 // name: 'Benji Documentation'
//});

//benji.setDocumentation(benjisDocumentation);
//await benji.save();

//Create and assign a Project

let pr1 = await Project.create({
  name: 'Proyecto Parcial 1'

});
let pr2 = await Project.create({
  name: 'Proyecto Parcial 2'

});
let benji = await Student.findOne({
  where: {
      name: 'Benji'
  }
});

let pedro = await Student.findOne({
  where: {
      name: 'Pedro'
  }
});

pr1.setStudents([benji, pedro]);

})();

