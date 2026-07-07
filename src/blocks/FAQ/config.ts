import type { Block } from 'payload'

export const FAQ: Block = {
  slug: 'faq',
  interfaceName: 'FAQBlock',
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Just in case you were wondering...',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Find answers to common questions about our services.',
    },
    {
      name: 'items',
      type: 'array',
      label: 'FAQ Items',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
