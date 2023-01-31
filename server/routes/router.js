const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
// router.get('/',(req,res)=>{
//     console.log("Connect") ;
// });
// Add User
router.post("/register", async (req, res) => {
  const { name, email, age, mobile, work, address, description } = req.body;

  if (!name || !email || !age || !mobile || !work || !address || !description) {
    res.status(404).json("Please File the fields");
  }

  try {
    const preuser = await users.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      res.status(404).json("This user is already present");
    } else {
      const addUser = new users({
        name,
        email,
        age,
        mobile,
        work,
        address,
        description,
      });
      await addUser.save();
      res.status(201).json(addUser);
      console.log(addUser);
    }
  } catch (error) {
    res.status(404).json(error);
  }

  console.log(req.body);
});

// Get User

router.get("/getUser", async (req, res) => {
  try {
    const userData = await users.find();
    res.status(201).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(404).json(error);
  }
});

// get user by id

router.get("/getUserby/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const individualUser = await users.findById({ _id: id });
    res.status(201).json(individualUser);
    console.log(individualUser);
  } catch (error) {
    res.status(404).json(error);
  }
});

// update user by id

router.patch("/updateUser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateUser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateUser);
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(404).json(updateUser);
  }
});


// delete user
router.delete("/deleteUser/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteUser = await users.findByIdAndDelete({_id:id});
      console.log(deleteUser);
      res.status(201).json(deleteUser);
    } catch (error) {
      res.status(404).json(deleteUser);
    }
  });

module.exports = router;
