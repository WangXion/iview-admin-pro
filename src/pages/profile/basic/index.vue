<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="基础详情页" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt i-table-no-border">
            <DescriptionList title="基本信息">
                <Description term="姓名：">Aresn</Description>
                <Description term="性别：">男</Description>
                <Description term="城市：">北京市</Description>
                <Description term="生日：">1991-05-14</Description>
                <Description term="邮箱：">aresn@iview.design</Description>
                <Description term="地址：">北京市朝阳区</Description>
            </DescriptionList>
            <Divider />
            <DescriptionList title="其它信息" :col="2">
                <Description term="姓名：">Aresn</Description>
                <Description term="性别：">男</Description>
                <Description term="城市：">北京市</Description>
                <Description term="生日：">1991-05-14</Description>
                <Description term="邮箱：">aresn@iview.design</Description>
                <Description term="地址：">北京市朝阳区</Description>
            </DescriptionList>
            <Divider />
            <DescriptionList title="表格信息" />
            <Table :columns="columns" :data="tableData">
                <template slot-scope="{ row }" slot="name">
                    <Avatar :src="row.avatar" size="small" />
                    <span class="ivu-ml-8">{{ row.name }}</span>
                </template>
                <template slot-scope="{ row }" slot="gender">
                    <template v-if="row.gender === 'male'">男</template>
                    <template v-if="row.gender === 'female'">女</template>
                </template>
            </Table>
        </Card>
    </div>
</template>
<script>
    export default {
        name: 'profile-basic',
        data () {
            return {
                columns: [
                    {
                        title: '姓名',
                        slot: 'name',
                        minWidth: 140
                    },
                    {
                        title: '性别',
                        slot: 'gender',
                        minWidth: 140
                    },
                    {
                        title: '城市',
                        key: 'city',
                        minWidth: 140
                    },
                    {
                        title: '邮箱',
                        key: 'mail',
                        minWidth: 180
                    }
                ],
                tableData: [
                    {
                        name: 'Aresn',
                        gender: 'male',
                        city: '北京市',
                        mail: 'aresn@iview.design',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        name: '中小鱼',
                        gender: 'female',
                        city: '上海市',
                        mail: 'aresn@iview.design',
                        avatar: 'https://dev-file.iviewui.com/userinfoYLhfo1S945BOLuFT96NRStYeYDFRviF5/avatar'
                    },
                    {
                        name: 'Echo',
                        gender: 'male',
                        city: '深圳市',
                        mail: 'aresn@iview.design',
                        avatar: 'https://dev-file.iviewui.com/userinfoxlXwHVwZkCQtl1Zyd1wrvF78b1rZkhfK/avatar'
                    },
                    {
                        name: '唐不苦',
                        gender: 'female',
                        city: '成都市',
                        mail: 'aresn@iview.design',
                        avatar: 'https://dev-file.iviewui.com/userinfosvaY5tb7yfnSFTTimcjy3vuSG6RC28v2/avatar'
                    },
                    {
                        name: '甜筒',
                        gender: 'female',
                        city: '北京市',
                        mail: 'aresn@iview.design',
                        avatar: 'https://dev-file.iviewui.com/userinforaP8NeQgYpmKgkpWlqZP7rfewbHiIzJY/avatar'
                    }
                ]
            }
        }
    }
</script>
