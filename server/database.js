// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('medicaldb', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// sequelize.sync().then(() => {
//   console.log('Database synchronized.');
// }).catch((error) => {
//   console.error('Database synchronization error:', error);
// });

// const Doctor = sequelize.define('Doctor', {
//   DoctorID: {
//     type: DataTypes.STRING(36),
//     primaryKey: true,
//   },
//   FirstName: {
//     type: DataTypes.STRING(255),
//   },
//   LastName: {
//     type: DataTypes.STRING(255),
//   },
//   DateOfBirth: {
//     type: DataTypes.DATE,
//   },
//   Gender: {
//     type: DataTypes.STRING(10),
//   },
//   ContactInformation: {
//     type: DataTypes.TEXT,
//   },
  
// }, {
//   timestamps: false,
// });

// const Patient = sequelize.define('Patient', {
//   PatientID: {
//     type: DataTypes.STRING(36),
//     primaryKey: true,
//   },
//   FirstName: {
//     type: DataTypes.STRING(255),
//   },
//   LastName: {
//     type: DataTypes.STRING(255),
//   },
//   DateOfBirth: {
//     type: DataTypes.DATE,
//   },
//   Gender: {
//     type: DataTypes.STRING(10),
//   },
//   ContactInformation: {
//     type: DataTypes.TEXT,
//   },
//   DoctorID: {
//     type: DataTypes.STRING(36),
//     references: {
//       model: Doctor,
//       key: 'DoctorID',
//     },
//   },
// }, {
//   timestamps: false,
// });

// const MedicalHistory = sequelize.define('MedicalHistory', {
//   MedicalHistoryID: {
//     type: DataTypes.STRING(36),
//     primaryKey: true,
//   },
//   Conditions: {
//     type: DataTypes.TEXT,
//   },
//   Surgeries: {
//     type: DataTypes.TEXT,
//   },
//   Allergies: {
//     type: DataTypes.TEXT,
//   },
//   Medications: {
//     type: DataTypes.TEXT,
//   },
//   PatientID: {
//     type: DataTypes.STRING(36),
//     references: {
//       model: Patient,
//       key: 'PatientID',
//     },
//   },
// }, {
//   timestamps: false,
// });

// const VisitAppointment = sequelize.define('VisitAppointment', {
//   VisitID: {
//     type: DataTypes.STRING(36),
//     primaryKey: true,
//   },
//   DateAndTime: {
//     type: DataTypes.DATE,
//   },
//   Provider: {
//     type: DataTypes.STRING(255),
//   },
//   ReasonForVisit: {
//     type: DataTypes.TEXT,
//   },
//   Diagnosis: {
//     type: DataTypes.TEXT,
//   },
//   Prescriptions: {
//     type: DataTypes.TEXT,
//   },
//   PatientID: {
//     type: DataTypes.STRING(36),
//     references: {
//       model: Patient,
//       key: 'PatientID',
//     },
//   },
//   DoctorID: {
//     type: DataTypes.STRING(36),
//     references: {
//       model: Doctor,
//       key: 'DoctorID',
//     },
//   },
// }, {
//   timestamps: false,
// });

// const LabResult = sequelize.define('LabResult', {
//   ResultID: {
//     type: DataTypes.STRING(36),
//     primaryKey: true,
//   },
//   TestName: {
//     type: DataTypes.STRING(255),
//   },
//   TestDate: {
//     type: DataTypes.DATE,
//   },
//   TestResults: {
//     type: DataTypes.TEXT,
//   },
//   VisitID: {
//     type: DataTypes.STRING(36),
//     references: {
//       model: VisitAppointment,
//       key: 'VisitID',
//     },
//   },
//   PatientID: {
//     type: DataTypes.STRING(36),
//     references: {
//       model: Patient,
//       key: 'PatientID',
//     },
//   },
//   DoctorID: {
//     type: DataTypes.STRING(36),
//     references: {
//       model: Doctor,
//       key: 'DoctorID',
//     },
//   },
// }, {
//   timestamps: false,
// });

// const Vital = sequelize.define('Vital', {
//   VitalID: {
//     type: DataTypes.STRING(36),
//     primaryKey: true,
//   },
//   BloodPressure: {
//     type: DataTypes.STRING(20),
//   },
//   HeartRate: {
//     type: DataTypes.INTEGER,
//   },
//   RespiratoryRate: {
//     type: DataTypes.INTEGER,
//   },
//   Temperature: {
//     type: DataTypes.FLOAT,
//   },
//   OxygenSaturation: {
//     type: DataTypes.FLOAT,
//   },
//   VisitID: {
//     type: DataTypes.STRING(36),
//     references: {
//       model: VisitAppointment,
//       key: 'VisitID',
//     },
//   },
//   PatientID: {
//     type: DataTypes.STRING(36),
//     references: {
//       model: Patient,
//       key: 'PatientID',
//     },
//   },
//   DoctorID: {
//     type: DataTypes.STRING(36),
//     references: {
//       model: Doctor,
//       key: 'DoctorID',
//     },
//   },
// }, {
//   timestamps: false,
// });

// Doctor.hasMany(Patient, { foreignKey: 'DoctorID' }); // A doctor can have many patients

// Patient.belongsTo(Doctor, { foreignKey: 'DoctorID' }); // A patient belongs to a doctor

// Patient.hasOne(MedicalHistory, { foreignKey: 'PatientID' }); // One-to-One with MedicalHistory
// Patient.hasMany(VisitAppointment, { foreignKey: 'PatientID' }); // One-to-Many with VisitAppointment
// Patient.hasMany(LabResult, { foreignKey: 'PatientID' }); // One-to-Many with LabResult
// Patient.hasMany(Vital, { foreignKey: 'PatientID' }); // One-to-Many with Vital


// LabResult.belongsTo(VisitAppointment, { foreignKey: 'VisitID' });
// LabResult.belongsTo(Patient, { foreignKey: 'PatientID' });
// LabResult.belongsTo(Doctor, { foreignKey: 'DoctorID' });

// MedicalHistory.belongsTo(Patient, { foreignKey: 'PatientID' });

// VisitAppointment.belongsTo(Patient, { foreignKey: 'PatientID' });
// VisitAppointment.belongsTo(Doctor, { foreignKey: 'DoctorID' });
// VisitAppointment.hasMany(LabResult, { foreignKey: 'VisitID' });
// VisitAppointment.hasOne(Vital, { foreignKey: 'VisitID' });

// Vital.belongsTo(VisitAppointment, { foreignKey: 'VisitID'});
// Vital.belongsTo(Patient, { foreignKey: 'PatientID'});
// Vital.belongsTo(Doctor, { foreignKey: 'DoctorID'});


// module.exports = {
//   sequelize,
//   Doctor,
//   Patient,
//   MedicalHistory,
//   VisitAppointment,
//   LabResult,
//   Vital,
// };