<script>
/**
 * Starter component
 */
export default {
    head() {
        return {
            title: `${this.title} | Kazissupermarket - Nuxtjs Responsive Admin Dashboard Template`
        }
    },
    data() {
        return {
            title: 'Starter',
            items: [{
                    text: 'Kazissupermarket',
                    href: '/',
                },
                {
                    text: 'Pages',
                    href: '/',
                },
                {
                    text: 'Starter',
                    active: true,
                },
            ],
        }
    },
    middleware: 'admin-auth'
}
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
</div>
</template>
