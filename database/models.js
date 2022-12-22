const mongoose = require("mongoose");
const { Schema } = mongoose;

// issue schema
const IssueSchema = new Schema({
    issue_title: { type: String, required: true },
    issue_text: { type: String, required: true },
    created_on: Date,
    updated_on: Date,
    created_by: { type: String, required: true },
    assigned_to: String,
    open: { type: Boolean, default: true },
    status_text: String,
});
// issue model
const Issue = mongoose.model("Issue", IssueSchema);

// project schema
const ProjectSchema = new Schema({
    name: { type: String, required: true },
    issues: [IssueSchema],
});
// project model
const Project = mongoose.model("Project", ProjectSchema);


// export models
exports.Issue = Issue;
exports.Project = Project;
