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
            of:[{type:"tutor"}],
        },
    ),
    defineField({
            name:"subject",
            title:"subject",
            type:"reference",
            to:[{type:"subject"}],
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