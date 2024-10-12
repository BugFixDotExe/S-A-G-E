import express from 'express'
import multer from 'multer'
import path from 'path'
import {readFile} from 'node:fs/promises'
import {getTextExtractor} from 'office-text-extractor'
import run from './controller/googleGemeniController.js'

const app = express()
app.set('view engine', 'ejs');
const extractor = getTextExtractor()
const PORT = process.env.PORT || 3000


// Set up the storage engine to disk
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

    }
})


// init upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).single('document');


// check file type
function checkFileType(file, cb) {
    // Allowed filed extensions
    const filetypes = /pdf|doc|docx/;
    // check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // check mime type
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only');
    }
}


async function fileProcessingPlant(filePath) {
    const text = await extractor.extractText({input:filePath, type:'file'})
    console.log(text)
    run(text)
}


// Set up a simple GET route
app.get('/', (req, res) => {
    res.render('index');
})


// Set up a simple POST route
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err){res.render('index', {msg: 'error'})}
        else {
            if (req.file === undefined){return res.render('index', {msg: 'missing file'})}
            else {
                res.render('index', {msg: 'File Uploaded!', file: `uploads/${req.file.filename}`})
            }
            console.log(req.file)
            fileProcessingPlant(req.file.path);
        }
    })
})

app.listen(PORT, ()=>{console.log(`Running on PORT: ${PORT}`)});