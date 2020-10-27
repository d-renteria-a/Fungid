
require('dotenv').config()
const express = require('express')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const cors = require('cors')
// const { CLIENT_ORIGIN } = require('./config')
const port = process.env.PORT || 8080
const app = express()
const router = express.Router();
const mysql = require('mysql')

let pool;

if (process.env.NODE_ENV === 'production') {
  console.log("in production!")
   pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL);
} else {
      pool = mysql.createPool(
     {
     connectionLimit : 10,
     host            : 'localhost',
     user            : 'root',
     password        : 'D46123Daniel',
     database        : 'fungid_final_project'
   });
   console.log("end of pool")
}

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})
  
app.use(cors({ 
  origin: true 
})) 

app.use(formData.parse())

app.post('/image-upload', (req, res) => {

  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => res.json(results))
})

app.listen(port, () => console.log(`connected on port ${port}`))