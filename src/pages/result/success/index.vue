<template>
    <div>
        <Card :bordered="false" dis-hover>
            <div class="ivu-mt ivu-mb ivu-pt ivu-pb">
                <Result type="success" title="提交成功">
                    <div slot="desc">
                        提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。灰色区域可以显示一些补充的信息。
                    </div>
                    <div slot="extra">
                        已提交申请，等待部门审核。
                    </div>
                    <div slot="actions">
                        <Button type="primary">返回列表</Button>
                        <Button>查看项目</Button>
                        <Button>打印</Button>
                    </div>
                </Result>
            </div>
        </Card>
    </div>
</template>
<script>
    export default {
        name: 'result-success',
        data () {
            return {

            }
        }
    }
</script>
