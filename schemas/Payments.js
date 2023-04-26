import {defineType, defineField, defineArrayMember} from 'sanity';

export default defineType({
    name:"payments",
    title:"Payments",
    type:"document",
    fields:[
        defineField({
            name:'amount',
            title:'Amount Paid',
            type:'number',
            validation: Rules => Rules.required(),
        }),
        {
            name:'tutor',
            title:'Tutor',
            type:'reference',
            to:[{type:'tutor'}],
            validation: Rule => Rule.required(),
        },
        {
            name:'student',
            title:'Student',
            type:'reference',
            to:[{type:'student'}],
            validation: Rule => Rule.required(),
        },
        {
            name:'subject',
            title:'Subject',
            type:'reference',
            to:[{type:'subject',
            validation: Rule => Rule.required(),

        }],
        }
    ]
});