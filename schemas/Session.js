export default {
  name: 'tutoringSession',
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
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'start',
      title: 'Start Time',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'end',
      title: 'End Time',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
    },
  ],
};
