const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { UserModel, CandidatoModel } = require("./models");
const withAuth = require('./middleware');
const cors = require('cors');

//carpetas
const { PORT, MONGO_URI } = require("./config");
const secret = 'mysecretsshhh';

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

const mongo_uri = MONGO_URI;
mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.use(express.static(path.join(__dirname, 'build')));

app.get("/elecciones", async (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get("/mostrar", async (req, res) => {
    const myquery = await CandidatoModel.find({}).select({ "_id": 0});
    console.log(myquery);
    res.json(myquery);
});

app.get('/api/secret', withAuth, function(req, res) {
    res.send('Tienes token activo');
  });

  app.post('/api/registerCandidato', function(req, res) {
    const { dniCan, nombres, cantidad } = req.body;
    const candidato = new CandidatoModel({ dniCan, nombres, cantidad });
    candidato.save(function(err) {
      if (err) {
        console.log(err);
        res.status(500).send("Error al registrarse, intente de nuevo en unos minutos por favor.");
      } else {
        res.status(200).send("¡Bienvenido al sistema de votos!");
      }
    });
  });

app.post('/api/register', function(req, res) {
    const { apellidos, nombres, dni, password, voted } = req.body;
    const user = new UserModel({ apellidos, nombres, dni, password, voted });
    user.save(function(err) {
      if (err) {
        console.log(err);
        res.status(500).send("Error al registrarse, intente de nuevo en unos minutos por favor.");
      } else {
        res.status(200).send("¡Bienvenido al sistema de votos!");
      }
    });
  });

  app.post('/signin', function(req, res) {
    const { dni, password } = req.body;
    UserModel.findOne({ dni }, function(err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
          error: 'Internal error please try again'
        });
      } else if (!user) {
        res.status(401)
          .json({
          error: 'Incorrecto usuario'
        });
      } else {
        user.isCorrectPassword(password, function(err, same) {
          if (err) {
            res.status(500)
              .json({
              error: 'Error interno del sistema, intente de nuevo.'
            });
          } else if (!same) {
            res.status(401)
              .json({
              error: 'Incorrecto password'
            });
          } else {
            // Issue token
            const payload = { dni };
            const token = jwt.sign(payload, secret, {
              expiresIn: '10m'
            });
            res.cookie('token', token, { httpOnly: true }).sendStatus(200);
          }
        });
      }
    });
  });

  app.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
  });

  app.put('/votar/:id', async (req, res) => {
    const { voted, dniCan } = req.body;
    await UserModel.findByIdAndUpdate(req.params.id,{
        voted
    });

    
    candidato = await CandidatoModel.find();//.select({ dniCan, nombres, votos }); 
    /*let lista_1 = [];
    let lista_2 = [];
    if(candidato[0].dniCan == dniCan){
        lista_1 = candidato[0].votos;
        lista_1.push(1);
    }else{
        lista_2 = candidato[1].votos;
        lista_2.push(1);
    }*/

    var i = (candidato[0].dniCan == dniCan)? 0 : 1;
    console.log(i);
    var lista = candidato[i].votos;
    lista.push(1);
    console.log(candidato);

    var cuenta = candidato[i].cantidad + 1;

    CandidatoModel.findOneAndUpdate(dniCan,
        {
            //nombres: 'Keiko Sofia'
            //votos: lista //(candidato[0].dniCan == dniCan)? lista_1:lista_2
            cantidad: (candidato[1].dniCan == dniCan)? candidato[1].cantidad + 1:candidato[0].cantidad + 1
        }, () => {res.json("Listoooo")}); 

    /*candidato2 = await CandidatoModel.find().select({ dniCan }); 
    console.log(candidato2);*/

  });

/*
app.post('/votar', function(req, res) {
    const { apellidos, nombres, username, email, password, cellphone } = req.body;
    const user = new UserModel({ apellidos, nombres, username, email, password, cellphone });
    user.save(function(err) {
      if (err) {
        console.log(err);
        res.status(500).send("Error registering new user please try again.");
      } else {
        res.status(200).send("Welcome to the club!");
      }
    });
  });
*/
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    //res.send("No existe esta ruta");
});

app.listen(PORT, ()=>{
    console.log("app leventada correctamente en el puerto " + PORT);
});