const { gql } = require('apollo-server');

const typeDefs = gql`
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
`;

module.exports = typeDefs;
