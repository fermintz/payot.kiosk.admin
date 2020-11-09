<template>
  <div class="time-statistics">
    <div class="search-opt">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <th>기간검색</th>
          <td>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <input
                  type="text"
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                >
              </template>
              <v-date-picker v-model="date" no-title scrollable type="month">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>          
          </td>
        </tr>
      </table>
    </div>

    <div class="total-info">
      <dl>
        <dt>가장 이용이 많은 요일</dt>
        <dd>
          <span>
            <label>요일</label>
            <strong>토요일</strong>
          </span>
          <span>
            <label>평균이용횟수</label>
            <strong>166</strong>
          </span>
          <span>
            <label>평균매출</label>
            <strong>524,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>가장 이용이 적은 요일</dt>
        <dd>
          <span>
            <label>요일</label>
            <strong>월요일</strong>
          </span>
          <span>
            <label>평균이용횟수</label>
            <strong>32</strong>
          </span>
          <span>
            <label>평균매출</label>
            <strong>360,000원</strong>
          </span>
        </dd>
      </dl>
    </div>
    

    <LineChart :chartData="chart"/>


    <div class="dataTable">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <th rowspan="2">요일</th>
          <th colspan="2" class="total">전체</th>
          <th colspan="2">세탁기</th>
          <th colspan="2">건조기</th>
          <th colspan="2">기타장비</th>
        </tr>
        <tr>
          <th class="total">평균이용횟수</th>
          <th class="total">평균매출액</th>
          <th>평균이용횟수</th>
          <th>평균매출액</th>
          <th>평균이용횟수</th>
          <th>평균매출액</th>
          <th>평균이용횟수</th>
          <th>평균매출액</th>
        </tr>
        <tr v-for="item in dataTable" :key="item[0]" >
          <td>{{item[0]}}</td>
          <td class="total">{{item[2]+ item[3] + item[4]}}</td>
          <td>{{randomChartValue(400000,500000,1)[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}원</td>
          <td>{{item[2]}}</td>
          <td>{{randomChartValue(100000,200000,1)[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}원</td>
          <td>{{item[3]}}</td>
          <td>{{randomChartValue(100000,200000,1)[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}원</td>
          <td>{{item[4]}}</td>
          <td>{{randomChartValue(50000,100000,1)[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}원</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/lineChart.vue'
import OptionBox from '@/components/optionBox.vue';
import faker from 'faker'

export default {
  components:{
    LineChart, OptionBox
  },

  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menu: false,

      chart:{
        chartdata: {
          labels: ['월요일','화요일','수요일','목요일','금요일','토요일','일요일'],
          datasets: [
            {
              label: '전체',
              borderWidth:1,
              borderColor:'rgba(110,30,232,1)',
              backgroundColor:'rgba(110,30,232,0)',
              data: [154,194,175,165,164,231,221],
            },
            {
              label: '세탁기',
              borderWidth:1,
              borderColor:'rgba(1,161,221,1)',
              backgroundColor:'rgba(1,161,221,0.00)',
              data: [62,72,64,63,58,56,90,84],
            },
            {
              label: '건조기',
              borderWidth:1,
              borderColor:'rgba(210,10,10,1)',
              backgroundColor:'rgba(210,10,10,0)',
              data: [60,70,60,60,54,52,80],
            },
            {
              label: '기타장비',
              borderWidth:1,
              borderColor:'rgba(255,119,0,1)',
              backgroundColor:'rgba(255,119,0,0)',
              data: [20,21,18,16,20,21,22],
            },
          ]
        },
        
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales:{
            yAxes:[{
              stacked:false
            }]
          }
        },
      },
    }
  },

  computed:{
    dataTable() {
      const column = this.chart.chartdata.labels;
      
      return column.map((key, keyIndex) => {
        const rowValue = this.chart.chartdata.datasets.map(({ data }) => {
          return data[keyIndex];
        });

        return [key, ...rowValue];
      });
    },
  },

  methods:{
    randomChartValue(min, max, count) {
      return new Array(count).fill(0).map(() => faker.random.number({ min, max }));
    },
  },
  
}
</script>

<style lang="scss" scoped>
.time-statistics{
  .search-opt{
    margin-bottom:40px;
    table{
      width:100%;
      border:1px solid #e2e2e2;
      th{
        width:120px;
        padding:15px;
        text-align:center;
        font-size:14px;
      }
      td{
        padding:15px;
        input{
          border:1px solid #aaa;
          text-align:center;
          width:150px;
          font-size:14px;
          border-radius:4px;
          height:28px;
        }
        span{margin:0 10px;color:#aaa;}
        .v-btn{
        background:#292929;
        color:#fff;
        height:28px;
        margin-left:10px;
      }
      }
    }
  }

  .total-info{
    display:flex;
    margin-bottom:40px;
    border:1px solid #e2e2e2;
    background:#f8f8f8;

    dl{
      border-right:1px solid #e2e2e2;
      flex:1;
      max-width:320px;
      background:#fff;

      dt{
        padding:15px;
        font-size:14px;
        font-family:'SCDream';
        text-align:center;
        border-bottom:1px solid #e2e2e2;
      }
      dd{
        padding:15px;
        text-align:center;

        span{
          display:flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          font-size:13px;
          margin-bottom:5px;
          
          label{color:#888}

        }
        span:last-child{margin-bottom:0px;}
      }
    }
    dl.all{
      dt{background:#f8f1f1}
    }
  }

  .dataTable{
    margin-top:80px;
    table{
      border:1px solid #e2e2e2;
      border-right:0px;
      border-bottom:0px;
      font-size:13px;
      width:100%;
      th{
        border-bottom:1px solid #e2e2e2;
        border-right:1px solid #e2e2e2;
        background:#f8f8f8;
      }
      th.total{
        background:rgba(210,10,10,0.05);
      }
      td{
        text-align:center;
        border-right:1px solid #e2e2e2;
        border-bottom:1px solid #e2e2e2;
      }
      th,td{
        padding:10px;
      }
      td.total{
        font-weight:bold;
      }
    }

  }


}
</style>