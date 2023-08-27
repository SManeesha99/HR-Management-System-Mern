const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
  
   useNewUrlParser:true,
   useUnifiedTopology:true,


});

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB Connected Successfully");
});


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const dotenv = require("dotenv");
// const cors = require('cors');

// // const EmployeeModel = require('./models/User');

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// app.use(cors());
// mongoose.set('strictQuery', true);
// const port = 8000;
// const url = 'mongodb+srv://minsandi:minsandi123@mernapp.cnpzawc.mongodb.net/?retryWrites=true&w=majority'
// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.log('Database not connected', err));


// app.listen(port, () => {
//     console.log(`Server is running on port${port}`);
// });

//user routes
const userRoutes = require('./routes/User');
app.use('/user', userRoutes);


const leaveRoutes = require('./routes/employee');
app.use('/employee', leaveRoutes);

//attendance routes
const attendanceRoutes = require('./routes/attendance');
app.use('/attendance', attendanceRoutes);


app.listen(PORT,()=>{
  console.log(`Server is up and running on port ${PORT}`);
})

// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     EmployeeModel.findOne({ email: email })
//       .then(user => {
//         if (user) {
//           if (password === user.password) {
//             res.json("Login Success");
//           } else {
//             res.json("Password didn't match");
//           }
//         } else {
//           res.json("User not registered");
//         }
//       })
//       .catch(err => {
//         console.error('Error during login:', err);
//         res.status(500).json("Server error");
//       });
//   });
  
  // app.post('/register', (req, res) => {
  //   const { email, password } = req.body;
  
    // Check if an employee with the provided email already exists
  //   EmployeeModel.findOne({ email: email })
  //     .then(existingEmployee => {
  //       if (existingEmployee) {
  //         res.status(400).json("Email is already in use");
  //       } else {
  //         EmployeeModel.create({ email: email, password: password })
  //           .then(employee => res.json(employee))
  //           .catch(err => {
  //             console.error('Error during registration:', err);
  //             res.status(500).json("Server error");
  //           });
  //       }
  //     })
  //     .catch(err => {
  //       console.error('Error during registration:', err);
  //       res.status(500).json("Server error");
  //     });
  // });
  