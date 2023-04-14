export default{
    name:"grades",
    title:"Grades",
    type:"document",
    fields:[
        {
            name:'grade',
            title:'Grade',
            type:'number',
            validation: Rule => Rule.required(),
        },
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
}