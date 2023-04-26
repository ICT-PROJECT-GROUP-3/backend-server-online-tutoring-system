import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
    name:"grades",
    title:"Grades",
    type:"document",
    fields:[
        defineField({
            name:'grade',
            title:'Grade',
            type:'number',
            validation: Rule => Rule.required(),
        }),
        {
            name:'subject',
            title:'Subject',
            type:'reference',
            to:[{type:'subject'}],
            validation: Rule => Rule.required(),
        },
        {
            name:'student',
            title:'Student',
            type:'reference',
            to:[{type:'student'}],
            validation: Rule => Rule.required(),
        },
    ]
});