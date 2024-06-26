const express = require("express");
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const cookieParser = require("cookie-parser");
const { restrictToLoggedInUsers, checkAuth } = require("./middlewares/auth");

const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const staticRoute = require("./routes/staticRoute");


const path = require("path");


const app = express();
const PORT = 8001;

// Connect to MongoDB
connectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
  console.log("Mongodb connected");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Test route
app.get("/test", async (req, res) => {
  const allURLs = await URL.find();
  return res.render('home',
    {
      urls: allURLs
    }
  );
});

// Use URL routes
app.use("/url",restrictToLoggedInUsers, urlRoute);
app.use("/",checkAuth, staticRoute);
app.use("/user", userRoute);  


// Redirect based on shortId
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true } // Return the updated document (change 1)
    );

    if (!entry) { // Check if entry is null (change 2)
      console.error(`Entry not found for shortId: ${shortId}`);
      return res.status(404).send('URL not found');
    }

    res.redirect(entry.redirectURL);
  } catch (error) { // Error handling for unexpected errors (change 3)
    console.error('Error while redirecting:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
