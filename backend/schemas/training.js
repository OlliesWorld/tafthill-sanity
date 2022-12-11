import { FaHorseHead as icon } from 'react-icons/fa';

export default {
    name: 'training',
    type: 'document',
      title: 'Training',
      icon,
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
          type: 'string',
        },
 
        {
          name: 'article1',
          title: 'Article1',
          type: 'text',
        
        },
        {
            name: 'title2',
            title: 'Title2',
            type: 'string',
          },
        {
            name: 'subtitle2',
            title: 'SubTitle2',
            type: 'string',
          },
        {
            name: 'article2',
            title: 'Article2',
            type: 'text',
          
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
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
              hotspot: true,
            },
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