import type { Client } from '@notionhq/client'

export type GetPageResponse = Awaited<ReturnType<Client['pages']['retrieve']>>
