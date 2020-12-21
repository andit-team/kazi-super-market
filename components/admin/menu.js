export const menuItems = [
    {
        id: 1,
        label: "menuitems.navigation.text",
        isTitle: true
    },
    {
        id: 2,
        label: "menuitems.dashboard.text",
        icon: "ri-dashboard-line",
        link: '/admin'
        // isMenuCollapsed: false,
        // subItems: [
        //     {
        //         id: 3,
        //         label: 'menuitems.dashboard.list.sales',
        //         link: '/admin'
        //     },
        //     {
        //         id: 4,
        //         label: 'menuitems.dashboard.list.crm',
        //         link: '/admin/dashboard/crm'
        //     },
        //     {
        //         id: 5,
        //         label: 'menuitems.dashboard.list.analytics',
        //         link: '/admin/dashboard/analytics'
        //     },
        // ]
    },
   

   
    {
        id: 22,
        label: "Products",
        icon: "fe-package",
        isMenuCollapsed: false,
        subItems: [
            {
                id: 23,
                label: "Products list",
                link: "/admin/products"
            },
            {
                id: 24,
                label: "New Product",
                link: "/admin/products/product-create"
            }
        ]
    },
    {
        id: 19,
        label: "Categories",
        icon: "fe-sliders",
        isMenuCollapsed: false,
        subItems: [
            {
                id: 20,
                label: "Parent Categories",
                link: "/admin/categories/parent"
            },
            {
                id: 21,
                label: "Sub Categories",
                link: "/admin/categories/sub"
            }
        ]
    },

    {
        id: 27,
        label: "Slider",
        icon: "fe-tag",
        link: '/admin/slider'
    },


    {
        id: 28,
        label: "Promotional Banner",
        icon: "fe-tag",
        link: '/admin/promotional-banner'
    },

    {
        id: 25,
        label: "Tags",
        icon: "fe-tag",
        link: '/admin/products/tags'
    },
    {
        id: 26,
        label: "Units",
        icon: "fe-anchor",
        link: '/admin/products/units'
    },
    {
        id: 27,
        label: "Contact",
        icon: "fe-anchor",
        link: '/admin/contact',
    },
    {
        id: 28,
        label: "Settings",
        icon: "fe-anchor",
        link: '/admin/settings',
    },
    {
        id: 29,
        label: "Subscribers",
        icon: "fe-anchor",
        link: '/admin/subscribers',
    },
    
    {
        id: 8,
        label: "menuitems.ecommerce.text",
        icon: "ri-shopping-cart-2-line",
        badge: {
            variant: "danger",
            text: "menuitems.ecommerce.badge"
        },
        isMenuCollapsed: false,
        subItems: [
            // {
            //     id: 9,
            //     label: "menuitems.ecommerce.list.products",
            //     link: "/admin/ecommerce/products"
            // },
            // {
            //     id: 10,
            //     label: "menuitems.ecommerce.list.productsgrid",
            //     link: "/admin/ecommerce/products-grid"
            // },
            {
                id: 11,
                label: 'menuitems.ecommerce.list.productdetail',
                link: '/admin/ecommerce/product-detail/1'
            },
            // {
            //     id: 12,
            //     label: 'menuitems.ecommerce.list.createproduct',
            //     link: '/admin/ecommerce/product-create'
            // },
            {
                id: 13,
                label: "menuitems.ecommerce.list.customers",
                link: "/admin/ecommerce/customers"
            },
            {
                id: 14,
                label: "menuitems.ecommerce.list.orders",
                link: "/admin/ecommerce/orders"
            },
            {
                id: 15,
                label: "menuitems.ecommerce.list.orderdetail",
                link: "/admin/ecommerce/order-detail"
            },
            {
                id: 16,
                label: "menuitems.ecommerce.list.sellers",
                link: "/admin/ecommerce/sellers"
            },
            {
                id: 17,
                label: "menuitems.ecommerce.list.cart",
                link: "/admin/ecommerce/cart"
            },
            {
                id: 18,
                label: "menuitems.ecommerce.list.checkout",
                link: "/admin/ecommerce/checkout"
            }
        ]
    },

    // {
    //     id: 19,
    //     label: 'menuitems.calendar.text',
    //     icon: 'ri-calendar-2-line',
    //     link: '/admin/apps/calendar'
    // },
    // {
    //     id: 20,
    //     label: 'menuitems.email.text',
    //     icon: 'ri-mail-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 21,
    //             label: 'menuitems.email.list.inbox',
    //             link: '/admin/email/inbox'
    //         },
    //         {
    //             id: 22,
    //             label: 'menuitems.email.list.reademail',
    //             link: '/admin/email/reademail/1'
    //         },
    //         {
    //             id: 23,
    //             label: 'menuitems.email.list.template',
    //             link: '/admin/email/templates'
    //         }
    //     ]
    // },
    // {
    //     id: 24,
    //     label: 'menuitems.companies.text',
    //     icon: 'ri-building-4-line',
    //     link: '/admin/apps/companies'
    // },
    // {
    //     id: 25,
    //     label: 'menuitems.tasks.text',
    //     icon: 'ri-task-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 26,
    //             label: 'menuitems.tasks.list.list',
    //             link: '/admin/task/list'
    //         },
    //         {
    //             id: 27,
    //             label: 'menuitems.tasks.list.detail',
    //             link: '/admin/task/detail'
    //         },
    //         {
    //             id: 28,
    //             label: 'menuitems.tasks.list.kanban',
    //             link: '/admin/task/kanban'
    //         }
    //     ]
    // },
    // {
    //     id: 29,
    //     label: 'menuitems.ticket.text',
    //     icon: 'ri-customer-service-2-line',
    //     link: '/admin/apps/tickets'
    // },
    // {
    //     id: 30,
    //     label: 'menuitems.contacts.text',
    //     icon: 'ri-profile-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 31,
    //             label: 'menuitems.contacts.list.members',
    //             link: '/admin/contacts/list'
    //         },
    //         {
    //             id: 32,
    //             label: 'menuitems.contacts.list.profile',
    //             link: '/admin/contacts/profile'
    //         }
    //     ]
    // },
    // {
    //     id: 33,
    //     label: 'menuitems.filemanager.text',
    //     icon: 'ri-folders-line',
    //     link: '/admin/apps/file-manager'
    // },
    // {
    //     id: 34,
    //     label: "menuitems.custom.text",
    //     isTitle: true
    // },
    // {
    //     id: 35,
    //     label: 'menuitems.auth.text',
    //     icon: 'ri-shield-user-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 36,
    //             label: 'menuitems.auth.list.login',
    //             link: '/admin/auth/login'
    //         },
    //         {
    //             id: 37,
    //             label: 'menuitems.auth.list.login-2',
    //             link: '/admin/auth/login-2'
    //         },
    //         {
    //             id: 38,
    //             label: 'menuitems.auth.list.register',
    //             link: '/admin/auth/register'
    //         },
    //         {
    //             id: 39,
    //             label: 'menuitems.auth.list.register-2',
    //             link: '/admin/auth/register-2'
    //         },
    //         {
    //             id: 40,
    //             label: 'menuitems.auth.list.signin-signup',
    //             link: '/admin/auth/signin-signup'
    //         },
    //         {
    //             id: 41,
    //             label: 'menuitems.auth.list.signin-signup-2',
    //             link: '/admin/auth/signin-signup-2'
    //         },
    //         {
    //             id: 42,
    //             label: 'menuitems.auth.list.recoverpwd',
    //             link: '/admin/auth/recoverpwd'
    //         },
    //         {
    //             id: 43,
    //             label: 'menuitems.auth.list.recoverpwd-2',
    //             link: '/admin/auth/recoverpwd-2'
    //         },
    //         {
    //             id: 44,
    //             label: 'menuitems.auth.list.lock-screen',
    //             link: '/admin/auth/lock-screen'
    //         },
    //         {
    //             id: 45,
    //             label: 'menuitems.auth.list.lock-screen-2',
    //             link: '/admin/auth/lock-screen-2'
    //         },
    //         {
    //             id: 46,
    //             label: 'menuitems.auth.list.logout',
    //             link: '/admin/auth/logout'
    //         },
    //         {
    //             id: 47,
    //             label: 'menuitems.auth.list.logout-2',
    //             link: '/admin/auth/logout-2'
    //         },
    //         {
    //             id: 48,
    //             label: 'menuitems.auth.list.confirm-mail',
    //             link: '/admin/auth/confirm-mail'
    //         },
    //         {
    //             id: 49,
    //             label: 'menuitems.auth.list.confirm-mail-2',
    //             link: '/admin/auth/confirm-mail-2'
    //         },
    //     ]
    // },
    // {
    //     id: 50,
    //     label: 'menuitems.extrapages.text',
    //     icon: 'ri-pages-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 51,
    //             label: 'menuitems.extrapages.list.starter',
    //             link: '/admin/extras/starter'
    //         },
    //         {
    //             id: 52,
    //             label: 'menuitems.extrapages.list.timeline',
    //             link: '/admin/extras/timeline'
    //         },
    //         {
    //             id: 53,
    //             label: 'menuitems.extrapages.list.sitemap',
    //             link: '/admin/extras/sitemap'
    //         },
    //         {
    //             id: 54,
    //             label: 'menuitems.extrapages.list.invoice',
    //             link: '/admin/extras/invoice'
    //         },
    //         {
    //             id: 55,
    //             label: 'menuitems.extrapages.list.faqs',
    //             link: '/admin/extras/faqs'
    //         },
    //         {
    //             id: 56,
    //             label: 'menuitems.extrapages.list.search-results',
    //             link: '/admin/extras/search-results'
    //         },
    //         {
    //             id: 57,
    //             label: 'menuitems.extrapages.list.pricing',
    //             link: '/admin/extras/pricing'
    //         },
    //         {
    //             id: 58,
    //             label: 'menuitems.extrapages.list.maintenance',
    //             link: '/admin/extras/maintenance'
    //         },
    //         {
    //             id: 59,
    //             label: 'menuitems.extrapages.list.comingsoon',
    //             link: '/admin/extras/coming-soon'
    //         },
    //         {
    //             id: 60,
    //             label: 'menuitems.extrapages.list.lightbox',
    //             link: '/admin/extras/lightbox'
    //         },
    //         {
    //             id: 61,
    //             label: 'menuitems.extrapages.list.error404',
    //             link: '/admin/extras/404'
    //         },
    //         {
    //             id: 61,
    //             label: 'menuitems.extrapages.list.error404-alt',
    //             link: '/admin/extras/404-alt'
    //         },
    //         {
    //             id: 62,
    //             label: 'menuitems.extrapages.list.error500',
    //             link: '/admin/extras/500'
    //         }
    //     ]
    // },
    // {
    //     id: 63,
    //     label: "menuitems.components.text",
    //     isTitle: true
    // },
    // {
    //     id: 64,
    //     label: 'menuitems.ui.text',
    //     icon: 'ri-pencil-ruler-2-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 65,
    //             label: 'menuitems.ui.list.avatars',
    //             link: '/admin/ui/avatars'
    //         },
    //         {
    //             id: 66,
    //             label: 'menuitems.ui.list.buttons',
    //             link: '/admin/ui/buttons'
    //         },
    //         {
    //             id: 67,
    //             label: 'menuitems.ui.list.cards',
    //             link: '/admin/ui/cards'
    //         },
    //         {
    //             id: 68,
    //             label: 'menuitems.ui.list.carousel',
    //             link: '/admin/ui/carousel'
    //         },
    //         {
    //             id: 69,
    //             label: 'menuitems.ui.list.dropdowns',
    //             link: '/admin/ui/dropdowns'
    //         },
    //         {
    //             id: 70,
    //             label: 'menuitems.ui.list.video',
    //             link: '/admin/ui/video'
    //         },
    //         {
    //             id: 71,
    //             label: 'menuitems.ui.list.general',
    //             link: '/admin/ui/general'
    //         },
    //         {
    //             id: 72,
    //             label: 'menuitems.ui.list.grid',
    //             link: '/admin/ui/grid'
    //         },
    //         {
    //             id: 73,
    //             label: 'menuitems.ui.list.images',
    //             link: '/admin/ui/images'
    //         },
    //         {
    //             id: 74,
    //             label: 'menuitems.ui.list.listgroup',
    //             link: '/admin/ui/list-group'
    //         },
    //         {
    //             id: 75,
    //             label: 'menuitems.ui.list.modals',
    //             link: '/admin/ui/modals'
    //         },
    //         {
    //             id: 76,
    //             label: 'menuitems.ui.list.notifications',
    //             link: '/admin/ui/notifications'
    //         },
    //         {
    //             id: 77,
    //             label: 'menuitems.ui.list.portlet',
    //             link: '/admin/ui/portlets'
    //         },
    //         {
    //             id: 78,
    //             label: 'menuitems.ui.list.progress',
    //             link: '/admin/ui/progress'
    //         },
    //         {
    //             id: 79,
    //             label: 'menuitems.ui.list.ribbons',
    //             link: '/admin/ui/ribbons'
    //         },
    //         {
    //             id: 80,
    //             label: 'menuitems.ui.list.spinners',
    //             link: '/admin/ui/spinners'
    //         },
    //         {
    //             id: 81,
    //             label: 'menuitems.ui.list.tabs',
    //             link: '/admin/ui/tabs-accordions'
    //         },
    //         {
    //             id: 82,
    //             label: 'menuitems.ui.list.tooltip',
    //             link: '/admin/ui/tooltips-popovers'
    //         },
    //         {
    //             id: 83,
    //             label: 'menuitems.ui.list.typography',
    //             link: '/admin/ui/typography'
    //         }
    //     ]
    // },
    // {
    //     id: 84,
    //     label: 'menuitems.extendedui.text',
    //     icon: 'ri-stack-line',
    //     badge: {
    //         variant: "primary",
    //         text: "menuitems.extendedui.badge"
    //     },
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 85,
    //             label: 'menuitems.extendedui.list.rangeslider',
    //             link: '/admin/extended/rangeslider'
    //         },
    //         {
    //             id: 86,
    //             label: 'menuitems.extendedui.list.sweetalert',
    //             link: '/admin/extended/sweet-alert'
    //         },
    //         {
    //             id: 87,
    //             label: 'menuitems.extendedui.list.tour',
    //             link: '/admin/extended/tour'
    //         },
    //         {
    //             id: 88,
    //             label: 'menuitems.extendedui.list.scrollspy',
    //             link: '/admin/extended/scrollspy'
    //         },
    //     ]
    // },
    // {
    //     id: 89,
    //     label: 'menuitems.widgets.text',
    //     icon: 'ri-honour-line',
    //     link: '/admin/widgets'
    // },
    // {
    //     id: 90,
    //     label: 'menuitems.icons.text',
    //     icon: 'ri-markup-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 91,
    //             label: 'menuitems.icons.list.feather',
    //             link: '/admin/icons/feather'
    //         },
    //         {
    //             id: 92,
    //             label: 'menuitems.icons.list.remix',
    //             link: '/admin/icons/remix'
    //         },
    //         {
    //             id: 93,
    //             label: 'menuitems.icons.list.boxicons',
    //             link: '/admin/icons/boxicons'
    //         },
    //         {
    //             id: 94,
    //             label: 'menuitems.icons.list.materialdesign',
    //             link: '/admin/icons/mdi'
    //         },
    //         {
    //             id: 95,
    //             label: 'menuitems.icons.list.fontawesome',
    //             link: '/admin/icons/font-awesome'
    //         },
    //         {
    //             id: 96,
    //             label: 'menuitems.icons.list.weather',
    //             link: '/admin/icons/weather'
    //         }
    //     ]
    // },
    // {
    //     id: 97,
    //     label: 'menuitems.forms.text',
    //     icon: 'ri-eraser-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 98,
    //             label: 'menuitems.forms.list.elements',
    //             link: '/admin/forms/elements'
    //         },
    //         {
    //             id: 99,
    //             label: 'menuitems.forms.list.advanced',
    //             link: '/admin/forms/advanced'
    //         },
    //         {
    //             id: 100,
    //             label: 'menuitems.forms.list.validation',
    //             link: '/admin/forms/validation'
    //         },
    //         {
    //             id: 101,
    //             label: 'menuitems.forms.list.wizard',
    //             link: '/admin/forms/wizard'
    //         },
    //         {
    //             id: 102,
    //             label: 'menuitems.forms.list.mask',
    //             link: '/admin/forms/mask'
    //         },
    //         {
    //             id: 103,
    //             label: 'menuitems.forms.list.editor',
    //             link: '/admin/forms/quill'
    //         },
    //         {
    //             id: 104,
    //             label: 'menuitems.forms.list.fileupload',
    //             link: '/admin/forms/file-uploads'
    //         }
    //     ]
    // },
    // {
    //     id: 105,
    //     label: 'menuitems.tables.text',
    //     icon: 'ri-table-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 106,
    //             label: 'menuitems.tables.list.basic',
    //             link: '/admin/tables/basic'
    //         },
    //         {
    //             id: 107,
    //             label: 'menuitems.tables.list.advanced',
    //             link: '/admin/tables/advanced'
    //         },
    //     ]
    // },
    // {
    //     id: 108,
    //     label: 'menuitems.charts.text',
    //     icon: 'ri-bar-chart-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 109,
    //             label: 'menuitems.charts.list.apex',
    //             link: '/admin/charts/apex'
    //         },
    //         {
    //             id: 109,
    //             label: 'menuitems.charts.list.chartjs',
    //             link: '/admin/charts/chartjs'
    //         },
    //         {
    //             id: 109,
    //             label: 'menuitems.charts.list.c3',
    //             link: '/admin/charts/c3'
    //         },
    //         {
    //             id: 109,
    //             label: 'menuitems.charts.list.chartist',
    //             link: '/admin/charts/chartist'
    //         },
    //         {
    //             id: 109,
    //             label: 'menuitems.charts.list.knob',
    //             link: '/admin/charts/knob'
    //         }
    //     ]
    // },
    // {
    //     id: 110,
    //     label: 'menuitems.maps.text',
    //     icon: 'ri-map-pin-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 111,
    //             label: 'menuitems.maps.list.googlemap',
    //             link: '/admin/maps/google'
    //         }
    //     ]
    // },
    // {
    //     id: 112,
    //     label: "menuitems.multilevel.text",
    //     icon: "ri-share-line",
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 113,
    //             label: "menuitems.multilevel.list.level1.1",
    //             link: "javascript: void(0);",
    //         },
    //         {
    //             id: 114,
    //             label: "menuitems.multilevel.list.level1.2",
    //             isMenuCollapsed: false,
    //             subItems: [
    //                 {
    //                     id: 115,
    //                     label: "menuitems.multilevel.list.level1.level2.1",
    //                     link: "javascript: void(0);"
    //                 },
    //                 {
    //                     id: 116,
    //                     label: "menuitems.multilevel.list.level1.level2.2",
    //                     link: "/admin/level2.2"
    //                 }
    //             ]
    //         }
    //     ]
    // }
];