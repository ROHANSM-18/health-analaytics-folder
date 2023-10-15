const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
const Patient = require('./Patient'); // Import the Patient model if not already imported
const Doctor = require('./Doctor'); // Import the Doctor model if not already imported

const VisitAppointment = sequelize.define('VisitAppointment', {
  VisitID: {
    type: DataTypes.STRING(36),
    primaryKey: true,
  },
  DateAndTime: {
    type: DataTypes.DATE,
  },
  Provider: {
    type: DataTypes.STRING(255),
  },
  ReasonForVisit: {
    type: DataTypes.TEXT,
  },
  Diagnosis: {
    type: DataTypes.TEXT,
  },
  Prescriptions: {
    type: DataTypes.TEXT,
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

module.exports = VisitAppointment;
