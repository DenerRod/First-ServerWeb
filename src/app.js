const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).send('<p style="color: darkgreen">Olá Mundo!</p>'));

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
  ];

  // Listando times através do método GET
  app.get('/teams', (req, res) => res.status(200).json({ teams }));

  // Cadastrando times através do método POST
  app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);

    res.status(201).json({ teams: newTeam });
  });

  // Editando times através do método PUT
  app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
    let updatedTeam;

    for (let i = 0; i < teams.length; i += 1) {
        const team = teams[i];

        if (team.id === Number(id)) {
            team.name = name;
            team.initials = initials;
            updatedTeam = team;
        }
    }

    res.status(200).json({ updatedTeam });
  });

  // Exercicio:
    // Crie um endpoint do tipo GET com a rota /teams/:id.
  app.get('/teams/:id', (req, res) => {
      const { id } = req.params;
      let findTeam;

      for (let i = 0; i < teams.length; i += 1) {
            if (teams[i].id === Number(id)) {
                findTeam = teams[i];
            }
      }

      res.status(200).json({ findTeam });
  });

  // Deletando times através do método DELETE
  app.delete('/teams/:id', (req, res) => {
    const { id } = req.params;
    const arrayPosition = teams.findIndex((team) => team.id === Number(id));
    console.log(arrayPosition);
    teams.slice(arrayPosition, 1);

    res.status(200).end();
  });

module.exports = app;
