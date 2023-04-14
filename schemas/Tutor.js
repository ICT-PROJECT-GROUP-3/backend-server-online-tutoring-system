export default {
  name: 'tutor',
  title: 'Tutor',
  type: 'document',
  fields: [
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
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required(),
    },
     {
      name: 'qualifications',
      title: 'Qualification',
      type: 'string',
      validation: Rule => Rule.required(),
    },
     {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required(),
    },
  ],
};