const getAllPatients = require('./resolvers/patients');
const getAllDoctors = require('./resolvers/doctors');
const getVisitAppointmentsByPatientID = require('./resolvers/appointments');
const getMedicalHistoryByPatientID = require('./resolvers/medicalhistories');
const getLabResultsByPatientID = require('./resolvers/labresults');
const getVitalsByPatientID = require('./resolvers/vitals');


const resolvers = {
  
  Query: {
    getAllPatients,
    getAllDoctors,
    getVisitAppointmentsByPatientID,
    getMedicalHistoryByPatientID,
    getLabResultsByPatientID,
    getVitalsByPatientID
  },
};

module.exports = resolvers;
