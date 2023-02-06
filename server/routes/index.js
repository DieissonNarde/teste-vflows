import express from 'express';
import { promises as fs } from 'fs';
import cors from 'cors';

const { readFile } = fs;

const router = express.Router();

router.get('/login', cors(), async (req, res, next) => {
  try {
    const users = JSON.parse(await readFile(global.fileUsers));

    const { cnpj } = req.body;

    if (!cnpj) {
      throw new Error('CNPJ é obrigatório.');
    }

    const user = users.find((user) => user.cnpj === cnpj);

    if (user === -1) {
      throw new Error('CNPJ não encontrado.');
    }

    res.json(user);

    logger.info('GET /login');
  } catch (err) {
    next(err);
  }
});

router.get('/contracts', async (req, res, next) => {
  try {
    const contractsData = JSON.parse(await readFile(global.fileContracts));

    let { cnpj } = req.body;

    let contracts = contractsData
      .filter((contract) => contract.cnpj.includes(cnpj))
      .map((contract) => {
        return contract;
      });

    if (cnpj) return res.json({ contracts });

    logger.info('GET /contracts');
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
