import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
   name:"subject",
   title:"subject",
   type:"document",
   fields: [
        defineField({
            name:"subject",
            title:"subject",
            type:"string",
            validation: Rule => Rule.required(),
        }),
        {
            name:"tutor",
            title:"tutor",
            type:"reference",
            to:[{type:"tutor"}],
            validation: Rule => Rule.required(),
        },
   ],
});