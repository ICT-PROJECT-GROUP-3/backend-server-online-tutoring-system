import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
    name:"notifications",
    title:"notifications",
    type:"document",
    fields:[
        defineField({
            name:"from",
            title:"from",
            type:"string",
        
        }),
        defineField({
            name: 'timestamp',
            type: 'datetime',
            title: 'Timestamp',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                calendarTodayLabel: 'Today',
            },
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name:"recipient",
            title:"recipient",
            type:"string",
            
        }),
        defineField({
            name: 'status',
            type: 'string',
            title: 'Status',
            options: {
                list: ['sent', 'read'],
            },
            initialValue: 'sent',
         }),
        {
            name:"message",
            title:"message",
            type:"string",
        },  
    ],
});