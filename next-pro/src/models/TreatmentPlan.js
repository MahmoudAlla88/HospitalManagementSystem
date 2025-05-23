import mongoose from 'mongoose';

const treatmentPlanSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sessions: [{
    title: String,
    description: String,
    scheduledDate: Date,
    completed: { type: Boolean, default: false }
  }]
}, { timestamps: true });

export default mongoose.models.TreatmentPlan || mongoose.model('TreatmentPlan', treatmentPlanSchema);
