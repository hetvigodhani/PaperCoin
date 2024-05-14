const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require("./firebase");
const { ref, get, child, update, set, push, remove } = require("firebase/database");
const cors = require("cors");

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {

// 	const allowedOrigins = ["http://localhost:3000",
//    "https://stunning-space-meme-9xgr99x79vqf9rw6-3000.app.github.dev",
//     ];
// 	const origin = req.headers.origin;
// 	if (allowedOrigins.includes(origin)) {
// 		 res.setHeader('Access-Control-Allow-Origin', origin);
// 	}

// res.header("Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");

  next();
})


app.listen(4000, () => {
  console.log('Server listening on port 4000');
});

app.post('/getOrders', (req, res) => {
  const starCountRef = ref(db);
  get(child(starCountRef, "jayur/orders")).then((snapshot) => {
    if (snapshot.exists()) {
      res.status(200).send(snapshot.val());
    } else {
      console.log("post");
    }
  }).catch((error) => {
    console.error(error);
  });
})

app.post('/newOrder', (req, res) => {

  if (req.body.marketOrLimit == "limit") {
    push(ref(db, "jayur/orders/limit"),
      req.body
    ).catch((error) => {
      if (error == null) { console.log("Fine"); }
      else { console.error("Error", error); }
    }).then((snap) => {
      update(ref(db, "jayur/orders/limit/" + snap.key),
        { "key": snap.key }).catch((error) => {
          if (error == null) { console.log("Fine"); }
          else { console.error("Error", error); }
        });
    });
  }
  else {
    push(ref(db, "jayur/orders/market"),
      req.body
    ).catch((error) => {
      if (error == null) { console.log("Fine"); returnStatus = true; }
      else { console.error("Error", error); }
    }).then((snap) => {
      update(ref(db, "jayur/orders/market/" + snap.key),
        { "key": snap.key }).catch((error) => {
          if (error == null) { console.log("Fine"); }
          else { console.error("Error", error); }
        });
    });
  }
})




app.post('/delOrder', (req, res) => {
  console.log(req.body.key)
  const starCountRef = ref(db);
  get(child(starCountRef, "jayur/orders/limit/"+req.body.key)).then((snap) => {
    if (snap.exists()) {
      push(ref(db, "jayur/orders/market"),
      req.body
    ).catch((error) => {
      if (error == null) { console.log("Fine"); returnStatus = true; }
      else { console.error("Error", error); }
    }).then((snap) => {
      update(ref(db, "jayur/orders/market/" + snap.key),
        { "key": snap.key }).catch((error) => {
          if (error == null) { console.log("Fine"); }
          else { console.error("Error", error); }
        });
        update(ref(db, "jayur/orders/market/" + snap.key),
        { "marketOrLimit": "market"}).catch((error) => {
          if (error == null) { console.log("Fine"); }
          else { console.error("Error", error); }
        });
        
    });

      remove(ref(db, "jayur/orders/limit/"+req.body.key),
        req.body
      ).catch((error) => {
        if (error == null) { console.log("Fine"); returnStatus = true; }
        else { console.error("Error", error); }
      });
      
    } else {
      console.log("post");
    }
  }).catch((error) => {
    console.error(error);
  });
})


app.get('/hello', (req, res) => {
  res.send('Hello World!');
});






app.post('/updateOrder', (req, res) => {
  var newVar;
  if(req.body.orderType == "buy")
    {
      newVar = "buy";
    }
    else
    {
      newVar = "sell";
    }
  // console.log("updating")
  const starCountRef = ref(db);
  get(child(starCountRef, "jayur/orders/market/"+req.body.key)).then((snap) => {
    if (snap.exists()) {
      update(ref(db, "jayur/orders/market/" + req.body.key),
        { "orderType": "close", "type":newVar, "triggered":req.body.triggered }).catch((error) => {
          // console.log("insideee____")
          if (error == null) { console.log("Fine"); }
          else { console.error("Error", error); }
        });
    }else{
      console.log("post");
    };
}).catch((error) => {
    console.error(error);
  });
})
