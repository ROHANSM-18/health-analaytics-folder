const { gql } = require('apollo-server');

const typeDefs = gql`
  type MedicalHistory {
    MedicalHistoryID: String
    Conditions: String
    Surgeries: String
    Allergies: String
    Medications: String
    Patient: Patient
  }
`;

module.exports = typeDefs;
