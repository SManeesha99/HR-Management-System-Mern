const router = require("express").Router();
const Employee = require("../models/employee");


//add employee
router.post('/add', (req, res) => {
    Employee.create(req.body)
      .then(employee => res.json({ msg: 'employee added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this employee' }));
});


//get all employee
router.get('/', (req, res) => {
    Employee.find()
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json({ error: 'Unable to get employee' }));
});


//get employee by id
router.get('/:id', (req, res) => {
    Employee.findById(req.params.id)
      .then(employee => res.json(employee))
      .catch(err => res.status(404).json({ noitemfound: 'No place found' }));
});







module.exports = router;




// const express = require('express');
// const employee =  require('../models/employee');
// const router = express.Router();

// router.post('/login', (req, res) => {
//   const { NIC, password } = req.body;

//   // Find employee by NIC and password
//   employee.findOne({ NIC, password }, (err, foundEmployee) => {
//     if (err) {
//       return res.status(400).json({
//         success: false,
//         error: err
//       });
//     }

//     if (!foundEmployee) {
//       return res.status(400).json({
//         success: false,
//         error: "Invalid NIC or password"
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       employee: foundEmployee
//     });
//   });
// });


//save post
// router.post('/post', (req, res) => {
//     let emp = new employee(req.body);
//     emp.save((err) => {
//         if (err) {
//             return res.status(400).json({
//                 error: err
//             });
//         }
//         return res.status(200).json({
//             success: emp
//         });
//     });
// });


//get all post
// router.get('/post', (req, res) => {
//     employee.find().exec((err, employee) => {
//         if (err) {
//             return res.status(400).json({
//                 error: err
//             });
//         }
//         return res.status(200).json({
//             success: true,
//             existingPosts: employee
//         });
//     });
// });

//update post

// router.put('/post/:id', (req, res) => {
//     employee.findByIdAndUpdate(   
//         req.params.id,
//         {
//             $set: req.body
//         },
//         (err, post) => {
//             if (err) {
//                 return res.status(400).json({ error: err });
//             }
//             return res.status(200).json({
//                 success: "Updated successfully"
//             });
//         }
//     );
// });


//delete post

// router.delete('/post/:id', (req, res) => {
//     employee.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
//         if (err) return res.status(400).json({
//             message: "Delete unsuccessful", err
//         });
//         return res.json({
//             message: "Delete successful", deletedPost
//         });
//     });
// });

//get specific post

// router.get("/post/:id", (req, res) => {
//     let postId = req.params.id;
//     employee.findById(postId , (err, post) => {
//             if (err) {
//                 return res.status(400).json({ success: false, err })
//             }
//             return res.status(200).json({
//                 success: true,
//                 post
//             });
//         });
// });





// module.exports = router;