const express = require('express');
const employees = require('../models/employee');
const router = express.Router();

// Save employees
router.post('/post', (req, res) => {
  let newEmployee = new employees(req.body);
  newEmployee.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    return res.status(200).json({
      success: newEmployee
    });
  });
});



// Get employees
router.get('/post', (req, res) => {
    employees.find().exec((err, employees) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      return res.status(200).json({
        success: true,
        existingPosts: employees
      });
    });
  });
  

// Update employees
router.put('/post/:id', (req, res) => {
  employees.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (err, leave) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Updated successfully"
      });
    }
  );
});

// Delete employees
router.delete('/post/:id', (req, res) => {
  employees.findByIdAndRemove(req.params.id).exec((err, deletedLeave) => {
    if (err) {
      return res.status(400).json({
        message: "Delete unsuccessful",
        err
      });
    }
    return res.json({
      message: "Delete successful",
      deletedLeave
    });
  });
});

// Get specific employees
router.get("/post/:id", (req, res) => {
  let leaveId = req.params.id;
  employees.findById(leaveId, (err, leave) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      leave
    });
  });
});

module.exports = router;
