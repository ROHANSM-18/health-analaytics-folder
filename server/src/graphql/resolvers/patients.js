// const {  Patient } = require('./database');  
// const { format, isValid, parseISO } = require('date-fns');

// const resolvers = {
//   Query: {
//         getAllPatients: async () => {
//           try {
//             const patients = await Patient.findAll({
//               include: Doctor,
//             });
//             return patients;
//           } catch (error) {
//             throw new Error(`Failed to fetch patients: ${error.message}`);
//           }
//         }
//     }
// }
// module.exports = resolvers;


const { Patient, Doctor } = require('../database');

const getAllPatients = async () => {
  try {
    const patients = await Patient.findAll({
      include: Doctor, 
    });
    return patients;
    } catch (error) {
    throw new Error(`Failed to fetch patients: ${error.message}`);
  }
};

module.exports = getAllPatients;

