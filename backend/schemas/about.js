import { BsPeopleFill as icon } from 'react-icons/bs';
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'about',
    type: 'document',
      title: 'About',
      icon,
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
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'blockContent',
        }),
        defineField({
            name: 'title2',
            title: 'Title2',
            type: 'string',
          }),
          defineField({
            name: 'subtitle2',
            title: 'SubTitle2',
            type: 'string',
          }),
          defineField({
            name: 'body2',
            title: 'Body2',
            type: 'blockContent',
          }),
          defineField({
              name: 'gallery',
              title: 'Gallery',
              type: 'array',
              of: [{type: 'image'}]
          }),
          defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 96,
          }
          })
      ]
  })