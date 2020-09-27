var express = require("express");
var bodyParser = require('body-parser');
const request = require('request-promise-native');
const axios = require('axios');
const fetch = require("node-fetch");
var app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

/**---------------------------------------
 * Check the env
 * ---------------------------------------
 */
if(process.env.NODE_ENV === "development") {
  var api_key = process.env.DEV_TOKEN;
  var serverHost = `${process.env.API_DEV_URL}`;
} else {
  var api_key = process.env.STAGING_TOKEN;
  var serverHost = `${process.env.API_STAGING_URL}`;
}

/**----------------------------------------
 * APP ENV
 * ----------------------------------------
 */
app.get('/myEnv', (req, res) => {
  res.send(process.env.NODE_ENV)
})


/**----------------------------------------
 * ACCOUNTS Routes
 * ----------------------------------------
 */
app.get('/accounts', (req, res) => {
  fetch(`${serverHost}/api/v1/accounts`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * CONTACTS Routes
 * ----------------------------------------
 */
app.get('/contacts', (req, res) => {
  fetch(`${serverHost}/api/v1/contacts`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * PRODUCTS Routes
 * ----------------------------------------
 */
// LIST
app.get('/products', (req, res) => {
  fetch(`${serverHost}/api/v1/products`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})

// SHOW
app.get('/products/:product_id', (req, res) => {
  fetch(`${serverHost}/api/v1/products/${req.params.product_id}`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * ORDERS Routes
 * ----------------------------------------
 */
app.get('/orders', (req, res) => {
  fetch(`${serverHost}/api/v1/orders`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * INVOICES Routes
 * ----------------------------------------
 */
app.get('/invoices', (req, res) => {
  fetch(`${serverHost}/api/v1/invoices`, {
    headers: {
      "Authorization": `Bearer ${api_key}` // AUTH
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * TICKETS Routes
 * ----------------------------------------
 */
// LIST
app.get('/tickets', (req, res) => {
  fetch(`${serverHost}/api/v1/tickets`)
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})

app.post('/tickets', async (req, res) => {
  // const options = {
  //   method: 'POST',
  //   uri: `${serverHost}/api/v1/tickets`,
  //   body: req.body,
  //   json: true,
  //   headers: {
  //     "Authorization": `Bearer ${api_key}`  // AUTH
  //   }
  // }

  // request(options, function (err, res, body) {
  //   if (err) {
  //     console.error('error posting json: ', err)
  //     throw err
  //   }
  //   var headers = res.headers
  //   var statusCode = res.statusCode
  //   console.log('headers: ', headers)
  //   console.log('statusCode: ', statusCode)
  //   console.log('body: ', body)
  // })

  // axios.post(`${serverHost}/api/v1/tickets`, req.body)
  //   .then((response) => {
  //       console.log(`Status: ${response.status}`);
  //       console.log('Body: ', response.data);
  //       res.send({ result: response.status })
  //   }).catch((err) => {
  //       console.error(err);
  //   });

    const createTicket = async () => {
      try {
        const response = await axios.post(`${serverHost}/api/v1/tickets`, req.body);
        console.log(`Status: ${response.status}`);
        console.log('Body: ', response.data);
        res.send({
          status: response.status,
          data: response.data
        })
      } catch (err) {
        console.error(err);
        res.send({ error: err })
      }
    };

    createTicket();

})

app.get('/tickets/:ticket_id', (req, res) => {
  fetch(`${serverHost}/api/v1/tickets/${req.params.ticket_id}`, {
    headers: {
      "Authorization": `Bearer ${api_key}`  // AUTH
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})

/**----------------------------------------
 * COMMENTS Routes
 * ----------------------------------------
 */
app.get('/tickets/:ticket_id/comments', (req, res) => {
  fetch(`${serverHost}/api/v1/tickets/${req.params.ticket_id}/comments`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * CONVERSATIONS Routes
 * ----------------------------------------
 */
app.get('/conversations', (req, res) => {
  fetch(`${serverHost}/api/v1/conversations`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})

/**----------------------------------------
 * MESSAGES Routes
 * ----------------------------------------
 */
app.get('/conversations/:conversation_id/messages', (req, res) => {
  fetch(`${serverHost}/api/v1/conversations/${req.params.conversation_id}/messages`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * ROLES Routes
 * ----------------------------------------
 */
app.get('/roles', (req, res) => {
  fetch(`${serverHost}/api/v1/roles`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * EVENTS Routes
 * ----------------------------------------
 */
app.get('/events', (req, res) => {
  fetch(`${serverHost}/api/v1/events`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * APPOINTMEMTS Routes
 * ----------------------------------------
 */
app.get('/appointments', (req, res) => {
  fetch(`${serverHost}/api/v1/appointments`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})

module.exports = {
  path: '/api/',
  handler: app
}