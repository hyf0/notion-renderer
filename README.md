# notion-renderer

Renderer for notion using Official Notion API.

[Vercel Preview](http://notion-renderer.ihyf.me/)

# Features

- Official Notion API

## Supported Blocks

- ✅ Fully supported
- ⚠️ Partially supported
- ❌ WIP

| Block Type               | Supported | Block Type Enum        |
| ------------------------ | --------- | ---------------------- |
| Page                     | ❌        | `page`                 |
| Text                     | ⚠️        | `text`                 |
| Bookmark                 | ⚠️        | `bookmark`             |
| Bulleted List            | ❌        | `bulleted_list`        |
| Numbered List            | ❌        | `numbered_list`        |
| Heading 1                | ✅        | `header`               |
| Heading 2                | ✅        | `sub_header`           |
| Heading 3                | ✅        | `sub_sub_header`       |
| Quote                    | ✅        | `quote`                |
| Callout                  | ⚠️        | `callout`              |
| Equation (block)         | ❌        | `equation`             |
| Equation (inline)        | ❌        | `text`                 |
| Todos (checkboxes)       | ❌        | `to_do`                |
| Table Of Contents        | ❌        | `table_of_contents`    |
| Divider                  | ✅        | `divider`              |
| Column                   | ✅        | `column`               |
| Column List              | ⚠️        | `column_list`          |
| Toggle                   | ⚠️        | `toggle`               |
| Image                    | ⚠️        | `image`                |
| Embed                    | ❌        | `embed`                |
| Video                    | ❌        | `video`                |
| Figma                    | ❌        | `figma`                |
| Google Maps              | ❌        | `maps`                 |
| Google Drive             | ❌        | `drive`                |
| Tweet                    | ❌        | `tweet`                |
| PDF                      | ❌        | `pdf`                  |
| Audio                    | ❌        | `audio`                |
| File                     | ❌        | `file`                 |
| Link                     | ⚠️        | `text`                 |
| Page Link                | ⚠️        | `page`                 |
| External Page Link       | ⚠️        | `text`                 |
| Code (block)             | ⚠️        | `code`                 |
| Code (inline)            | ✅        | `text`                 |
| Collections              | ❌        |                        |
| Collection View          | ❌        | `collection_view`      |
| Collection View Table    | ❌        | `collection_view`      |
| Collection View Gallery  | ❌        | `collection_view`      |
| Collection View Board    | ❌        | `collection_view`      |
| Collection View List     | ❌        | `collection_view`      |
| Collection View Calendar | ❌        | `collection_view`      |
| Collection View Page     | ❌        | `collection_view_page` |

# Packages

- @notion-renderer/react
- @notion-renderer/vue(WIP)
- @notion-renderer/client
- @notion-renderer/shared
