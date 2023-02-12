import {EnvelopeIcon} from '@sanity/icons'

import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'thankyou',
    type: 'document',
    title: 'Thank You',  
      icon:    EnvelopeIcon,
      fields: [        
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'SubTitle',
          type: 'text',
        }),
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 96,
          }
        }),
      ]
  })