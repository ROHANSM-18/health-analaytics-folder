const { gql } = require('apollo-server');

const typeDefs = gql`
  type Doctor {
    DoctorID: String
    FirstName: String
    LastName: String
    DateOfBirth: Date
    Gender: String
    ContactInformation: String
  }
`;

module.exports = typeDefs;
