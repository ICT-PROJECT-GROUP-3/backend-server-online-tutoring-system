import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
    name:"lesson",
    title:"lesson",
    type:"document",
    fields:[
        defineField({
            name:"lesson_name",
            title:"lesson",
            type:"string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:"date",
            title:"date",
            type:"datetime",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:"duration",
            title:"Duration (minutes)",
            type:"number",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:"rate",
            title:"rate",
            type:"string",
            validation: Rule => Rule.required(),
        }),  
        {
            name:"subject",
            title:"Subject",
            type:"reference",
            to:[{type:'subject'}],
            validation: Rule => Rule.required(),
        },  
    ],
});