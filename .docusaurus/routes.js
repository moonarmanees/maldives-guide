import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/maldives-guide/blog',
    component: ComponentCreator('/maldives-guide/blog', 'ac4'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/archive',
    component: ComponentCreator('/maldives-guide/blog/archive', 'e7d'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/authors',
    component: ComponentCreator('/maldives-guide/blog/authors', '858'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/maldives-guide/blog/authors/all-sebastien-lorber-articles', '0f1'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/authors/yangshun',
    component: ComponentCreator('/maldives-guide/blog/authors/yangshun', 'd21'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/first-blog-post',
    component: ComponentCreator('/maldives-guide/blog/first-blog-post', '3fc'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/long-blog-post',
    component: ComponentCreator('/maldives-guide/blog/long-blog-post', '37c'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/mdx-blog-post',
    component: ComponentCreator('/maldives-guide/blog/mdx-blog-post', '1ea'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/tags',
    component: ComponentCreator('/maldives-guide/blog/tags', '836'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/tags/docusaurus',
    component: ComponentCreator('/maldives-guide/blog/tags/docusaurus', '119'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/tags/facebook',
    component: ComponentCreator('/maldives-guide/blog/tags/facebook', '54a'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/tags/hello',
    component: ComponentCreator('/maldives-guide/blog/tags/hello', '175'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/tags/hola',
    component: ComponentCreator('/maldives-guide/blog/tags/hola', '1ac'),
    exact: true
  },
  {
    path: '/maldives-guide/blog/welcome',
    component: ComponentCreator('/maldives-guide/blog/welcome', 'cbf'),
    exact: true
  },
  {
    path: '/maldives-guide/markdown-page',
    component: ComponentCreator('/maldives-guide/markdown-page', 'a0d'),
    exact: true
  },
  {
    path: '/maldives-guide/docs',
    component: ComponentCreator('/maldives-guide/docs', '93b'),
    routes: [
      {
        path: '/maldives-guide/docs',
        component: ComponentCreator('/maldives-guide/docs', '369'),
        routes: [
          {
            path: '/maldives-guide/docs',
            component: ComponentCreator('/maldives-guide/docs', '418'),
            routes: [
              {
                path: '/maldives-guide/docs/appendices/appendix-a',
                component: ComponentCreator('/maldives-guide/docs/appendices/appendix-a', '548'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/foreword',
                component: ComponentCreator('/maldives-guide/docs/foreword', '078'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/intro',
                component: ComponentCreator('/maldives-guide/docs/intro', '3ed'),
                exact: true
              },
              {
                path: '/maldives-guide/docs/part1/chapter1',
                component: ComponentCreator('/maldives-guide/docs/part1/chapter1', '057'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/part1/chapter2',
                component: ComponentCreator('/maldives-guide/docs/part1/chapter2', '07e'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/part2/chapter3',
                component: ComponentCreator('/maldives-guide/docs/part2/chapter3', 'df3'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/part2/chapter4',
                component: ComponentCreator('/maldives-guide/docs/part2/chapter4', '0a3'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/part2/chapter5',
                component: ComponentCreator('/maldives-guide/docs/part2/chapter5', '156'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/part2/chapter6',
                component: ComponentCreator('/maldives-guide/docs/part2/chapter6', '4df'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/part3/chapter7',
                component: ComponentCreator('/maldives-guide/docs/part3/chapter7', '399'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/part3/chapter8',
                component: ComponentCreator('/maldives-guide/docs/part3/chapter8', 'bd9'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/part3/chapter9',
                component: ComponentCreator('/maldives-guide/docs/part3/chapter9', '161'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/part4/chapter10',
                component: ComponentCreator('/maldives-guide/docs/part4/chapter10', '2ec'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/part4/chapter11',
                component: ComponentCreator('/maldives-guide/docs/part4/chapter11', '01e'),
                exact: true,
                sidebar: "guideSidebar"
              },
              {
                path: '/maldives-guide/docs/part4/chapter12',
                component: ComponentCreator('/maldives-guide/docs/part4/chapter12', '68f'),
                exact: true,
                sidebar: "guideSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/maldives-guide/',
    component: ComponentCreator('/maldives-guide/', 'b31'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
