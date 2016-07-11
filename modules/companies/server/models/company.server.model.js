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
  fair_info: {
    description: {
      type: String,
      default: '',
      trim: true
    },
    funfacts: {
      type: String,
      default: '',
      trim: true
    },
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
