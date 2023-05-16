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
      ]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
     }),
    defineField({
      name: 'profile_picture',
      title: 'Profile Picture',
      type: 'image',
     }),
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
      "title": "Tutor Video",
      "name": "tutor_video",
      "type": "mux.video",
      validation: Rule => Rule.required().custom(video => {
        if (video) {
          if (video.status === 'ready') {
            return true;
          }
          return 'The video must be in the "ready" status.';
        }
        return true;
      }),
      options: {
      allowedResolutions: ['hd', 'sd'],
      captions: true
    },
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
      title: 'Registration date',
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
            type:"file"
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

              type:'file'
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
      title: 'GPS Coordinates',
      name: 'geo_coordinates',
      type: 'geopoint'
    }),
      defineField({
      name: 'session_duration',
      title: 'Session duration',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'maximum_number_of_sessions',
      title: 'Maximum number of sessions in a week',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phone_number',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'date_of_birth',
      title: 'Date of birth',
      type: 'date',
    }),
    defineField({
      title: 'Mock Video',
      name: 'mock_video',
      type: 'mux.video',
    }),
     defineField({
      title: 'Personal details',
      name: 'identity',
      type: 'array',
      of:[
        {
          type:"file"
        }
      ]
    }),
     defineField({
      title: 'Profile Picture',
      name: 'profile_picture',
      type: 'file',
      options: {
         hotspot: true // <-- Defaults to false
     },
    }),
     defineField({
         title: 'Tutor Location',
         name: 'geo_location',
         type: 'geopoint'
       }),
  ],
});