import express from 'express'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })

const app = express()

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: 'C:/Users/joeya/freeCodeCamp/file-metadata-microservice/api'})
})

app.post('/api/metadata', upload.single('upfile'), (req, res) => {
  console.log(req.file)
  res.status(200).json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000')
})
