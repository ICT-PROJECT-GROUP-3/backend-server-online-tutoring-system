import {defineType, defineField, defineArrayMember} from 'sanity'
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
import slugify from 'some-off-the-shelf-slugifier'

async function myAsyncSlugifier(input, schemaType, context) {
  const slug = slugify(input)
  const {getClient} = context
  const client = getClient({apiVersion: '2021-10-21'})
  const query = 'count(*[_type=="tutor" && slug.current == $slug]{_id})'
  const params = {slug: slug}
  return client.fetch(query, params).then((count) => {
    console.log('Tutors with identical slug', count)
    return `${slug}-${count + 1}`
  })
  return slug
}

export default defineType({
  name: 'tutor',
  title: 'Tutor',
  type: 'document',
  fields: [
    defineField({
      name: 'fullname',
      title: 'Full Name',
      type: 'string',
    
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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: myAsyncSlugifier,
        isUnique: isUniqueAcrossAllDocuments
      }
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
      name:"tutor_payments",
      title:"has paid",
      type:"boolean",
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
    }),
     defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
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
      options: {
        accept: '.pdf,.doc,.docx', // Specify the file extensions you want to allow
      },
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
    }),
      defineField({
      name: 'references',
      title: 'Reference',
      type: 'array',
      of:[
          {
            type:"string"
          }
      ],
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
    }),
     defineField({
      name: 'certification_of_credentials',
      title: 'Certification Of Credentials',
      type: 'array',
      of:[
            {
              type:'file'
            }],
            options: {
        accept: '.pdf,.doc,.docx', // Specify the file extensions you want to allow
      },
    }),
     defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
      defineField({
      name: 'session_duration',
      title: 'Session duration',
      type: 'number',
    }),
    defineField({
      name: 'maximum_number_of_sessions',
      title: 'Maximum number of sessions in a week',
      type: 'number',
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
      ],
      options: {
        accept: '.pdf,.doc,.docx', // Specify the file extensions you want to allow
      },
    }),
     defineField({
         title: 'Tutor Location',
         name: 'geo_location',
         type: 'geopoint'
       }),
  ],
});