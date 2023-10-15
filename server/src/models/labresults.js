const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
const Patient = require('./Patient'); // Import the Patient model if not already imported
const Doctor = require('./Doctor'); // Import the Doctor model if not already imported
const VisitAppointment = require('./VisitAppointment'); // Import the VisitAppointment model if not already imported

const LabResult = sequelize.define('LabResult', {
  ResultID: {
    type: DataTypes.STRING(36),
    primaryKey: true,
  },
  TestName: {
    type: DataTypes.STRING(255),
  },
  TestDate: {
    type: DataTypes.DATE,
  },
  TestResults: {
    type: DataTypes.TEXT,
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

module.exports = LabResult;
