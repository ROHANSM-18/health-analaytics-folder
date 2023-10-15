const { gql } = require('apollo-server');

const { GraphQLDate, GraphQLTime, GraphQLDateTime } = require('graphql-scalars');

const typeDefs = gql`
  scalar Date
  scalar Time
  scalar DateTime

  type Patient {
    PatientID: String
    FirstName: String
    LastName: String
    DateOfBirth: Date
    Gender: String
    ContactInformation: String
    Doctor: Doctor # Reference the associated doctor
    
  }

  type Doctor {
    DoctorID: String
    FirstName: String
    LastName: String
    DateOfBirth: Date
    Gender: String
    ContactInformation: String
  }

  type MedicalHistory {
    MedicalHistoryID: String
    Conditions: String
    Surgeries: String
    Allergies: String
    Medications: String
    Patient: Patient
  }

  type VisitAppointment {
    VisitID: String
    DateAndTime: DateTime
    Provider: String
    ReasonForVisit: String
    Diagnosis: String
    Prescriptions: String
    Patient: Patient
    Doctor: Doctor
    LabResults: [LabResult]
    Vitals: [Vital]
  }

  type LabResult {
    ResultID: String
    TestName: String
    TestDate: Date
    TestResults: String
    VisitAppointment: VisitAppointment
    Patient: Patient
    Doctor: Doctor
  }

  type Vital {
    VitalID: String
    BloodPressure: String
    HeartRate: Int
    RespiratoryRate: Int
    Temperature: Float
    OxygenSaturation: Float
    VisitAppointment: VisitAppointment
    Patient: Patient
    Doctor: Doctor
  }

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