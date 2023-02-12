import { TbBuildingCottage as icon } from 'react-icons/tb';

import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'facility',
    type: 'document',
    title: 'Facility',
    icon,
      fields: [ 
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
          }),       
          defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
          name: 'article',
          title: 'Article',
          type: 'array',
          of: [{type: 'string'}]
        
        }),
        defineField({
            name: 'mainImage2',
            title: 'Main image2',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),

          defineField({
          name: 'article2',
          title: 'Article2',
          type: 'array',
              of: [{type: 'string'}]
        }),
        defineField({
            name: 'mainImage3',
            title: 'Main image3',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
          name: 'article3',
          title: 'Article3',
          type: 'array',
          of: [{type: 'string'}]
        }),
        defineField({
            name: 'mainImage4',
            title: 'Main image4',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
          name: 'article4',
          title: 'Article4',
          type: 'array',
              of: [{type: 'string'}]
        }),
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 96,
          },
        }),
      ]
  })