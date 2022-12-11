import {EnvelopeIcon} from '@sanity/icons'

export default {
    name: 'thankyou',
    type: 'document',
      title: 'Thank You',  
      icon:    EnvelopeIcon,
      fields: [        
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'SubTitle',
          type: 'text',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 96,
          },
        },
      ]
  }