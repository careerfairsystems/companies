'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Company Schema
 */
var CompanySchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Company name',
    trim: true
  },
  address: {
    type: String,
    default: '',
    trim: true
  },
  contact: {
    name: { type: String, default: '', trim: true },
    email: { type: String, default: '', trim: true },
    telephone: { type: String, default: '', trim: true },
    information: { type: String, default: '', trim: true }
  },
  invoice: {
    address: { type: String, default: '', trim: true },
    telephone: { type: String, default: '', trim: true },
    organisationnumber: { type: String, default: '', trim: true },
    email: { type: String, default: '', trim: true }
  },
  fair_info: {
    description: { type: String, default: '', trim: true },
    funfacts: { type: String, default: '', trim: true },
    facebook: { type: String, default: '', trim: true },
    twitter: { type: String, default: '', trim: true },
    youtube: { type: String, default: '', trim: true },
    linkedin: { type: String, default: '', trim: true },
    email: { type: String, default: '', trim: true },
    web: { type: String, default: '', trim: true },
    map: { type: String, default: '', trim: true },
    banner: { type: String, default: '', trim: true },
    employees_global: { type: Number, default: 0 },
    employees_sweden: { type: Number, default: 0 },
    offers: [{ type: String, enum: ['Sommarjobb', 'Exjobb'] }],
    sections: [{ type: String, enum: ['F', 'A', 'D', 'E', 'M', 'K', 'I'] }],
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Company', CompanySchema);
