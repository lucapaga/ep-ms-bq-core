const usingMockDb = (process.env.USE_MOCK_DB || '').toLowerCase();
let userDaoPath = './User/UserDao';
let accountDaoPath = './Account/AccountDao';

if (usingMockDb === 'true') {
    userDaoPath += '.mock';
    accountDaoPath += '.mock';
}

// tslint:disable:no-var-requires
export const { UserDao } = require(userDaoPath);
export const { AccountDao } = require(accountDaoPath);
