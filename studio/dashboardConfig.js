export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5dff4e3264a22c15279759cc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-t64rgfxz',
                  apiId: '463aa857-0b31-4a68-8a9f-80fe2d543188'
                },
                {
                  buildHookId: '5dff4e33e0f80ae217286a71',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-274r1mos',
                  apiId: '4ac988ea-f6bc-4582-8569-d5cbbe1a530d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rvpalivoda/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-274r1mos.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
