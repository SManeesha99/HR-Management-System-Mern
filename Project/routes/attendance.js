const router = require("express").Router();
const Attendance = require("../models/attendance");


//add attendance
router.post('/add', (req, res) => {
    Attendance.create(req.body)
      .then(attendance => res.json({ msg: 'Attendance added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this Attendance' }));
});


//get attendance
router.get('/', (req, res) => {
    Attendance.find()
        .then(attendance => res.json(attendance))
        .catch(err => res.status(400).json({ error: 'Unable to get Attendance' }));
}
);

//get attendance by id
router.get('/:id', (req, res) => {
    Attendance.findById(req.params.id)
        .then(attendance => res.json(attendance))
        .catch(err => res.status(400).json({ error: 'Unable to get Attendance' }));
}
);

 module.exports = router; 
