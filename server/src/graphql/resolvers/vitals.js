const { Vital , Patient , Doctor, VisitAppointment } = require('../database');

const getVitalsByPatientID = async (_, { PatientID }) => {
  try {
    const vitals = await Vital.findAll({
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
    return vitals;
  } catch (error) {
    throw new Error(`Failed to fetch vitals: ${error.message}`);
  }
};

module.exports = getVitalsByPatientID;
