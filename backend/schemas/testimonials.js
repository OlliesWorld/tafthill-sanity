import { SiKakaotalk as icon } from 'react-icons/si';
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'testimonials',
    type: 'document',
      title: 'Testimonials',
      icon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'quote',
            type: 'text',
            title: 'Quote'
        }),
        defineField({
                name: 'name',
                type: 'string',
                title: 'Name'
            }),
            defineField({
                name: 'quote2',
                type: 'text',
                title: 'Quote2'
            }),
            defineField({
            name: 'name2',
            type: 'string',
            title: 'Name2'
        }),
        defineField({
            name: 'quote3',
            type: 'text',
            title: 'Quote3'
        }),
        defineField({
        name: 'name3',
        type: 'string',
        title: 'Name3'
        }),
        defineField({
        name: 'quote4',
        type: 'text',
        title: 'Quote4'
        }),
        defineField({
        name: 'name4',
        type: 'string',
        title: 'Name4'
        }),
        defineField({
            name: 'quote5',
            type: 'text',
            title: 'Quote5'
        }),
        defineField({
        name: 'name5',
        type: 'string',
        title: 'Name5'
        }),
        defineField({
        name: 'quote6',
        type: 'text',
        title: 'Quote6'
        }),
        defineField({
        name: 'name6',
        type: 'string',
        title: 'Name6'
        }),
        defineField({
            name: 'quote7',
            type: 'text',
            title: 'Quote7'
        }),
        defineField({
                name: 'name7',
                type: 'string',
                title: 'Name7'
            }),
            defineField({
                name: 'quote8',
                type: 'text',
                title: 'Quote8'
            }),
            defineField({
            name: 'name8',
            type: 'string',
            title: 'Name8'
        }),
        defineField({
            name: 'quote9',
            type: 'text',
            title: 'Quote9'
        }),
        defineField({
        name: 'name9',
        type: 'string',
        title: 'Name9'
        }),
        defineField({
        name: 'quote10',
        type: 'text',
        title: 'Quote10'
        }),
        defineField({
        name: 'name10',
        type: 'string',
        title: 'Name10'
        }),
        defineField({
            name: 'quote11',
            type: 'text',
            title: 'Quote11'
        }),
        defineField({
        name: 'name11',
        type: 'string',
        title: 'Name11'
        }),
        defineField({
        name: 'quote12',
        type: 'text',
        title: 'Quote12'
        }),
        defineField({
        name: 'name12',
        type: 'string',
        title: 'Name12'
        }),
        defineField({
            name: 'quote13',
            type: 'text',
            title: 'Quote13'
        }),
        defineField({
                name: 'name13',
                type: 'string',
                title: 'Name13'
            }),
            defineField({
                name: 'quote14',
                type: 'text',
                title: 'Quote14'
            }),
            defineField({
            name: 'name14',
            type: 'string',
            title: 'Name14'
        }),
        defineField({
            name: 'quote15',
            type: 'text',
            title: 'Quote15'
        }),
        defineField({
        name: 'name15',
        type: 'string',
        title: 'Name15'
        }),
        defineField({
        name: 'quote16',
        type: 'text',
        title: 'Quote16'
        }),
        defineField({
        name: 'name16',
        type: 'string',
        title: 'Name16'
        })
    ]
  })