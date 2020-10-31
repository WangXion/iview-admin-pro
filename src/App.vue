<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
    import { on, off } from 'view-design/src/utils/dom';
    import { setMatchMedia } from 'view-design/src/utils/assist';

    import { mapMutations } from 'vuex';

    setMatchMedia();

    export default {
        name: 'app',
        methods: {
            ...mapMutations('admin/layout', [
                'setDevice'
            ]),
            handleWindowResize () {
                this.handleMatchMedia();
            },
            handleMatchMedia () {
                const matchMedia = window.matchMedia;

                if (matchMedia('(max-width: 600px)').matches) {
                    this.setDevice('Mobile');
                } else if (matchMedia('(max-width: 992px)').matches) {
                    this.setDevice('Tablet');
                } else {
                    this.setDevice('Desktop');
                }
            }
        },
        mounted () {
            on(window, 'resize', this.handleWindowResize);
            this.handleMatchMedia();
            // todo 横幅
            setTimeout(() => {
                this.$Notice.open({
                    duration: 0,
                    render: h => {
                        return h('div', [
                            h('div', {
                                class: 'ivu-mb',
                                style: {
                                    'line-height': 'normal'
                                }
                            }, '您当前正在浏览 iView Admin Pro 的示例，可能需要以下服务：'),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    icon: 'md-cart',
                                    to: 'https://pro.iviewui.com/price',
                                    target: '_blank',
                                    size: 'small'
                                },
                                class: 'ivu-mr-8'
                            }, '购买授权'),
                            h('Button', {
                                props: {
                                    icon: 'md-bookmarks',
                                    to: 'https://pro.iviewui.com/admin-pro',
                                    target: '_blank',
                                    size: 'small'
                                },
                                class: 'ivu-mr-8'
                            }, '查看文档'),
                            h('Button', {
                                props: {
                                    icon: 'md-chatboxes',
                                    to: 'https://pro.iviewui.com/consult',
                                    target: '_blank',
                                    size: 'small'
                                }
                            }, '咨询')
                        ])
                    }
                });
            }, 15000);
        },
        beforeDestroy () {
            off(window, 'resize', this.handleWindowResize);
        }
    }
</script>
