import express from 'express';
import winston from 'winston';
import router from './routes/index.js';
import { promises as fs } from 'fs';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './doc.js';

const { readFile, writeFile } = fs;

global.fileUsers = 'users.json';
global.fileContracts = 'contracts.json';

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'vflows-api.log ' }),
  ],
  format: combine(label({ label: 'vflows-api' }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());

app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', router);

app.listen(3000, async () => {
  try {
    await readFile(global.fileUsers);
    await readFile(global.fileContracts);
    logger.info('API Started!');
  } catch (err) {
    try {
      // const users = [];

      // for (let i = 0; i < 10; i++) {
      //   users.push({
      //     cnpj: `${i}.${i}.${i}.${i}/${i}-${i}`,
      //     razaoSocial: `Empresa ${i} Ltda.`,
      //     nomeFantasia: `Empresa ${i}`,
      //   });
      // }

      // const usersJson = JSON.stringify(users, null, 2);

      // const contracts = [];

      // for (let i = 0; i < 20; i++) {
      //   contracts.push({
      //     nomeDoContrato: `Contrato ${i}`,
      //     codigoDoContrato: `C${i}`,
      //     retencaoTecnica: `${i + 1}%`,
      //     cnpj: `${i}.${i}.${i}.${i}/${i}-${i}`,
      //   });
      // }

      // const contractsJson = JSON.stringify(contracts, null, 2);

      // writeFile(global.fileUsers, usersJson);

      // writeFile(global.fileContracts, contractsJson);

      logger.info('API Started and File Created!');
    } catch (err) {
      logger.error(err);
    }
  }
});
