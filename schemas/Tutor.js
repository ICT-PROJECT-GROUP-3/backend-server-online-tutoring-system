import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'tutor',
  title: 'Tutor',
  type: 'document',
  fields: [
    defineField({
      name: 'first_name',
      title: 'First Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'qualifications',
      title: 'Qualification',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required(),
    }),
  ],
});