const express = require("express");

const router = express.Router();

const Car = require("./CarsModel");

router.get("/", (req, res) => {
  Car.get()
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error getting Car" });
    });
});

router.get("/:id", (req, res) => {
  Car.getById(req.params.id)
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error getting Car" });
    });
});

router.post("/", (req, res) => {
  Car.insert(req.body)
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error creating Car" });
    });
});

router.put("/:id", (req, res) => {
  Car.update(req.params.id, req.body)
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error updating Car" });
    });
});

router.delete("/:id", (req, res) => {
  Car.remove(req.params.id)
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(error => {
      console.log(error);
      res.status(500), json({ message: "Error deleting Car" });
    });
});

module.exports = router;
