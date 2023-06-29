// user - required
export const roles = {
  tutor:'tutor',
  admin:'admin',
  student:'student'
};

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