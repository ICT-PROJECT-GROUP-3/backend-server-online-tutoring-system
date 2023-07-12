/**

    Represents a student.
    @typedef {Object} Student
    @property {string} name - The name of the student.
    @property {string} title - The title of the student.
    @property {string} type - The type of the student.
    @property {StudentField[]} fields - The fields associated with the student.
    */

/**

    Represents a field in the student.
    @typedef {Object} StudentField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Function} validation - The validation function for the field.
    */

/**

    Defines a student object.
    @param {Student} student - The student object to define.
    @returns {Student} - The defined student object.
    */

import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'student',
  title: 'student',
  type: 'document',
  fields: [
     defineField({
      name: 'first_name',
      title: 'First Name',
      type: 'string',
      // validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
      // validation: Rule => Rule.required(),
    }),
    //  defineField({
    //   name: 'number_of_sessions',
    //   title: 'Number Of Sessions',
    //   type: 'array',
    //   of:[
    //     {
    //       type:''
    //     }
    //   ]
    //   // validation: Rule => Rule.required(),
    // }),
     defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      // validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
            name:"tutor",
            title:"tutor",
            type:"array",
            of:[
              {
                type:"reference",
                to:[{type:"tutor"}]
            }],
        },
    ),
      defineField({
            name:"payments",
            title:"payments",
            type:"reference",
            to:[{type:"payments"}],
        },
    ),
  ],
});