/**

    Represents a session.
    @typedef {Object} Session
    @property {string} name - The name of the session.
    @property {string} title - The title of the session.
    @property {string} type - The type of the session.
    @property {SessionField[]} fields - The fields associated with the session.
    */

/**

    Represents a field in the session.
    @typedef {Object} SessionField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Function} validation - The validation function for the field.
    */

/**

    Defines a session object.
    @param {Session} session - The session object to define.
    @returns {Session} - The defined session object.
    */

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
      type: 'reference',
      to:[
        {
          type:'student'
        }
      ]
      
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



/*
*[_type == 'session' && tutor._ref == "9d11251a-60c3-431e-8763-38fbfa9acf4a"] {
  'studentRef': student._ref,
  'firstName': student->first_name
}

*/