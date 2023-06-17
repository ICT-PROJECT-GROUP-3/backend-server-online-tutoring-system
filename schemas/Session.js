import {defineType, defineField, defineArrayMember} from 'sanity';

export default defineType({
  name: 'session',
  title: 'session',
  type: 'document',
  fields: [
     {
      name: 'session',
      title: 'session',
      type: 'string'
      // validation: Rule => Rule.required(),
    },
    {
      name: 'student',
      title: 'student',
      type: 'array',
      of: [{type: 'student'}],
      // validation: Rule => Rule.required(),
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
// Query the session schema to display students under a specified tutor
//  *[_type == 'session' && tutor._ref == '50de3459-42cd-472b-b6d4-ab23d0610e15'].student[]{first_name,last_name}

// Query the session schema to display the number of sessions the tutor has: 
// count(*[_type == 'session' && tutor._ref == '50de3459-42cd-472b-b6d4-ab23d0610e15'])  

// Query the session to retrieve the subjects taught by the tutor:
//  *[_type == 'session' && tutor._ref == '50de3459-42cd-472b-b6d4-ab23d0610e15'].subject->{subject}

// Query the session schema to retrieve the number of students:
//  count(*[_type == 'session' && tutor._ref == '50de3459-42cd-472b-b6d4-ab23d0610e15'].student[]{first_name,last_name})