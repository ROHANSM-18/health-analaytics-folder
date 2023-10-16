// //const { Doctor } = require('../database');
// const { Doctor } = require('../../models/doctors');

// const getAllDoctors = async () => {
//   try {
//     const doctors = await Doctor.findAll();
//     console.log('Fetched doctors:', doctors);
//     return doctors;
//   } catch (error) {
//     throw new Error(`Failed to fetch doctors: ${error.message}`);
//   }
// };




const { Doctor } = require('../../models/doctors');

const getAllDoctors = async () => {
  console.log('Resolver called'); 
  try {
    const doctors = await Doctor.findAll();
    console.log('Fetched doctors:', doctors);
    return doctors;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw new Error(`Failed to fetch doctors: ${error.message}`);
  }
};

module.exports = {
  Query: {
    getAllDoctors,
  },
};
