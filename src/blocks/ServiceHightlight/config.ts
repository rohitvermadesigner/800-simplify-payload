import type { Block } from 'payload'

export const ServiceHightlight: Block = {
  slug: 'serviceHightlight',
  interfaceName: 'ServiceHightlightBlock',
  labels: {
    singular: 'Service Highlight',
    plural: 'Service Highlights',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'para',
      type: 'textarea',
      label: 'Paragraph',
      required: true,
    },
  ],
}
