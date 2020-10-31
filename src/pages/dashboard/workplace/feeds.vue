<template>
    <div>
        <div v-for="(item, index) in feeds" :key="item.id">
            <Row type="flex" justify="center" align="middle">
                <Col span="3" class="ivu-text-center">
                    <Avatar :src="item.avatar" size="large" />
                </Col>
                <Col span="21">
                    <div>
                        <strong>
                            <i-link :to="item.userLink" target="_blank">{{ item.name }}</i-link>
                        </strong>
                        {{ item.desc.text }}
                        <i-link :to="item.desc.link" target="_blank" link-color>{{ item.desc.title }}</i-link>
                        <template v-if="item.extra">
                            {{ item.extra.text }}
                            <i-link :to="item.extra.link" target="_blank" link-color>{{ item.extra.title }}</i-link>
                        </template>
                    </div>
                    <div>
                        <Time :time="item.time" v-font="12" v-color="'#808695'" />
                    </div>
                </Col>
            </Row>
            <Divider v-if="index + 1 !== feeds.length" />
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                feeds: [
                    {
                        id: 1,
                        avatar: 'https://dev-file.iviewui.com/userinfoYLhfo1S945BOLuFT96NRStYeYDFRviF5/avatar',
                        name: '中小鱼',
                        userLink: 'https://dev.iviewui.com/user/1023876335417823232',
                        desc: {
                            text: '关注了',
                            title: 'Aresn',
                            link: 'https://dev.iviewui.com/user/1016955559255085056'
                        },
                        time: 1559360120000
                    },
                    {
                        id: 2,
                        avatar: 'https://dev-file.iviewui.com/userinfoxlXwHVwZkCQtl1Zyd1wrvF78b1rZkhfK/avatar',
                        name: 'Echo',
                        userLink: 'https://dev.iviewui.com/user/1023207710763651072',
                        desc: {
                            text: '提出问题',
                            title: 'Table 中使用 Poptip 遮挡问题',
                            link: 'https://dev.iviewui.com/issues/1129319372960174080'
                        },
                        time: 1558755436000
                    },
                    {
                        id: 3,
                        avatar: 'https://dev-file.iviewui.com/userinfosvaY5tb7yfnSFTTimcjy3vuSG6RC28v2/avatar',
                        name: '唐不苦',
                        userLink: 'https://dev.iviewui.com/user/1024122983062573056',
                        desc: {
                            text: '发表文章',
                            title: 'Vue Seo 页面优化之 Nuxt 服务器渲染',
                            link: 'https://dev.iviewui.com/articles/1032579816609681408'
                        },
                        time: 1554197114000
                    },
                    {
                        id: 4,
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        name: 'Aresn',
                        userLink: 'https://dev.iviewui.com/user/1016955559255085056',
                        desc: {
                            text: '回复了',
                            title: 'awj',
                            link: 'https://dev.iviewui.com/user/1054332337954885632'
                        },
                        extra: {
                            text: '的问题',
                            title: 'Vue 中怎么实现双向滚动定位？',
                            link: 'https://dev.iviewui.com/issues/1118420619948593152'
                        },
                        time: 1554090494000
                    },
                    {
                        id: 5,
                        avatar: 'https://dev-file.iviewui.com/userinforaP8NeQgYpmKgkpWlqZP7rfewbHiIzJY/avatar',
                        name: '甜筒',
                        userLink: 'https://dev.iviewui.com/user/1020220337314467840',
                        desc: {
                            text: '兑换了物品',
                            title: '《Vue.js 实战》',
                            link: 'https://dev.iviewui.com/shop/1016967896695443456'
                        },
                        time: 1551425114000
                    },
                    {
                        id: 6,
                        avatar: 'https://dev-file.iviewui.com/userinfoQdhnYDF2VFOrQSTPR9963k8BbMjeqyTm/avatar',
                        name: '冷月呆呆',
                        userLink: 'https://dev.iviewui.com/user/1023157012558647296',
                        desc: {
                            text: '回复了',
                            title: 'NB阿卡',
                            link: 'https://dev.iviewui.com/user/1023109757180973056'
                        },
                        extra: {
                            text: '的文章',
                            title: '关于 Modal 对话框的异步关闭',
                            link: 'https://dev.iviewui.com/articles/1026359475512152064'
                        },
                        time: 1533621138000
                    },
                    {
                        id: 7,
                        avatar: 'https://dev-file.iviewui.com/userinfohRf8MIX3RrQHbT9k2aX05v1pTwl0owTh/avatar',
                        name: 'ludd',
                        userLink: 'https://dev.iviewui.com/user/1023736598086422528',
                        desc: {
                            text: '关闭了问题',
                            title: 'Table 可以合并单元格吗',
                            link: 'https://dev.iviewui.com/issues/1115870747898810368'
                        },
                        time: 1528005545000
                    }
                ]
            }
        }
    }
</script>
