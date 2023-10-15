const { gql } = require('apollo-server');

const typeDefs = gql`
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
`;

module.exports = typeDefs;
