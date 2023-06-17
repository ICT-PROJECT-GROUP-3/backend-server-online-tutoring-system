import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
    name:"admin",
    title:"admin",
    type:"document",
    fields:[
        defineField({
            name:'first_name',
            title:'First name',
            type:'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'last_name',
            title:'Last name',
            type:'string',
            validation: Rule => Rule.required(),
        }),
        
    ]
});