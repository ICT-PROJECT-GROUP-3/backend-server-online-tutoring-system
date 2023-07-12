/**

    Represents a verification token.
    @typedef {Object} VerificationToken
    @property {string} name - The name of the verification token.
    @property {string} title - The title of the verification token.
    @property {string} type - The type of the verification token.
    @property {VerificationTokenField[]} fields - The fields associated with the verification token.
    */

/**

    Represents a field in the verification token.
    @typedef {Object} VerificationTokenField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Function} validation - The validation function for the field.
    */

/**

    Defines a verification token object.
    @param {VerificationToken} verificationToken - The verification token object to define.
    @returns {VerificationToken} - The defined verification token object.
    */
// verification-token - only if you use email provider

export default {
  name: 'verification-token',
  title: 'Verification Token',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      title: 'Identifier',
      type: 'string'
    },
    {
      name: 'token',
      title: 'Token',
      type: 'string'
    },
    {
      name: 'expires',
      title: 'Expires',
      type: 'date'
    }
  ]
};