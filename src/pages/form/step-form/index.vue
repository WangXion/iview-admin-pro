<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="分步表单" content="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <Row>
                <Col :xl="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}" :md="{span: 16, offset: 4}" :sm="{span: 20, offset: 2}" :xs="24">
                    <div class="ivu-p ivu-mb">
                        <Steps :current="currentStep">
                            <Step title="填写转账信息"></Step>
                            <Step title="确认转账信息"></Step>
                            <Step title="完成"></Step>
                        </Steps>
                    </div>
                    <step1 v-if="currentStep === 0" @on-next-step="(data) => handleSetStep(1, data)" />
                    <step2 v-if="currentStep === 1" :info-data="data" @on-next-step="(data) => handleSetStep(2)" @on-prev-step="handleSetStep(0)" />
                </Col>
            </Row>
            <step3 v-if="currentStep === 2" :info-data="data" @on-prev-step="handleSetStep(0)" />
            <div v-if="currentStep === 0">
                <Divider />
                <Alert>
                    <strong v-color="'#808695'">说明</strong>
                    <div slot="desc" v-color="'#808695'">
                        <p>
                            <strong>转账到微信</strong>
                        </p>
                        <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
                        <p>
                            <strong>转账到支付宝</strong>
                        </p>
                        <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
                    </div>
                </Alert>
            </div>
        </Card>
    </div>
</template>
<script>
    import step1 from './step1';
    import step2 from './step2';
    import step3 from './step3';

    export default {
        name: 'form-step-form',
        components: { step1, step2, step3 },
        data () {
            return {
                currentStep: 0,
                data: {}
            }
        },
        methods: {
            handleSetStep (current, data) {
                this.currentStep = current;
                if (data) this.data = Object.assign(this.data, data);
            }
        }
    }
</script>
