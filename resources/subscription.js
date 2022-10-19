/*
Paystack API - Subscription
*/

const route = "/subscription";
const roots = '/subscription/{code}';


module.exports = {
  /*
  Create Subscription
  */
  create: {
    method: "post",
    route: route,
    params: ["customer*", "plan*", "authorization*"] // ...
  },

  /*
  List Subscriptions
  */
  list: {
    method: "get",
    route: route,
    args: ["perPage", "page"]
  },

  /*
  Disable Subscription
  */
  disable: {
    method: "post",
    route: `${route}/disable`,
    params: ["code*", "token*"]
  },

  /*
  Enable Subscription
  */
  enable: {
    method: "post",
    route: `${route}/enable`,
    params: ["code*", "token*"]
  },

  /*
  Get Subscription
  */
  get: {
    method: "get",
    route: `${route}/{subscription_code}`,
  },

    /*
    Update subscription
    */
    update: {
      method: 'get',
     // endpoint:[root, '/manage/link'].join(''),
      route: `${route}/{subscription_code}/manage/link`,
    //  params: ['code*','id_or_subscription_code'],
      params: ["subscription_code"],
      }
};
