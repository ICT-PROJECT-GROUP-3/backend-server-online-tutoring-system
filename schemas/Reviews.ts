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
    validation: Rule => [  Rule.max(150).warning("A brief review is preferred!"),
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
         defineField({
            name:'treats_the_student_with_respect',
            title:'Treats the student with respect',
            type:'number',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'communicates_crearly',
            title:'Communicates Clearly',
            type:'number',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'is_prepared_for_the_session',
            title:'Is prepared for the session',
            type:'number',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'is_knowledgeable_about_the_subject_matter',
            title:'Is knowledgeable about the subject matter',
            type:'number',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'manages_time_well',
            title:'Manages time well',
            type:'number',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'is_flexible_in_accomodating_students_and_needs',
            title:'Is flexible in accomodating students and needs',
            type:'number',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'is_clear_in_giving_directions_and_on_explaining_what_is_expected',
            title:'is_clear in giving directions and on explaining what is expected',
            type:'number',
            validation: Rule => Rule.required(),
        }),

    ]

})