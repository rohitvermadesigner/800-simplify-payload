import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

const submenuFields = [
  link({
    appearances: false,
  }),
]

const childMenuFields = [
  link({
    appearances: false,
  }),
  {
    name: 'subItems',
    type: 'array' as const,
    label: 'Submenu items',
    fields: submenuFields,
    maxRows: 12,
    admin: {
      initCollapsed: true,
      components: {
        RowLabel: '@/Header/RowLabel#RowLabel',
      },
    },
  },
]

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'subItems',
          type: 'array',
          label: 'Submenu items',
          fields: childMenuFields,
          maxRows: 12,
          admin: {
            initCollapsed: true,
            components: {
              RowLabel: '@/Header/RowLabel#RowLabel',
            },
          },
        },
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
