'use strict';

const root = '/customer';

module.exports = {

  /*
  Create customer
  @param: first_name, last_name, email, phone
  */
  create: {
      method: 'post',
      endpoint: root,
      params: ['first_name', 'last_name', 'email*', 'phone']
    },

  /*
  Get customer by their email
  */
  get: {
      method: 'get',
      endpoint: [root, '/{email}}'].join(''),
      args: ['email']
  },

  /*
  List customers
  */
  list: {
      method: 'get',
      endpoint: root
    },

  /*
  Update customer
  @param: first_name, last_name, email, phone
  */
  update: {
      method: 'put',
      endpoint: [root, '/{id}'].join(''),
      params: ['first_name', 'last_name', 'email', 'phone'],
      args: ['id']
    },

  /*
  White/Blacklist customer
  @param: customer, risk_action ('allow' to whitelist or 'deny' to blacklist)
  */
  setRiskAction: {
    method: 'post',
    endpoint: [root, '/set_risk_action'].join(''),
    params: ['customer*', 'risk_action']
  }
};
