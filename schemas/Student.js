export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
     {
      name: 'first_name',
      title: 'First Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
     {
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
  ],
};