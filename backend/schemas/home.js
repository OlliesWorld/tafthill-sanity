import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'home',
    type: 'document',
    title: 'Home',
    icon: HomeIcon,
    fields: [    
      defineField({
        name: 'gallery',
        title: 'Gallery',
        type: 'array',
        of: [{type: 'image'}]
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
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
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