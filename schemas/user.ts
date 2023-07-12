// user - required
/**

    Represents a user.
    @typedef {Object} User
    @property {string} name - The name of the user.
    @property {string} title - The title of the user.
    @property {string} type - The type of the user.
    @property {UserField[]} fields - The fields associated with the user.
    */

/**

    Represents a field in the user.
    @typedef {Object} UserField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Function} validation - The validation function for the field.
    */

/**

    Represents the roles available for the user.
    @typedef {Object} UserRoles
    @property {string} tutor - The role of a tutor.
    @property {string} admin - The role of an admin.
    @property {string} student - The role of a student.
    */

/**

    Defines the roles available for the user.
    @type {UserRoles}
    */
   export const roles = {
  tutor:'tutor',
  admin:'admin',
  student:'student'
};
   

/**

    Defines a user object.
    @param {User} user - The user object to define.
    @returns {User} - The defined user object.
    */


export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options:{
          hotspot:true,
        }
    },
    {
      // this is only if you use credentials provider
      name: 'password',
      title:'Password',
      type: 'string',
    },
     {
      // this is only if you use credentials provider
      name: 'role',
      title:'role',
      type: 'string',
       options: {
        list: [
          { title: 'Tutor', value: roles.tutor, type:'tutor' },
          { title: 'Student', value: roles.student, type:'student' },
          { title: 'Admin', value: roles.admin, type:'admin' },
          // Add more roles if needed
        ]
      },
    },
     {
      name: 'tutor',
      title: 'Tutor',
      type: 'reference',
      to: [{ type: 'tutor' }],
      // Only show this field if the role is "tutor"
      // hidden: ({ document }) => document && document.role !== 'tutor'
    },
    {
      name: 'student',
      title: 'Student',
      type: 'reference',
      to: [{ type: 'student' }],
      // Only show this field if the role is "student"
      // hidden: ({ document }) => document && document.role !== 'student'
    },
    {
      name: 'refreshToken',
      title: 'Refresh token',
      type: 'string'
    },
  ]
};