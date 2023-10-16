const { gql } = require('apollo-server');
const DoctorTypeDef = require('./schemas/doctorschema');
const PatientTypeDef = require('./schemas/patientschema');
const MedicalHistoryTypeDef = require('./schemas/medicalhistorieschema');
const VisitAppointmentTypeDef = require('./schemas/appointmentschema');
const LabResultTypeDef = require('./schemas/labresultschema');
const VitalTypeDef = require('./schemas/vitalschema');


const typeDefs = gql`
  scalar Date
  scalar Time
  scalar DateTime

  ${DoctorTypeDef}
  ${PatientTypeDef}
  ${MedicalHistoryTypeDef}
  ${VisitAppointmentTypeDef}
  ${LabResultTypeDef}
  ${VitalTypeDef}

  type Query {
    getAllPatients: [Patient]
    getAllDoctors: [Doctor]
    getMedicalHistoryByPatientID(PatientID: String!): MedicalHistory
    getVisitAppointmentsByPatientID(PatientID: String!): [VisitAppointment]
    getLabResultsByPatientID(PatientID: String!): [LabResult]
    getVitalsByPatientID(PatientID: String!): [Vital]
  }
`;

module.exports = typeDefs;
