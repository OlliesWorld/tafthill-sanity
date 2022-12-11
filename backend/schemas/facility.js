import { TbBuildingCottage as icon } from 'react-icons/tb';

export default {
    name: 'facility',
    type: 'document',
    title: 'Facility',
    icon,
      fields: [ 
        {
            name: 'title',
            title: 'Title',
            type: 'string',
          },       
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },

        {
          name: 'article',
          title: 'Article',
          type: 'array',
          of: [{type: 'string'}]
        
        },
        {
            name: 'mainImage2',
            title: 'Main image2',
            type: 'image',
            options: {
              hotspot: true,
            },
          },

        {
          name: 'article2',
          title: 'Article2',
          type: 'array',
              of: [{type: 'string'}]
        },
        {
            name: 'mainImage3',
            title: 'Main image3',
            type: 'image',
            options: {
              hotspot: true,
            },
          },

        {
          name: 'article3',
          title: 'Article3',
          type: 'array',
          of: [{type: 'string'}]
        },
        {
            name: 'mainImage4',
            title: 'Main image4',
            type: 'image',
            options: {
              hotspot: true,
            },
          },

        {
          name: 'article4',
          title: 'Article4',
          type: 'array',
              of: [{type: 'string'}]
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