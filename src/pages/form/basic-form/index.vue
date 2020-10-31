<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="基础表单" content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。表单域标签也可支持响应式。" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <Row>
                <Col :xl="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}" :md="{span: 16, offset: 4}" :sm="{span: 20, offset: 2}" :xs="24">
                    <Form ref="form" :model="data" :rules="rules" :label-width="labelWidth" :label-position="labelPosition">
                        <FormItem label="会议名称：" prop="title" label-for="title">
                            <Input v-model="data.title" placeholder="会议的名称" element-id="title" />
                        </FormItem>
                        <FormItem label="会议内容：" prop="content" label-for="content">
                            <Input v-model="data.content" placeholder="会议的内容简要" element-id="content" />
                        </FormItem>
                        <FormItem label="起止时间：" prop="date" label-for="date">
                            <DatePicker v-model="data.date" type="datetimerange" placeholder="选择会议的起止时间" v-width="'100%'" element-id="date" />
                        </FormItem>
                        <FormItem label="会议地点：" prop="room" label-for="room">
                            <Select v-model="data.room" filterable placeholder="请选择会议室" element-id="room">
                                <Option value="1" label="1 号会议室" />
                                <Option value="2" label="2 号会议室" />
                                <Option value="3" label="3 号会议室" />
                                <Option value="4" label="4 号会议室" />
                                <Option value="5" label="5 号会议室" />
                            </Select>
                        </FormItem>
                        <FormItem prop="users" label-for="users">
                            <p slot="label">参会者<span v-color="'#808695'">（选填）</span>：</p>
                            <Select v-model="data.users" multiple filterable placeholder="请选择参会人员" element-id="users">
                                <Option v-for="user in users" :key="user.name" :value="user.name" :label="user.name">
                                    <Avatar :src="user.avatar" size="small" />
                                    <span class="ivu-pl-8">{{ user.name }}</span>
                                </Option>
                            </Select>
                        </FormItem>
                        <FormItem props="remark" label-for="remark">
                            <p slot="label">备注<span v-color="'#808695'">（选填）</span>：</p>
                            <Input v-model="data.remark" type="textarea" placeholder="备注" element-id="remark" />
                        </FormItem>
                        <FormItem label="视频支持：" props="video" label-for="video">
                            <RadioGroup v-model="data.video" element-id="video">
                                <Radio :label="1">需要</Radio>
                                <Radio :label="0">不需要</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" :loading="loading" @click="handleSubmit">提交</Button>
                            <Button class="ivu-ml">保存</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        </Card>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        name: 'form-basic-form',
        data () {
            return {
                data: {
                    title: '',
                    content: '',
                    date: [],
                    room: '',
                    users: [],
                    remark: '',
                    video: 0
                },
                rules: {
                    title: [
                        { required: true, message: '请输入会议的名称', trigger: 'blur' }
                    ],
                    content: [
                        { required: true, message: '请输入会议的内容简要', trigger: 'blur' }
                    ],
                    date: [
                        {
                            required: true,
                            type: 'array',
                            message: '请选择会议的起止时间',
                            trigger: 'change',
                            fields: {
                                0: {
                                    type: 'date',
                                    message: '请输入会议的内容简要'
                                },
                                1: {
                                    type: 'date',
                                    message: '请输入会议的内容简要'
                                }
                            }
                        }
                    ],
                    room: [
                        { required: true, message: '请选择会议室', trigger: 'change' }
                    ]
                },
                users: [
                    {
                        name: 'Aresn',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        name: '中小鱼',
                        avatar: 'https://dev-file.iviewui.com/userinfoYLhfo1S945BOLuFT96NRStYeYDFRviF5/avatar'
                    },
                    {
                        name: 'Echo',
                        avatar: 'https://dev-file.iviewui.com/userinfoxlXwHVwZkCQtl1Zyd1wrvF78b1rZkhfK/avatar'
                    },
                    {
                        name: '唐不苦',
                        avatar: 'https://dev-file.iviewui.com/userinfosvaY5tb7yfnSFTTimcjy3vuSG6RC28v2/avatar'
                    },
                    {
                        name: '甜筒',
                        avatar: 'https://dev-file.iviewui.com/userinforaP8NeQgYpmKgkpWlqZP7rfewbHiIzJY/avatar'
                    }
                ],
                loading: false
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
        },
        methods: {
            handleSubmit () {
                this.$refs.form.validate((valid) => {
                    this.loading = true;
                    if (valid) {
                        setTimeout(() => {
                            this.$Message.success('会议室预定成功!');
                            this.loading = false;
                        }, 2000);
                    } else {
                        this.loading = false;
                    }
                });
            }
        }
    }
</script>
