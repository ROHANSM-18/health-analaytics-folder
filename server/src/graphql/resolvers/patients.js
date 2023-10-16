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


const Doctor = require('../../models/doctors')
const Patient = require('../../models/patients')


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

module.exports = {
  Query: {
    getAllPatients,
  },
};

