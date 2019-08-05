module.exports = {
    title: 'doli-blog',
    description: 'VuePress demo',
    serviceWorker: true,
    head: [
        ['link', {rel: 'icon', href: `/favicon.ico`}]
    ],
    base: '/',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            // 下拉列表
            {
                text: '大前端',
                items: [
                    {
                        text: '基础',
                        items: [
                            { text: 'JavaScript', link: '/web/JavaScript/test.md' },
                            { text: 'HTML', link: '' },
                        ]
                    },



                    {text: 'node', link: '/select/select2'}
                ]
            },
            {text: 'GitHub', link: 'http://liuyukuai.github.io'}
        ],
        sidebar: {
            '/web/': [
                {
                    title: 'HTML',
                    collapsable: true,
                    children: [

                    ]
                },
                {
                    title: 'JavaScript',
                    collapsable: true,
                    children: [
                        'JavaScript/test',
                    ]
                }
            ]
        }
    }
};