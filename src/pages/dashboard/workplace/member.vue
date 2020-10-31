<template>
    <div>
        <Row type="flex" justify="center" align="middle" v-for="item in data" :key="item.id" class="ivu-mb">
            <Col span="5" class="ivu-text-center">
                <Avatar :src="item.avatar" />
            </Col>
            <Col span="15">
                <div>
                    <strong>{{ item.name }}</strong>
                </div>
                <div>
                    <span v-font="12" v-color="'#808695'">{{ item.job }}</span>
                </div>
            </Col>
            <Col span="4">
                <Tag color="green" v-if="item.status === 1">在线</Tag>
                <Tag color="red" v-if="item.status === 0">离线</Tag>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data: [
                    {
                        id: 1,
                        avatar: 'https://dev-file.iviewui.com/userinfoYLhfo1S945BOLuFT96NRStYeYDFRviF5/avatar',
                        name: '中小鱼',
                        job: 'Designer',
                        userLink: 'https://dev.iviewui.com/user/1023876335417823232',
                        status: 1
                    },
                    {
                        id: 2,
                        avatar: 'https://dev-file.iviewui.com/userinfoxlXwHVwZkCQtl1Zyd1wrvF78b1rZkhfK/avatar',
                        name: 'Echo',
                        job: 'Developer',
                        userLink: 'https://dev.iviewui.com/user/1023207710763651072',
                        status: 1
                    },
                    {
                        id: 3,
                        avatar: 'https://dev-file.iviewui.com/userinfosvaY5tb7yfnSFTTimcjy3vuSG6RC28v2/avatar',
                        name: '唐不苦',
                        job: 'Product Manager',
                        userLink: 'https://dev.iviewui.com/user/1024122983062573056',
                        status: 0
                    },
                    {
                        id: 4,
                        avatar: 'https://dev-file.iviewui.com/userinforaP8NeQgYpmKgkpWlqZP7rfewbHiIzJY/avatar',
                        name: '甜筒',
                        job: 'Manager',
                        userLink: 'https://dev.iviewui.com/user/1020220337314467840',
                        status: 1
                    }
                ]
            }
        }
    }
</script>
