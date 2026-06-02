export default {
  name: 'project',
  title: 'Project / Case Study',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'company',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Web design & Web App development',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'type',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'Web App', value: 'webapp' }
        ],
        layout: 'radio'
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'arrangeNumber',
      title: 'Arrange Number / Hierarchy ID',
      type: 'number',
      description: 'Used to sort the projects on the site. Lower numbers appear first.',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'result',
      title: 'Result Highlights (Card Subtext)',
      type: 'string',
      description: 'e.g. Improved user engagement by 20%',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Main Grid Image (File Upload)',
      type: 'image',
      description: 'You can upload an image file or use the external URL fallback.',
      options: { hotspot: true }
    },
    {
      name: 'imageUrl',
      title: 'Main Grid Image (External URL Fallback)',
      type: 'url',
      description: 'Fallback if no image file is uploaded'
    },
    {
      name: 'images',
      title: 'Showcase Preview Mockups (Files Upload)',
      type: 'array',
      description: 'Upload exactly 4 images (representing [0] hero main mockup, [1] large desktop showcase preview, [2] and [3] double mobile preview grids)',
      of: [{ type: 'image' }],
      validation: (Rule: any) => Rule.max(4)
    },
    {
      name: 'country',
      title: 'Country Name',
      type: 'string',
      description: 'e.g. United Kingdom, India, USA',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'flagCode',
      title: 'Country Flag Code (2-letter)',
      type: 'string',
      description: 'e.g. gb, in, us (lowercase 2-letter ISO code from flagcdn.com)',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'liveWebsiteUrl',
      title: 'Live Website URL',
      type: 'url',
      description: 'Adds a "Live Website" redirect button to the case study'
    },
    {
      name: 'heroBgImage',
      title: 'Hero Background Image (File Upload)',
      type: 'image',
      description: 'Background image for the case study page hero'
    },
    {
      name: 'heroBgImageUrl',
      title: 'Hero Background Image (External URL Fallback)',
      type: 'url'
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      description: 'e.g. Motorsport & Automotive',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'platform',
      title: 'Platform Type',
      type: 'string',
      description: 'e.g. Responsive Website, Web Application',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'The main headline shown in the case study page',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'heroTagline',
      title: 'Hero Tagline (SEO Meta)',
      type: 'string',
      description: 'Subtext or summary for SEO metadata',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'abstract',
      title: 'Abstract Description',
      type: 'text',
      description: 'Full summary introduction text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'challenges',
      title: 'Challenges & Solutions',
      type: 'object',
      fields: [
        {
          name: 'problem',
          title: 'Problem Description',
          type: 'text',
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'solution',
          title: 'Solution Description',
          type: 'text',
          validation: (Rule: any) => Rule.required()
        }
      ],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'results',
      title: 'Results Stats Section',
      type: 'object',
      fields: [
        {
          name: 'intro',
          title: 'Results Intro Paragraph',
          type: 'text',
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'stats',
          title: 'Stats Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'value', title: 'Metric Value (e.g. 100%, 4+, UK)', type: 'string', validation: (Rule: any) => Rule.required() },
                { name: 'label', title: 'Metric Label (e.g. Mobile Responsive)', type: 'string', validation: (Rule: any) => Rule.required() }
              ]
            }
          ],
          validation: (Rule: any) => Rule.max(3)
        }
      ],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'extraImages',
      title: 'Four Image Grids (Files Upload)',
      type: 'array',
      description: 'Upload exactly 4 images for the showcase grid section',
      of: [{ type: 'image' }],
      validation: (Rule: any) => Rule.max(4)
    }
  ]
}
