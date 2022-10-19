
# Paystack NODEJS 

This is a library for easy integration of Paystack with your Nodejs backend. This packages eliminates a lot of issues pertanining to making calls to Paystack endpoints.

## Requirements

1. Within your Config file inside your .env file create the following key:

`BEARER_SECRET_KEY=sk_test_20a4725e39fsssss9727292209w8w98w8ww3ba5d58`




## Installation
```js
npm install paystack-solucien
```

## Usage

```js
// Require the library
var paystack = require('paystack-solucien')('secret_key');
```
### Notes on Usage (Best practices)
 Since you will be calling from your .env file 

 ```js
 1. require dotenv
 const dotenv = require("dotenv");

2. then require package
const paystack= require("paystack-solucien")(process.env.BEARER_SECRET_KEY);
```

## Making calls to endpoints
The resource methods promisified

#### The Format is: paystack.{resource}.{method}

Calling the resources with try and catch
```js
paystack.customer
  .list()
  .then(function(body) {
    console.log(body);
  })
  .catch(function(error) {
    console.log(error);
  });
  ```

  Calling the resources without try and catch

  #### The Format is: paystack.{resource}

```js
// paystack.{resource}.{method}
paystack.customer.list(function(error, body) {
  console.log(error);
  console.log(body);
});
  ```

  ## Usage real world examples will require you to pass some params

### Usage examples

#### initialize a payment 

```js
exports.getPayments = asyncHandler(async (req, res, next) => {
  const {
    email,
    amount,
    plan,
    reference,
    start_date,
    currency,
    metadata,
    callback_url,
    cancel_url,
    frequency,
    duration,
    name,
    description,
    send_invoices,
    send_sms,
 
  } = req.body;

  paystack.transaction
    .initialize({
        //just pass the data that you need for your payment transaction
      name,
      email,
      amount,
      callback_url,
      reference,
      metadata,
      plan,
      start_date,
      cancel_url,
    })
    .then(async (transaction) => {
      console.log(transaction);
      res.status(200).json({ transaction });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
});
```


#### initialize a payment with subscription

#### You just got to pass the plan_code and paystack will take care of the rest

```js
exports.getPayments = asyncHandler(async (req, res, next) => {
  const {
    email,
    amount,
    plan,
    reference,
    start_date,
    currency,
    metadata,
    callback_url,
    cancel_url,
    frequency,
    duration,
    name,
    description,
    send_invoices,
    send_sms,
 
  } = req.body;

  paystack.transaction
    .initialize({
        //just pass the data that you need for your payment transaction
      name,
      email,
      amount,
      plan,
      callback_url,
      reference,
      metadata,
      plan,
      start_date,
      cancel_url,
    })
    .then(async (transaction) => {
      console.log(transaction);
      res.status(200).json({ transaction });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
});
```
### When you are not using any asyncHandler just use 

```js
  const {
    email,
    amount,
    plan,
    reference,
    start_date,
    currency,
    metadata,
    callback_url,
    cancel_url,
    frequency,
    duration,
    name,
    description,
    send_invoices,
    send_sms,
 
  } = req.body;

  paystack.transaction
    .initialize({
        //just pass the data that you need for your payment transaction
      name,
      email,
      amount,
      plan,
      callback_url,
      reference,
      metadata,
      plan,
      start_date,
      cancel_url,
    })
    .then(async (transaction) => {
      console.log(transaction);
      res.status(200).json({ transaction });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });

```





### More examples 

  ### Example 1 (simple):

  ```js
 const {  email, id } = req.body;
    //get get customer
    paystack.customer
    .get({
     email, id
    })
    .then(async (transaction) => {
      console.log(transaction);
      res.status(200).json({ transaction });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });

  ``` 

  ### Example 2 (complex)

  Let say you were using a complex controller.js file with a middleware that allowed you to run async functions on your endpoints

  ```js
exports.getCustomer = asyncHandler(async (req, res, next) => {
    //req,body it will take the data you will send via json 
    const {  email, id } = req.body;

    //get customer
    paystack.customer
    .get({
        //it will then pass the request data from your api to paystack api
     email, id
    })
    .then(async (transaction) => {
        //you will get access to the transaction and you will use the transactions how you see fit
      console.log(transaction);
      res.status(200).json({ transaction });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
  });
  ```

  ### Note 

  If you are new to Nodejs the above example is not foreign to this:

```js

    //get customer
    paystack.customer
    .get({
        //send info as hardcorded json data
     email: "useremail@email.com",
     id: 933383930
    })
    .then(async (transaction) => {
      console.log(transaction);
      res.status(200).json({ transaction });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });

```

### Update Subscription card on file
#### Generate a link for the user so they update their card

#### Example 1:

```js
exports.updatePayment = asyncHandler(async (req, res, next) => {
    const { subscription_code } = req.body;
  
    
    //get subscription
    paystack.subscription
    .update({
     subscription_code
    })
    .then(async (transaction) => {
      console.log(transaction);
      res.status(200).json({ transaction });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
  });
```

#### Example 2 without the complexity

```js
 const { subscription_code } = req.body;
    //get subscription
    paystack.subscription
    .update({
     subscription_code
    })
    .then(async (transaction) => {
      console.log(transaction);
      res.status(200).json({ transaction });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
```

### Resources

- customer
  - create
  - get
  - list
  - update
- transaction
  - initialize
  - charge
  - get
  - list
  - totals
  - verify
- plan
  - create
  - get
  - list
  - update
- page
  - create
  - get
  - list
  - update
- subscription
  - create
  - disable
  - enable
  - get
  - list
  - update
- subaccount
  - create
  - get
  - list
  - listBanks
  - update
- Miscellanous
  - list_banks
  - resolve_bin

### Contribution

Please do contribute 

### Resource example for all functions
## Acknowledgements

 - [PayStack API for reference ](https://paystack.com/docs/api/)

## Buy me a coffe

 - [You can buy me a coffee] (https://www.buymeacoffee.com/solucien/)
 

## Support

For support, email info@solucien or find me on Twitter via lucien_mendela.

