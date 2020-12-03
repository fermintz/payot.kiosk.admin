<template>
  <div class="shopTotal">
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

    <v-row>
      <v-col cols="9">
        <dl class="section">
          <dt>충전</dt>
          <dd>
            <div class="number">
              <strong>0</strong>
              <span>현금결제 횟수</span>
            </div>
            <div class="contents">
              <div class="price">
                <span>현금결제금액</span>
                <strong>0</strong>
              </div>
              <div class="point">
                <span>추가 포인트 적립금</span>
                <strong>0</strong>
              </div>
            </div>
          </dd>
          <dd>
            <div class="number">
              <strong>0</strong>
              <span>카드결제 횟수</span>
            </div>
            <div class="contents">
              <div class="price">
                <span>카드결제금액</span>
                <strong>0</strong>
              </div>
              <div class="point">
                <span>추가 포인트 적립금</span>
                <strong>0</strong>
              </div>
            </div>
          </dd>
          <dd class="total">
            <div class="number">
              <strong>0</strong>
              <span>총 결제 횟수</span>
            </div>
            <div class="contents">
              <div class="price">
                <span>총 결제금액</span>
                <strong>0</strong>
              </div>
              <div class="point">
                <span>총 추가 포인트 적립금</span>
                <strong>0</strong>
              </div>
            </div>
          </dd>
        </dl>
        <dl class="section">
          <dt>사용</dt>
          <dd class="use">
            <div class="number">
              <strong>0</strong>
              <span>총 결제 횟수</span>
            </div>
            <div class="contents">
              <div class="price">
                <span>총 결제금액</span>
                <strong>0</strong>
              </div>
              <div class="point">
                <span>총 추가 포인트 적립금</span>
                <strong>0</strong>
              </div>
            </div>
          </dd>
        </dl>
        <dl class="section">
          <dt>잔여</dt>
          <dd class="rest">
            <span>총 잔여금액</span>
            <strong>0</strong>
          </dd>
        </dl>
      </v-col>
      <v-col cols="3">
        <dl class="section member">
          <dt>가입회원</dt>
          <dd class="new">
            <strong>0</strong>
            <span>신규회원수</span>
          </dd>
          <dd>
            <strong>0</strong>
            <span>총 회원수(신규+기존)</span>
          </dd>
        </dl>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  data(){
    return{
      date1:new Date().toISOString().substr(0, 10),
      date2:new Date().toISOString().substr(0, 10),
      dates: [this.date1, this.date2],
    }
  },
  computed:{
    dateRangeText(){
      return this.dates.join(' ~ ')
    },
  }
}
</script>

<style lang="scss" scoped>
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

.section{
  font-family:'SCDream';
  margin-bottom:40px;

  dt{
    margin-bottom:10px;
    font-size:18px;
  }
  dd{
    display:flex;
    margin-bottom:10px;

    >div{
      border:1px solid #e2e2e2;
    }
    .number{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right:10px;
      width:240px;
      max-height:120px;

      span{font-size:14px;}
      strong{font-size:36px;}
    }
    .contents{
      flex:1;
      display:flex;
      padding:20px;
      max-height:120px;

      >div{
        display:flex;
        flex-direction: column;
        flex:1;
        border-right:1px solid #e2e2e2;

        span{
          font-family:'SCDream'
        }
        strong{
          text-align:right;
          font-size:32px;
        } 
      }

      .price{
        padding-right:20px;
      }
      .point{
        padding-left:20px;
        border-right:0px;
      }
    }
  }

  dd.total{
    >div{
      background:#FBF5F8;
    }
    .number{
      strong{
        color:#EF1682;
      }
    }

    .contents{
      strong{
        color:#EF1682
      }
    }
  }

  dd.use{
    >div{
      background:#F4FAFE;
    }

    strong{
      color:#03A9FF;
    }
  }

  dd:last-child{
    margin-bottom:0px;
  }

  dd.rest{
    justify-content: space-between;
    align-items: flex-end;
    border:1px solid #e2e2e2;
    padding:20px;

    span{}
    strong{
      font-size:32px;
    }
  }
}

.member{
  dd{
    display:flex;
    flex-direction: column;
    text-align:center;
    border:1px solid #e2e2e2;
    padding:20px;

    span{

    }
    strong{
      font-size:42px;
    }
  }

  .new{
    strong{color:#03A9FF}
  }
}



</style>