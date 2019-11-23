import { IAccount } from '@entities';

export interface IAccountDao {
    getAll: () => Promise<IAccount[]>;
}

export class AccountDao implements IAccountDao {

    /**
     *
     */
    public async getAll(): Promise<IAccount[]> {
        // TODO
        return [] as any;
    }
}
