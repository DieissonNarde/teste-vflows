import express from 'express';
import { promises as fs } from 'fs';

const { readFile } = fs;

const router = express.Router();

router.post('/login', async (req, res, next) => {
  try {
    const users = JSON.parse(await readFile(global.fileUsers));

    const data = req.body;

    if (!data.cnpj) {
      throw new Error('CNPJ é obrigatório.');
    }

    const user = users.find((user) => user.cnpj === data.cnpj);

    if (user === -1) {
      throw new Error('CNPJ não encontrado.');
    }

    res.json(user);

    logger.info('GET /login');
  } catch (err) {
    next(err);
  }
});

router.post('/contracts', async (req, res, next) => {
  try {
    const contractsData = JSON.parse(await readFile(global.fileContracts));

    let data = req.body;

    let contracts = contractsData
      .filter((contract) => contract.cnpj.includes(data.cnpj))
      .map((contract) => {
        return contract;
      });

    if (data.cnpj) return res.json({ contracts });

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
