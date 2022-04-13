const router = require("express").Router();
const Places= require('../models/places.js')
const comments = require('../models/comment.js')

// Reference to models folder
const db = require("../models");
const { findById } = require("../models/places.js");

// Route pages

// Default Page
router.get("/", (req, res) => {
  db.Place.find()
    // Render index page
    .then((places) => {
      res.render("places/index", { places });
    })
    // to catch any errors
    .catch((err) => {
      console.log(err);
      res.render("error404"); //renders error 404 page
    });
});

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";

        //  ToDo: Find all Validation errors
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});


//show
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(updatedPlace => {
    console.log(updatedPlace)
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

//edit
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
      .then(place => {
          res.render('places/edit', { place })
      })
      .catch(err => {
          res.render('error404')
      })
})



router.delete("/:id", (req, res) => {
  Places.findByIdAndDelete(req.params.id)
  .then(deletedPlace => {
    res.status(303).redirect('/places')
  })
})



router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;