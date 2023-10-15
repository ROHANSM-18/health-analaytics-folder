
const Doctor = require('./Doctor');
const Patient = require('./Patient');
const MedicalHistory = require('./MedicalHistory');
const VisitAppointment = require('./VisitAppointment');
const LabResult = require('./LabResult');
const Vital = require('./Vital');

Doctor.hasMany(Patient, { foreignKey: 'DoctorID' }); // A doctor can have many patients

Patient.belongsTo(Doctor, { foreignKey: 'DoctorID' }); // A patient belongs to a doctor

Patient.hasOne(MedicalHistory, { foreignKey: 'PatientID' }); // One-to-One with MedicalHistory
Patient.hasMany(VisitAppointment, { foreignKey: 'PatientID' }); // One-to-Many with VisitAppointment
Patient.hasMany(LabResult, { foreignKey: 'PatientID' }); // One-to-Many with LabResult
Patient.hasMany(Vital, { foreignKey: 'PatientID' }); // One-to-Many with Vital


LabResult.belongsTo(VisitAppointment, { foreignKey: 'VisitID' });
LabResult.belongsTo(Patient, { foreignKey: 'PatientID' });
LabResult.belongsTo(Doctor, { foreignKey: 'DoctorID' });

MedicalHistory.belongsTo(Patient, { foreignKey: 'PatientID' });

VisitAppointment.belongsTo(Patient, { foreignKey: 'PatientID' });
VisitAppointment.belongsTo(Doctor, { foreignKey: 'DoctorID' });
VisitAppointment.hasMany(LabResult, { foreignKey: 'VisitID' });
VisitAppointment.hasOne(Vital, { foreignKey: 'VisitID' });

Vital.belongsTo(VisitAppointment, { foreignKey: 'VisitID'});
Vital.belongsTo(Patient, { foreignKey: 'PatientID'});
Vital.belongsTo(Doctor, { foreignKey: 'DoctorID'});

module.exports = {
  Doctor,
  Patient,
  MedicalHistory,
  VisitAppointment,
  LabResult,
  Vital,
};

