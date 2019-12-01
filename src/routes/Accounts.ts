
import { AccountDao, TransactionDao } from '@daos';
import { logger } from '@shared';
import { Request, Response, Router, Express } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError } from '@shared';
import { ParamsDictionary } from 'express-serve-static-core';
import { Account } from '@entities';

// Init shared
const router = Router();
const accountDao = new AccountDao();
const transactionDao = new TransactionDao()

/******************************************************************************
 *  Get All Users - "GET /epi/accounts/list"
 ******************************************************************************/

router.get('/list', async (req: Request, res: Response) => {
    try {
        const accounts = await accountDao.getAll();
        return res.status(OK).json(accounts);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});


/******************************************************************************
 *  Get Account's Transactions - "GET /epi/accounts/:id/transactions"
 ******************************************************************************/

router.get('/:id/transactions', async (req: Request, res: Response) => {
    try {
        console.log("Request Parameters: ", req.params);
        const transactions = await transactionDao.getAll(new Account("", req.params['id'], 0));
        //const { id } = req.params as ParamsDictionary;
        //await userDao.delete(Number(id));
        return res.status(OK).json(transactions);
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});


/******************************************************************************
 *  Add Tx to Account - "POST /epi/accounts/:id/transactions"
 ******************************************************************************/

router.post('/:id/transactions', async (req: Request, res: Response) => {
    try {
        /*const { user } = req.body;
        if (!user) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await userDao.add(user);*/
        return res.status(CREATED).end();
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
