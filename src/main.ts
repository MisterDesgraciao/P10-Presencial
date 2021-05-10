// import * as express from 'express'; // da error el import de esta manera ???
import {spawn} from 'child_process';
import express = require('express');

const app = express();

app.get('/execmd', (request, response) => {
  console.log(request.query);
  const comandoLinux = spawn(`${request.query.cmd}`, [`${request.query.args}`, `.`]);
  comandoLinux.stdout.on('data', (chunk) => {
    response.send({
      info: [
        {
          title: 'Salida exitosa del comando',
          data: `${chunk}`,
        },
      ],
    });
  });

  comandoLinux.on('error', (information) => {
    console.log('Comunicamos el error');
    response.send({
      info: [
        {
          title: 'Error en el comando',
          name: `${information.name}`,
          message: `${information.message}`,
        },
      ],
    });
  });
});

app.get('*', (_, res) => {
  res.send('<h1>404</h1>');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});