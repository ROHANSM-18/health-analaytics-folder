const { Doctor } = require('../database');

const getAllDoctors = async () => {
  try {
    const doctors = await Doctor.findAll();
    return doctors;
  } catch (error) {
    throw new Error(`Failed to fetch doctors: ${error.message}`);
  }
};

module.exports = getAllDoctors
