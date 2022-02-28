import { createRequire } from 'module';
const require = createRequire(import.meta.url)
import { engine } from 'express-handlebars';
import db from "./config/index.js"
import * as path from "path";
import { fileURLToPath } from "url";
import route from './routes/index.js';
import methodOverride from 'method-override'
import midelware from "./app/controller/midleware/Midelware.js"
db.connect()
// const route = require('./routes/index.js')
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const express = require("express")

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(methodOverride('_method'))
app.use(midelware)

app.engine("hbs", engine({
    extname:'.hbs',
    helpers:{
        sorttable:(field,sort)=>{

            const sortType = field ===sort.column ? sort.type :"default";
            const icons={
                default:"<i class='fas fa-sort'></i>",
                desc:"ltb",
                asc:"btl"

            }
            const types={
                default:"desc",
                desc:"asc",
                asc:"desc"
            }
            const icon=icons[sortType]
            const type=types[sortType]


            return `<a href="?sort&column=${field}&type=${type}">${icon}</a>`
        }
    }
}));
app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "./views"));
route(app)


app.listen(3000, () => {
	console.log("express-handlebars example server listening on: 3000");
});