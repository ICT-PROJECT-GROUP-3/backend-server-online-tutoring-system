import {defineType, defineField, defineArrayMember} from 'sanity';

export default defineType({
  name: 'session',
  title: 'Tutoring Session',
  type: 'document',
  fields: [
    {
      name: 'student',
      title: 'Student',
      type: 'reference',
      to: [{type: 'student'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'tutor',
      title: 'Tutor',
      type: 'reference',
      to: [{type: 'tutor'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'reference',
      to:[{type:'subject'}],
      validation: Rule => Rule.required(),
    },
    defineField({
      name: 'start',
      title: 'Start Time',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'end',
      title: 'End Time',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
    }),
  ],
});
