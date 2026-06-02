export default {
  name: 'testimonial',
  title: 'Client Testimonial',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'role',
      title: 'Author Role',
      type: 'string',
      description: 'e.g. Founder, CEO, Creative Director',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'avatar',
      title: 'Client Avatar (File Upload)',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'avatarUrl',
      title: 'Client Avatar (External URL Fallback)',
      type: 'url'
    },
    {
      name: 'before',
      title: 'Quote Part 1 (Before Rayvok)',
      type: 'text',
      description: 'e.g. Our old website looked like a side project...',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'during',
      title: 'Quote Part 2 (During rayvok)',
      type: 'text',
      description: 'e.g. Rayvok rebuilt the site around the offer...',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'after',
      title: 'Quote Part 3 (After Rayvok results)',
      type: 'text',
      description: 'e.g. Within two weeks of launch, three qualified leads reached out...',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'arrangeNumber',
      title: 'Arrange Number',
      type: 'number',
      description: 'Sort ordering position in the slider',
      validation: (Rule: any) => Rule.required()
    }
  ]
}
