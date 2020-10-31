<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader hidden-breadcrumb>
                <div slot="title">出差审批编号：100000</div>
                <div slot="content">
                    <DescriptionList :col="2">
                        <Description term="申请人：">Aresn</Description>
                        <Description term="审批人：">中小鱼</Description>
                        <Description term="出差事由：">与客户签署合同</Description>
                        <Description term="合同编号：">100000</Description>
                        <Description term="出差时间：">2019-07-28 - 2019-07-30</Description>
                    </DescriptionList>
                </div>
                <div slot="extra" class="ivu-text-left">
                    <DescriptionList :col="2" layout="vertical">
                        <Description>
                            <div v-color="'#808695'">状态</div>
                            <div v-font="20">待审批</div>
                        </Description>
                        <Description>
                            <div v-color="'#808695'">紧急程度</div>
                            <Tag color="red">紧急</Tag>
                        </Description>
                    </DescriptionList>
                </div>
            </PageHeader>
        </div>
        <Card title="审核流程" :bordered="false" dis-hover class="ivu-mt">
            <Steps :current="1">
                <Step title="申请" content="申请人：Aresn"></Step>
                <Step title="Leader 审批" content="审批人：中小鱼"></Step>
                <Step title="财务审批" content="审批人：Echo"></Step>
            </Steps>
        </Card>
        <Card title="基本信息" :bordered="false" dis-hover class="ivu-mt">
            <DescriptionList>
                <Description term="申请人：">Aresn</Description>
                <Description term="审批人：">中小鱼</Description>
                <Description term="出差事由：">与客户签署合同</Description>
                <Description term="合同编号：">100000</Description>
                <Description term="出差时间：">2019-07-28 - 2019-07-30</Description>
                <Description term="紧急成都：">
                    <Tag color="red">紧急</Tag>
                </Description>
            </DescriptionList>
        </Card>
        <Card title="行程信息" :bordered="false" dis-hover class="ivu-mt">
            <DescriptionList>
                <Description term="出发城市：">北京市</Description>
                <Description term="出发时间：">2019-07-28</Description>
                <Description term="返程时间：">2019-07-30</Description>
                <Description term="交通类型：">飞机</Description>
                <Description term="航班到达城市：">深圳市</Description>
            </DescriptionList>
        </Card>
        <Card title="同行人员" :bordered="false" dis-hover class="ivu-mt i-table-no-border">
            <Table :data="tableData" :columns="columns">
                <template slot-scope="{ row }" slot="department">
                    {{ departments[row.department] }}
                </template>
            </Table>
        </Card>
        <Card :bordered="false" dis-hover class="ivu-mt i-table-no-border">
            <Tabs value="action1" @on-click="handleChangeData">
                <TabPane label="操作日志一" name="action1" />
                <TabPane label="操作日志二" name="action2" />
                <TabPane label="操作日志三" name="action3" />
            </Tabs>
            <Table :columns="actionColumns" :data="actionData">
                <template slot-scope="{ row }" slot="result">
                    <Badge status="success" text="成功" v-if="row.result" />
                    <Badge status="error" text="驳回" v-else />
                </template>
            </Table>
        </Card>
    </div>
</template>
<script>
    export default {
        name: 'profile-advanced',
        data () {
            return {
                columns: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '工号',
                        key: 'id'
                    },
                    {
                        title: '所属部门',
                        slot: 'department'
                    }
                ],
                tableData: [
                    {
                        name: 'Aresn',
                        id: '001',
                        department: 'dev'
                    },
                    {
                        name: '中小鱼',
                        id: '002',
                        department: 'design'
                    },
                    {
                        name: '唐不苦',
                        id: '003',
                        department: 'pm'
                    }
                ],
                departments: {
                    dev: '研发部',
                    design: '设计部',
                    pm: '产品部'
                },
                actionColumns: [
                    {
                        title: '操作类型',
                        key: 'type',
                        minWidth: 120
                    },
                    {
                        title: '操作人',
                        key: 'user',
                        minWidth: 120
                    },
                    {
                        title: '执行结果',
                        slot: 'result',
                        minWidth: 120
                    },
                    {
                        title: '操作时间',
                        key: 'time',
                        minWidth: 120
                    },
                    {
                        title: '备注',
                        key: 'remark',
                        minWidth: 120
                    }
                ],
                actionData: []
            }
        },
        methods: {
            handleChangeData (name) {
                const data1 = [
                    {
                        type: '提交订单',
                        user: 'Aresn',
                        result: 1,
                        time: '2019-07-28 09:41:00',
                        remark: '-'
                    },
                    {
                        type: 'Leader 初审',
                        user: '中小鱼',
                        result: 0,
                        time: '2019-07-28 09:41:00',
                        remark: '不予通过'
                    },
                    {
                        type: '财务审核',
                        user: '唐不苦',
                        result: 1,
                        time: '2019-07-28 09:41:00',
                        remark: '通过'
                    },
                    {
                        type: '提交订单',
                        user: '甜筒',
                        result: 1,
                        time: '2019-07-28 09:41:00',
                        remark: '-'
                    }
                ];
                const data2 = [
                    {
                        type: 'Leader 初审',
                        user: '中小鱼',
                        result: 0,
                        time: '2019-07-28 09:41:00',
                        remark: '不予通过'
                    }
                ];
                const data3 = [
                    {
                        type: '财务审核',
                        user: '唐不苦',
                        result: 1,
                        time: '2019-07-28 09:41:00',
                        remark: '通过'
                    }
                ];

                if (name === 'action1') {
                    this.actionData = data1;
                }
                if (name === 'action2') {
                    this.actionData = data2;
                }
                if (name === 'action3') {
                    this.actionData = data3;
                }
            }
        },
        mounted () {
            this.handleChangeData('action1');
        }
    }
</script>
