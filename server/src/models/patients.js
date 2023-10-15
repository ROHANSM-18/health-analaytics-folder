const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
const Doctor = require('./Doctor'); // Import the Doctor model if not already imported

const Patient = sequelize.define('Patient', {
  PatientID: {
    type: DataTypes.STRING(36),
    primaryKey: true,
  },
  FirstName: {
    type: DataTypes.STRING(255),
  },
  LastName: {
    type: DataTypes.STRING(255),
  },
  DateOfBirth: {
    type: DataTypes.DATE,
  },
  Gender: {
    type: DataTypes.STRING(10),
  },
  ContactInformation: {
    type: DataTypes.TEXT,
  },
  DoctorID: {
    type: DataTypes.STRING(36),
    references: {
      model: Doctor,
      key: 'DoctorID',
    },
  },
}, {
  timestamps: false,
});

module.exports = Patient;
