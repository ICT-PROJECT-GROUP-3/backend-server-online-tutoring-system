export default {
    name:"lesson",
    title:"lesson",
    type:"document",
    fields:[
        {
            name:"lesson_name",
            title:"lesson",
            type:"string",
            validation: Rule => Rule.required(),
        },
        {
            name:"date",
            title:"date",
            type:"datetime",
            validation: Rule => Rule.required(),
        },
        {
            name:"duration",
            title:"Duration (minutes)",
            type:"number",
            validation: Rule => Rule.required(),
        },
        {
            name:"rate",
            title:"rate",
            type:"string",
            validation: Rule => Rule.required(),
        },  
         {
            name:"subject",
            title:"Subject",
            type:"reference",
            to:[{type:'subject'}],
            validation: Rule => Rule.required(),
        },  
    ],
}