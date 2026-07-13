// src/data/jobConstants.js
// Mirrors jobs/constants.py — value/label pairs the backend's choices fields accept.

export const WORK_AUTH_CHOICES = [
  ["citizen", "Citizen of country applying from"],
  ["permanent_resident", "Permanent resident / holds equivalent right to work"],
  ["visa_holder", "Currently holds a valid work visa"],
  ["needs_sponsorship", "Will require visa sponsorship"],
  ["other", "Other"],
];

export const NOTICE_PERIOD_CHOICES = [
  ["immediate", "Immediately available"],
  ["1_week", "1 week"],
  ["2_weeks", "2 weeks"],
  ["1_month", "1 month"],
  ["2_months", "2 months"],
  ["3_months_plus", "3+ months"],
];

export const REMOTE_PREFERENCE_CHOICES = [
  ["remote", "Remote"],
  ["hybrid", "Hybrid"],
  ["onsite", "On-site"],
  ["no_preference", "No preference"],
];

export const GENDER_CHOICES = [
  ["female", "Female"],
  ["male", "Male"],
  ["non_binary", "Non-binary"],
  ["self_describe", "Prefer to self-describe"],
  ["prefer_not_to_say", "Prefer not to say"],
];

export const VETERAN_STATUS_CHOICES = [
  ["veteran", "Yes, I am a veteran / have served"],
  ["not_veteran", "No"],
  ["prefer_not_to_say", "Prefer not to say"],
];

export const DISABILITY_STATUS_CHOICES = [
  ["yes", "Yes, I have a disability (or have had one)"],
  ["no", "No"],
  ["prefer_not_to_say", "Prefer not to say"],
];

export const DEPARTMENT_CHOICES = [
  ["engineering", "Engineering"],
  ["data", "Data & Analytics"],
  ["ai_ml", "AI & Machine Learning"],
  ["sales", "Sales"],
  ["marketing", "Marketing"],
  ["customer_success", "Customer Success"],
  ["operations", "Operations"],
  ["finance", "Finance"],
  ["hr", "People & HR"],
  ["other", "Other"],
];

export const JOB_TYPE_CHOICES = [
  ["full_time", "Full-time"],
  ["part_time", "Part-time"],
  ["contract", "Contract"],
  ["internship", "Internship"],
  ["freelance", "Freelance"],
];

export const LOCATION_TYPE_CHOICES = [
  ["remote", "Remote"],
  ["onsite", "On-site"],
  ["hybrid", "Hybrid"],
];
