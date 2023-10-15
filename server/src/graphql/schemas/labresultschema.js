const { gql } = require('apollo-server');

const typeDefs = gql`
  type LabResult {
    ResultID: String
    TestName: String
    TestDate: Date
    TestResults: String
    VisitAppointment: VisitAppointment
    Patient: Patient
    Doctor: Doctor
  }
`;

module.exports = typeDefs;
