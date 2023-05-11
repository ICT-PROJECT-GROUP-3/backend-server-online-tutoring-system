import { defineType,defineField } from "sanity";

export default defineType({
    name:"reviews",
    title:"Reviews",
    type:"document",
    fields:[
    defineField({
      name: 'review',
      title: 'review',
      type: 'array',
      of:[
        {
          type:'block'
        }
      ],
    validation: Rule => [ 
        Rule.max(150).warning("A brief review is preferred!"),
    ]}),
        defineField({
            name:"tutor",
            title:"Tutor",
            type:"reference",
            to:[{type:'tutor'}],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:"student",
            title:"Student",
            type:"reference",
            to:[{type:'student'}],
            validation: Rule => Rule.required(),
        }),

    ]

})