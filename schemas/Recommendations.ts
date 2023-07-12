/**

    Represents a recommendation.
    @typedef {Object} Recommendation
    @property {string} name - The name of the recommendation.
    @property {string} title - The title of the recommendation.
    @property {string} type - The type of the recommendation.
    @property {RecommendationField[]} fields - The fields associated with the recommendation.
    */

/**

    Represents a field in the recommendation.
    @typedef {Object} RecommendationField
    @property {string} name - The name of the field.
    @property {string} title - The title of the field.
    @property {string} type - The type of the field.
    @property {Function} validation - The validation function for the field.
    */

/**

    Defines a recommendation object.
    @param {Recommendation} recommendation - The recommendation object to define.
    @returns {Recommendation} - The defined recommendation object.
    */
import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
    name:"recommendations",
    title:"Recommendations",
    type:"document",
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type:'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'languages',
            title:'Languages',
            type:'array',
            of:[
                {
                    type:'string'
                }
            ],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'location',
            title:'Location',
            type:'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'gender',
            title:'gender',
            type:'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'homework_help',
            title:'Homework help',
            type:'boolean',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'can_travel',
            title:'can travel',
            type:'boolean',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'teaches_at_home',
            title:'Teaches at home',
            type:'boolean',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'teaches_online',
            title:'Teaches online',
            type:'boolean',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'subjects',
            title:'subjects',
            type:'array',
            of:[
                {
                    type:'subject'
                }
            ],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name:'minimum_price_point',
            title:'Minimum price point',
            type:'number',
            validation: Rule => Rule.required(),
        }),
         defineField({
            name:'maximum_price_point',
            title:'Maximum price point',
            type:'number',
            validation: Rule => Rule.required(),
        }),
         defineField({
            name:'interested_tutors',
            title:'Interested Tutors',
            type:'array',
            of:[
                    {
                        type:'tutor'
                    }
            ],
            validation: Rule => Rule.required(),
        }),
        
    ]
});