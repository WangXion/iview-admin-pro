<template>
    <div class="form-detail">
        <div class="i-layout-page-header">
            <PageHeader title="表单详情" content="表单除了提交数据，有时也用于显示只读信息。" hidden-breadcrumb />
        </div>
        <Card title="基本信息" :bordered="false" dis-hover class="ivu-mt">
            <Form :label-width="labelWidth" :label-position="labelPosition">
                <Row :gutter="24">
                    <Col v-bind="grid">
                        <FormItem label="姓名：">
                            {{ data.name }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid">
                        <FormItem label="性别：">
                            {{ data.gender === 'male' ? '男' : '女' }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid">
                        <FormItem label="城市：">
                            {{ data.city }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid">
                        <FormItem label="生日：">
                            {{ data.birthday }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid">
                        <FormItem label="邮箱：">
                            {{ data.mail }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid">
                        <FormItem label="地址：">
                            {{ data.address }}
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        </Card>
        <Card title="其它信息" :bordered="false" dis-hover class="ivu-mt">
            <Form :label-width="labelWidth" :label-position="labelPosition">
                <Row :gutter="24">
                    <Col v-bind="grid2">
                        <FormItem label="姓名：">
                            {{ data.name }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid2">
                        <FormItem label="性别：">
                            {{ data.gender === 'male' ? '男' : '女' }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid2">
                        <FormItem label="城市：">
                            {{ data.city }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid2">
                        <FormItem label="生日：">
                            {{ data.birthday }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid2">
                        <FormItem label="邮箱：">
                            {{ data.mail }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid2">
                        <FormItem label="地址：">
                            {{ data.address }}
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        </Card>
        <Card title="表格信息" :bordered="false" dis-hover class="ivu-mt i-table-no-border">
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
    import { mapState } from 'vuex';

    export default {
        name: 'form-detail',
        data () {
            return {
                grid: {
                    xl: 8,
                    lg: 8,
                    md: 12,
                    sm: 24,
                    xs: 24
                },
                grid2: {
                    xl: 12,
                    lg: 12,
                    md: 12,
                    sm: 24,
                    xs: 24
                },
                data: {
                    name: 'Aresn',
                    gender: 'male',
                    city: '北京市',
                    birthday: '1991-05-14',
                    mail: 'aresn@iview.design',
                    address: '北京市朝阳区'
                },
                columns: [
                    {
                        title: '姓名',
                        slot: 'name',
                        minWidth: 120
                    },
                    {
                        title: '性别',
                        slot: 'gender',
                        minWidth: 120
                    },
                    {
                        title: '城市',
                        key: 'city',
                        minWidth: 120
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
        },
        computed: {
            ...mapState('admin/layout', [
                'isMobile'
            ]),
            labelWidth () {
                return this.isMobile ? undefined : 140;
            },
            labelPosition () {
                return this.isMobile ? 'top' : 'right';
            }
        }
    }
</script>
<style lang="less">
    .form-detail{
        .ivu-form-item{
            margin-bottom: 12px;
        }
    }
</style>
