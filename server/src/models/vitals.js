const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
const Patient = require('./Patient'); // Import the Patient model if not already imported

const Vital = sequelize.define('Vital', {
  VitalID: {
    type: DataTypes.STRING(36),
    primaryKey: true,
  },
  BloodPressure: {
    type: DataTypes.STRING(20),
  },
  HeartRate: {
    type: DataTypes.INTEGER,
  },
  RespiratoryRate: {
    type: DataTypes.INTEGER,
  },
  Temperature: {
    type: DataTypes.FLOAT,
  },
  OxygenSaturation: {
    type: DataTypes.FLOAT,
  },
  VisitID: {
    type: DataTypes.STRING(36),
    references: {
      model: VisitAppointment,
      key: 'VisitID',
    },
  },
  PatientID: {
    type: DataTypes.STRING(36),
    references: {
      model: Patient,
      key: 'PatientID',
    },
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

module.exports = Vital;
