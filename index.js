import express from 'express'
import multer from 'multer'
import cors from 'cors'

const upload = multer({ dest: 'uploads/' })

const app = express()
app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html')
})

app.post('/api/metadata', upload.single('upfile'), (req, res) => {
  res.status(200).json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000')
})
