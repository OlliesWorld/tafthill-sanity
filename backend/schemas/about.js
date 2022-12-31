import { BsPeopleFill as icon } from 'react-icons/bs';

export default{
    name: 'about',
    type: 'document',
      title: 'About',
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
          name: 'body',
          title: 'Body',
          type: 'blockContent',
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
            name: 'body2',
            title: 'Body2',
            type: 'blockContent',
          },
          {
              name: 'gallery',
              title: 'Gallery',
              type: 'array',
              of: [{type: 'image'}]
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