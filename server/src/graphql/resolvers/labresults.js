const { LabResult, Patient, Doctor, VisitAppointment } = require('../database');

const getLabResultsByPatientID = async (_, { PatientID }) => {
  try {
    const labResults = await LabResult.findAll({
      where: { PatientID },
      include: [
        {
          model: Patient,
        },
        {
          model: Doctor,
        },
        {
          model: VisitAppointment,
        },
      ],
    });
    return labResults;
  } catch (error) {
    throw new Error(`Failed to fetch lab results: ${error.message}`);
  }
};

module.exports = getLabResultsByPatientID;
