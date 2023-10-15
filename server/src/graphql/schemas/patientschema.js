const { gql } = require('apollo-server');

const typeDefs = gql`
  type Patient {
    PatientID: String
    FirstName: String
    LastName: String
    DateOfBirth: Date
    Gender: String
    ContactInformation: String
    Doctor: Doctor # Reference the associated doctor
  }
`;

module.exports = typeDefs;
