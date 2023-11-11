import  express  from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
 
const port = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pakaya2003",
    database:"sanasa",
    port:"3308"


}
)


app.post("/",(req,res)=>{

 const {
    fullName,
    NIC,
    passport,
    license,
    Country,
    nationality,
    POB,
    BCountry,
    isCitizen,
    CCountry,
    mobile,
    email
  } = req.body;
  console.log(fullName)
  const sql = `
  INSERT INTO user 
  (fullName, NIC, passport, license, Country, nationality, POB, BCountry,   CCountry, mobile, email,isCitizen) 
  VALUES 
  ('${fullName}', '${NIC}', '${passport}', '${license}', '${Country}', '${nationality}', '${POB}', '${BCountry}', '${CCountry}', '${mobile}', '${email}','${isCitizen}')
`;
    db.query(sql,(err)=>{
        if(err){
            
            return res.json(`A Error occured : ${err}`)

        }
       
    })

 res.send("Data received successfully!");

   

});
app.listen(port ,()=>{
    console.log(`Listening to port ${port}`);
})