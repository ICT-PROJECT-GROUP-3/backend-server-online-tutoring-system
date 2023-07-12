/**

    Represents a review.
    @typedef {Object} Review
    @property {string} name - The name of the review.
    @property {string} title - The title of the review.
    @property {string} type - The type of the review.
    @property {ReviewField[]} fields - The fields associated with the review.
    */

/**

    Represents a field in the review.
    @typedef {Object} ReviewField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Object} [options] - The options for the field.
    @property {Function} [validation] - The validation function for the field.
    */

/**

    Defines a review object.
    @param {Review} review - The review object to define.
    @returns {Review} - The defined review object.
    */
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
      of: [{
        type:'block'
      }
      ],
    validation: Rule => [  Rule.max(150).warning("A brief review is preferred!"),
    ]}),
     defineField({
            name:"title",
            title:"Title",
            type:"string",
            validation: Rule => Rule.required(),
        }),

        defineField({
            name:"tutor",
            title:"Tutor",
            type:"reference",
            to:[{type:'tutor'}],
            validation: Rule => Rule.required(),
        }),
        
        
        defineField({
            name:'questions',
            title:'Questions',
            type:"array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "questions",
                            title: "Questions",
                            type: "string"
                        },
                        {
                            name: "rating",
                            title: "Rating",
                            type: "number"
                        },
                    ],
                }
            ]

        }),

    ]

})