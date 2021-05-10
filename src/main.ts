// import * as express from 'express'; // da error el import de esta manera ???
import {spawn} from 'child_process';
import express = require('express');

const app = express();
/*
app.get('/execmd', (cmd, res) => {
  // const bat = spawn('cmd.exe', ['/c', 'my.bat']);
  const comandoLinux = spawn(`${cmd}.exe`, []); // `${args}`
  comandoLinux.on('data', (data) => {
    console.log('Enviamos el JSON');
    res.send({
      info: [
        {
          title: 'Salida exitosa del comando',
          data: `${data}`,
        },
      ],
    });
  });

  comandoLinux.on('error', (information) => {
    console.log('Comunicamos el error');
    res.send({
      info: [
        {
          title: 'Error en el comando',
          name: `${information.name}`,
          message: `${information.message}`,
        },
      ],
    });
  });

  comandoLinux.on('end', () => {
    console.log('Termina  mos');
  });
});
*/

app.get('*', (_, res) => {
  res.send('<h1>404</h1>');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
