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
              :return-value.sync="dates"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <input
                  type="text"
                  v-model="dateRangeText"
                  label="Picker in menu"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                >
              </template>
              <v-date-picker v-model="dates" no-title scrollable range>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
              </v-date-picker>
            </v-menu>

            <div class="dateBtns">
              <v-btn text>
                7일
              </v-btn>
              <v-btn text>
                15일
              </v-btn>
              <v-btn text>
                1개월
              </v-btn>
            </div>
          </td>
        </tr>
      </table>
    </div>


    <div class="total-info">
      <dl class='all'>
        <dt>전체</dt>
        <dd>
          <span>
            <label>이용횟수</label>
            <strong>75</strong>
          </span>
          <span>
            <label>이용금액</label>
            <strong>453,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>가장 이용이 많은 시간</dt>
        <dd>
          <span>
            <label>시간</label>
            <strong>11:00</strong>
          </span>
          <span>
            <label>이용횟수</label>
            <strong>10</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>가장 이용이 적은 시간</dt>
        <dd>
          <span>
            <label>시간</label>
            <strong>05:00</strong>
          </span>
          <span>
            <label>이용횟수</label>
            <strong>0</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>세탁기 전체</dt>
        <dd>
          <span>
            <label>이용횟수</label>
            <strong>523</strong>
          </span>
          <span>
            <label>이용금액</label>
            <strong>1,584,800원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>건조기 전체</dt>
        <dd>
          <span>
            <label>이용횟수</label>
            <strong>431</strong>
          </span>
          <span>
            <label>이용금액</label>
            <strong>1,251,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>기타장비 전체</dt>
        <dd>
          <span>
            <label>이용횟수</label>
            <strong>135</strong>
          </span>
          <span>
            <label>이용금액</label>
            <strong>347,000원</strong>
          </span>
        </dd>
      </dl>
    </div>
    
    <LineChart :chartData="chart"/>

    <div class="dataTable">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <th rowspan="2">시간</th>
          <th colspan="2" class="total">전체</th>
          <th colspan="2">세탁기</th>
          <th colspan="2">건조기</th>
          <th colspan="2">기타장비</th>
          
        </tr>
        <tr>
          <th class="total">이용횟수</th>
          <th class="total">매출액</th>
          <th>이용횟수</th>
          <th>매출액</th>
          <th>이용횟수</th>
          <th>매출액</th>
          <th>이용횟수</th>
          <th>매출액</th>
        </tr>
        <tr v-for="item in dataTable" :key="item[0]" >
          <td>{{ item[0] }}</td>
          <td class="total">{{item[1] + item[2] + item[3]}}</td>
          <td class="total">{{item[4] + item[5] + item[6]}}</td>
          <td>{{ item[1] }}</td>
          <td>{{item[4]}}</td>
          <td>{{item[2]}}</td>
          <td>{{item[5]}}</td>
          <td>{{item[3]}}</td>
          <td>{{item[6]}}</td>
          
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import LineChart from '@/components/lineChart.vue'
import OptionBox from '@/components/optionBox.vue';

export default {
  components:{
    LineChart, OptionBox
  },

  data() {
    return {
      date1:new Date().toISOString().substr(0, 10),
      date2:new Date().toISOString().substr(0, 10),
      dates: [this.date1, this.date2],
      menu: false,

      chart:{
        chartdata: {
          labels: ['01:00','02:00','03:00','04:00','05:00','06:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
          datasets: [
            {
              label: '전체',
              borderWidth:1,
              borderColor:'rgba(110,30,232,1)',
              backgroundColor:'rgba(110,30,232,0)',
              data: [21,45,150,120,80,150,160,70,90,240,150,130,50,77,90,94,45,115,184,64,34,57],
              data2:[12000,13000,7500,3400,6000,0,0,1400,3500,23000,13000,7500,3500,0,12000,4500,18000,21000,5500,4500,12000,0],
            },
            {
              label: '세탁기',
              borderWidth:1,
              borderColor:'rgba(1,161,221,1)',
              backgroundColor:'rgba(1,161,221,0)',
              data: [2,15,50,54,44,30,18,9,28,30,15,21,30,10,20,40,30,28,40,19,30,8],
              data2:[12000,13000,7500,3400,6000,0,0,1400,3500,23000,13000,7500,3500,0,12000,4500,18000,21000,5500,4500,12000,0],
            },
            {
              label: '건조기',
              borderWidth:1,
              borderColor:'rgba(210,10,10,1)',
              backgroundColor:'rgba(210,10,10,0)',
              data: [3,12,54,64,54,32,12,8,32,24,11,16,27,5,10,15,32,24,32,18,24,6],
              data2:[7000,9000,1300,7500,3000,3500,5500,21000,7500,13000,18000,5500,3500,5500,7000,9500,12000,1000,0,0,0,0],
            },
            {
              label: '기타장비',
              borderWidth:1,
              borderColor:'rgba(255,119,0,1)',
              backgroundColor:'rgba(255,119,0,0)',
              data: [8,12,5,6,10,15,1,5,3,7,12,5,6,7,12,15,11,10,9,5,1,5],
              data2:[1000,0,0,5500,9000,5000,15000,12000,7500,8000,23000,9000,5500,3500,8000,9000,13000,34000,7500,0,4500,3500],
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
      }
    }
  },
  mounted() {
    console.log(this.dataTable)
    console.log(this.dataTotal)
  },

  computed: {
    dateRangeText(){
      return this.dates.join(' ~ ')
    },

    dataTable() {
      const column = this.chart.chartdata.labels;
      
      return column.map((key, keyIndex) => {
        const rowValue = this.chart.chartdata.datasets.map(({ data }) => {
          return data[keyIndex];
        });

        const rowValue2 = this.chart.chartdata.datasets.map(({data2}) => {
          return data2[keyIndex];
        });

        return [key, ...rowValue, ...rowValue2];
      });
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
          width:250px;
          font-size:14px;
          border-radius:4px;
          height:28px;
        }
        span{margin:0 10px;color:#aaa;}
      }
    }

    .dateBtns{
      margin-left:10px;
      display:inline-block;
      border:1px solid #e2e2e2;
      border-radius:4px;

      .v-btn{
        height:28px;
        border-right:1px solid #e2e2e2;
        border:0px;;
      }
      .v-btn:last-child{
        border-right:0px;
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
          strong{}

        }
        span:last-child{margin-bottom:0px;}
      }
    }
    dl.all{
      dt{background:rgba(1,161,221,0.05)}
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
      td{
        text-align:center;
        border-right:1px solid #e2e2e2;
        border-bottom:1px solid #e2e2e2;
      }
      th,td{
        padding:10px;
      }

      th.total{
        background:rgba(110,30,232,0.05);
      }
      td.total{
        font-weight:bold;
      }
    }

  }


}
</style>