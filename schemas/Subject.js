export default{
   name:"subject",
   title:"subject",
   type:"document",
   fields: [
        {
            name:"subject",
            title:"subject",
            type:"string",
            validation: Rule => Rule.required(),
        },
        {
            name:"tutor",
            title:"tutor",
            type:"reference",
            to:[{type:"tutor"}],
            validation: Rule => Rule.required(),
        },
        

   ],
}