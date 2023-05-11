import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'tutor',
  title: 'Tutor',
  type: 'document',
  fields: [
    defineField({
      name: 'fullname',
      title: 'Full Name',
      type: 'string',
    validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'bio',
      title: 'bio',
      type: 'array',
      of:[
        {
          type:'block'
        }
      ],
    validation: Rule => [ 
        Rule.min(50).error("a bio of 50 characters is required"),
        Rule.max(150).warning("A brief bio is preferred!"),
    ]}),
    defineField({
      name:"tutor_reviews",
      title:"Tutor reviews",
      type:"array",
      of: [
        {
          type:"reviews"
        }
      ]
    }),
     defineField({
      name: 'price',
      title: 'Price per session',
      type: 'number',
    }),
    defineField({
      name: 'can_travel',
      title: 'Can Travel',
      type: 'boolean',
    }),
    defineField({
      name: 'Teaches_at_home',
      title: 'Teaches at home',
      type: 'boolean',
    }),
    
     defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of:[
        {
          type:"string"
        }
      ],
      validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'total_teaching_experience',
      title: 'Total teaching experience',
      type: 'number',
    }),
    defineField({
      name: 'registration_date',
      title: 'Total teaching experience',
      type: 'date',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'last_login',
      title: 'Last login',
      type: 'datetime',
    }),
     defineField({
      name: 'education_qualification',
      title: 'Education qualification',
      type: 'array',
      of:[
          {
            type:"string"
          }
      ],
      validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'teaching_experience',
      title: 'Teaching experience',
      type: 'array',
      of:[
          {
            type:"string"
          }
      ],
      validation: Rule => Rule.required(),
    }),
      defineField({
      name: 'reference',
      title: 'Reference',
      type: 'array',
      of:[
          {
            type:"string"
          }
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'area_of_expertise',
      title: 'Area of expertise',
      type: 'array',
      of:[
          {
            type:"string"
          }
      ],
      validation: Rule => Rule.required(),
    }),
      defineField({
      name: 'weekly_availability',
      title: 'Weekly Availability',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
      defineField({
      name: 'time_slots',
      title: 'Time slots',
      type: 'array',
      of:[
          {
            type:"datetime"
          }
      ],
      validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'certification_of_credentials',
      title: 'Certification Of Credentials',
      type: 'array',
     of:[
            {

              type:'image'
            }
            ],
      validation: Rule => Rule.required(),
    }),
     defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
      defineField({
      name: 'session_duration',
      title: 'Session duration',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'maximum_number_of_sessions',
      title: 'Maximum number of sessions',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'date_of_birth',
      title: 'Date of birth',
      type: 'date',
    }),

    defineField({
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required(),
    }),
  ],
});