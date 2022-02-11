export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6205b7badecd0200a20f9fdd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tc7wcvfn',
                  apiId: '851fffff-39e0-4d6f-a8cb-847ba65d5423'
                },
                {
                  buildHookId: '6205b7ba29bc5f00a9c51bb1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4x9jskyb',
                  apiId: '136d6a2b-09fe-48df-8994-1c87f378ccf4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PyePye001/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4x9jskyb.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
