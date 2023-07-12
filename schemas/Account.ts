/**

    Represents an account.
    @typedef {Object} Account
    @property {string} name - The name of the account.
    @property {string} title - The title of the account.
    @property {string} type - The type of the account.
    @property {AccountField[]} fields - The fields associated with the account.
    */

/**

    Represents a field in the account.
    @typedef {Object} AccountField
    @property {string} name - The name of the field.
    @property {string} type - The type of the field.
    @property {AccountReference} [to] - The reference associated with the field.
    */

/**

    Represents a reference in the account.
    @typedef {Object} AccountReference
    @property {string} type - The type of the reference.
    */

/**

    Represents an account object.
    @type {Account}
    */
    export default {
    name: 'account',
    title: 'Account',
    type: 'document',
    fields: [
    {
    name: 'providerType',
    type: 'string'
    },
    {
    name: 'providerId',
    type: 'string'
    },
    {
    name: 'providerAccountId',
    type: 'string'
    },
    {
    name: 'refreshToken',
    type: 'string'
    },
    {
    name: 'accessToken',
    type: 'string'
    },
    {
    name: 'accessTokenExpires',
    type: 'string'
    },
    {
    name: 'user',
    title: 'User',
    type: 'reference',
    to: { type: 'user' }
    }
    ]
    };