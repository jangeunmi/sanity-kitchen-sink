export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f917b7e5ce4e3ea40557bbd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-s93tgbc4',
                  apiId: '790443b8-fe6f-4529-aab5-4d13cccec4c1'
                },
                {
                  buildHookId: '5f917b7e5ce4e3e31e557c4a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-r4bak816',
                  apiId: '2c309c68-7535-4a97-8c91-6b3438b3ed62'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jangeunmi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-r4bak816.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
