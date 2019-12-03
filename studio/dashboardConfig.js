export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5de676b9860cbe89baf70f6f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-test-studio-reqgs2n9',
                  apiId: '63ba1050-049e-4c30-970c-54e156834d56'
                },
                {
                  buildHookId: '5de676b900068e7dce08048a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-test-web-mr1jhxwm',
                  apiId: 'e0625ad9-d6db-40e4-9999-565d7061f388'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benpjenkins/sanity-gatsby-blog-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-test-web-mr1jhxwm.netlify.com', category: 'apps'}
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
