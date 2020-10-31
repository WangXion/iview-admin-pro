<template>
    <div class="ivu-text-center">
        <p>{{ date | date_format('HH:mm:ss') }}</p>
        <CountUp :end="count" :duration="2" :callback="handleUpdateData" v-font="48" />
        <p>在线访客数</p>
        <p class="ivu-mt-8" v-font="12">
            <Badge status="processing" />
            <CountDown :target="limitTime" :format="format" /> 秒后更新
        </p>
    </div>
</template>
<script>
    function getCount () {
        return Math.floor(Math.random() * 200 + 50);
    }
    export default {
        data () {
            return {
                count: getCount(),
                date: new Date(),
                limitTime: (new Date()).getTime() + 5000
            }
        },
        methods: {
            handleUpdateData () {
                setTimeout(() => {
                    this.date = new Date();
                    this.count = getCount();
                    this.limitTime = (new Date()).getTime() + 5000;
                }, 3000);
            },
            format (date) {
                return parseInt(date / 1000 + 1);
            }
        }
    }
</script>
