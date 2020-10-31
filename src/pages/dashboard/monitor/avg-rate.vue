<template>
    <div>
        <div>
            <span class="dashboard-monitor-avg-rate-number">{{ rate }}</span>
            <span class="dashboard-monitor-avg-rate-star">
                <Rate disabled allow-half v-model="rate" icon="md-star" />
            </span>
        </div>
        <div>
            <span class="dashboard-monitor-avg-rate-movement">{{ movement }}</span>
            <span class="dashboard-monitor-avg-rate-movement-desc">当前评价没有任何波动</span>
        </div>
        <div class="dashboard-monitor-avg-rate-progress">
            <Progress :stroke-width="5" :percent="star5 / starAll * 100" stroke-color="#2fc25b">
                <Icon type="md-star" /> 5：{{ star5 }}
            </Progress>
            <Progress :stroke-width="5" :percent="star4 / starAll * 100" stroke-color="#1890ff">
                <Icon type="md-star" /> 4：{{ star4 }}
            </Progress>
            <Progress :stroke-width="5" :percent="star3 / starAll * 100" stroke-color="#ffc53d">
                <Icon type="md-star" /> 4：{{ star3 }}
            </Progress>
            <Progress :stroke-width="5" :percent="star2 / starAll * 100" stroke-color="#f04864">
                <Icon type="md-star" /> 2：{{ star2 }}
            </Progress>
            <Progress :stroke-width="5" :percent="star1 / starAll * 100" stroke-color="#ff4d4f">
                <Icon type="md-star" /> 1：{{ star1 }}
            </Progress>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                rate: 4.5,
                movement: '- 0.0%',
                star5: 368,
                star4: 256,
                star3: 49,
                star2: 14,
                star1: 0
            }
        },
        computed: {
            starAll () {
                return this.star5 + this.star4 + this.star3 + this.star2 + this.star1;
            }
        }
    }
</script>
<style lang="less">
    .dashboard-monitor-avg-rate{
        &-number{
            display: inline-block;
            font-size: 48px;
            vertical-align: middle;
            margin-right: 24px;
            padding-left: 6px;
        }
        &-star{
            display: inline-block;
            vertical-align: middle;
        }
        &-movement{
            display: inline-block;
            font-size: 28px;
            color: #c5c8ce;
            vertical-align: middle;
            margin-right: 12px;
            &-desc{
                display: inline-block;
                vertical-align: middle;
                color: #808695;
            }
        }
        &-progress{
            .ivu-progress-show-info .ivu-progress-outer{
                padding-right: 80px;
                margin-right: -80px;
            }
            .ivu-progress-text{
                color: #808695;
            }
        }
    }
</style>
