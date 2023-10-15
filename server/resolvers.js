const { Doctor, Patient, VisitAppointment, LabResult, Vital, MedicalHistory } = require('./database');  
const { format, isValid, parseISO } = require('date-fns');

const resolvers = {
  Query: {
        getAllPatients: async () => {
          try {
            const patients = await Patient.findAll({
              include: Doctor, // Include the associated Doctor
            });
            return patients;
          } catch (error) {
            throw new Error(`Failed to fetch patients: ${error.message}`);
          }
        },
        
        
    getAllDoctors: async () => {
      try {
        const doctors = await Doctor.findAll();
        return doctors;
      } catch (error) {
        throw new Error(`Failed to fetch doctors: ${error.message}`);
      }
     },
    
    getVisitAppointmentsByPatientID: async (_, { PatientID }) => {
      try {
        const visitAppointments = await VisitAppointment.findAll({
          where: { PatientID },
          include: [
            {
              model: Patient,
            },
            {
              model: Doctor,
            },
            {
              model: LabResult,
            },
            {
              model: Vital,
            },
          ],
        });
        return visitAppointments;
      } catch (error) {
        throw new Error(`Failed to fetch visit appointments: ${error.message}`);
      }
    },
    
    getMedicalHistoryByPatientID: async (_, { PatientID }) => {
      try {
        const medicalHistory = await MedicalHistory.findOne({
          where: { PatientID },
          include: [
            {
              model: Patient,
            },
          ],
        });
        return medicalHistory;
      } catch (error) {
        throw new Error(`Failed to fetch medical history: ${error.message}`);
      }
    },
    

    getLabResultsByPatientID: async (_, { PatientID }) => {
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
    },

  

    getVitalsByPatientID: async (_, { PatientID }) => {
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
    },
    
    
  },
};

module.exports = resolvers;