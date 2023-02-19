import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'home',
    type: 'document',
    title: 'Home',
    icon: HomeIcon,
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
        name: 'blurb',
        title: 'Blurb',
        type: 'string',
      }),
      defineField({
        name: 'blurb2',
        title: 'blurb2',
        type: 'string',
      }),
      defineField({
        name: 'subtitle2',
        title: 'Subtitle2',
        type: 'string',
      }),
      defineField({
        name: 'title2',
        title: 'Title2',
        type: 'string',
      }),
      defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      }),
      defineField({
        name: 'body2',
        title: 'Body2',
        type: 'blockContent',
      }),
      
      defineField({
        title: "Button",
        name: "button",
        type: "text",
        
      }),
      {
        name: "buttoninternalLink",
        type: "text",
        title: "Button Link",
        description: "Link to what page",
      },
      defineField({
        name: 'mason',
        title: 'Mason',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'mason2',
        title: 'Mason2',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'mason3',
        title: 'Mason3',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'mason4',
        title: 'Mason4',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        title: "Button2 Text",
        name: "button2",
        type: "text",
        
      }),
      {
        name: "button2internalLink",
        type: "text",
        description: "Link to what page",
        title: "Button2 Link",
      },
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