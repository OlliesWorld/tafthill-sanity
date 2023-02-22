import { FaHorseHead as icon } from 'react-icons/fa';
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'training',
    type: 'document',
      title: 'Training',
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
            name: 'description',
            title: 'Description',
            type: 'string',
          }),
          defineField({
            name: 'trainerImage',
            title: 'Trainer image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
          name: 'trainer',
          title: 'Trainer',
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
          name: 'trainerImage2',
          title: 'Trainer image2',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
            name: 'trainer2',
            title: 'Trainer2',
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
            name: 'trainerImage3',
            title: 'Trainer image3',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: 'trainer3',
            title: 'Trainer3',
            type: 'string',
          }),
          defineField({
            name: 'subtitle3',
            title: 'SubTitle3',
            type: 'string',
          }),
          defineField({
            name: 'body3',
            title: 'Body3',
            type: 'blockContent',
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