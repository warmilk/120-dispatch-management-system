<template>
    <div class="middle-container">
        <div class="map">

        </div>
        <div class="middle-bottom">
            <el-tabs type="card" class="custom-tabs custom-tabs-nav-center 
            custom-tabs-content-center custom-tabs-pane-adjust ">
                <el-tab-pane label="普通事件">
                    <el-form ref="comonRecieveform" :model="form" label-width="80px" size="small" :rules="rules">
                        <el-form-item label="患者姓名" prop="patientName">
                            <el-input v-model="form.patientName"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="patientSex">
                            <el-select v-model="form.patientSex" placeholder="请选择性别" style="width: 100%;">
                                <el-option label="男" value="1"></el-option>
                                <el-option label="女" value="2"></el-option>
                                <el-option label="其他" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="年龄" prop="patientAge">
                            <el-input v-model="form.patientAge"></el-input>
                        </el-form-item>
                        <el-form-item label="患者身份" prop="patientIdentity">
                            <el-select v-model="form.patientIdentity" placeholder="请选择患者身份" style="width: 100%;">
                                <el-option label="普通" value="1" selected="selected"></el-option>
                                <el-option label="三无" value="2"></el-option>
                                <el-option label="其他" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="报案人" prop="reporter">
                            <el-input v-model="form.reporter"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话" prop="phone">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="乡镇" prop="region">
                            <el-select v-model="form.region" placeholder="请选择医院" style="width: 100%;">
                                <el-option v-for="item in regions" :key="item.id" :label="item.itemValue" :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="事故地点" prop="place">
                            <el-input v-model="form.place"></el-input>
                        </el-form-item>
                        <el-form-item label="指派医院" prop="hospId">
                            <el-select v-model="form.hospId" placeholder="请选择医院" style="width: 100%;">
                                <el-option v-for="item in hosps" :key="item.uuid" :label="item.name" :value="item.uuid"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="派出车辆" prop="carNum">
                            <el-select v-model="form.carNum" placeholder="请选择车辆数量" style="width: 100%;">
                                <el-option label="1" value="1"></el-option>
                                <el-option label="2" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="救援类型" prop="rescueType">
                            <el-input v-model="form.rescueType"></el-input>
                        </el-form-item>
                        <el-tabs type="card" class="custom-tabs 
                        custom-tabs-nav-left custom-tabs-content-full">
                            <el-tab-pane label="报案人代述">
                                <el-form-item label-width="0" prop="reporterDesc">
                                    <el-input type="textarea" v-model="form.reporterDesc" :rows="5"></el-input>
                                </el-form-item>
                            </el-tab-pane>
                            <el-tab-pane label="患者主述">
                                <el-form-item label-width="0" prop="patientDesc">
                                    <el-input type="textarea" v-model="form.patientDesc" :rows="5"></el-input>
                                </el-form-item>
                            </el-tab-pane>
                        </el-tabs>
                        <el-form-item label="危重等级" prop="level">
                            <el-radio-group v-model="form.level">
                                <el-radio label="1">一般事件</el-radio>
                                <el-radio label="2">较大事件</el-radio>
                                <el-radio label="3">重大事件</el-radio>
                                <el-radio label="4">特别重大事件</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm">受理请求</el-button>
                        </el-form-item>
                    </el-form>

                </el-tab-pane>
                <el-tab-pane label="群体事件">
                    <el-form ref="groupRecieveform" :model="gform" label-width="80px" size="small" :rules="rules">
                        <el-form-item label="报告人" prop="reporter">
                            <el-input v-model="gform.reporter"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话" prop="phone">
                            <el-input v-model="gform.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="乡镇" prop="region">
                            <el-select v-model="gform.region" style="width:100%;">
                                <el-option v-for="item in regions" :key="item.id" :label="item.itemValue" :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="事故地址" prop="place">
                            <el-input v-model="gform.place"></el-input>
                        </el-form-item>
                        <el-form-item label="事件等级" prop="accidentLevel">
                            <el-select v-model="gform.accidentLevel" placeholder="请选择事件等级" style="width: 100%;">
                                <el-option label="一般事件" value="1"></el-option>
                                <el-option label="较大事件" value="2"></el-option>
                                <el-option label="重大事件" value="3"></el-option>
                                <el-option label="特别重大事件" value="4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="事件类型" prop="accidentType">
                            <el-select v-model="gform.accidentLevel" placeholder="请选择事件类型" style="width: 100%;">
                                <el-option label="一般事件" value="1"></el-option>
                                <el-option label="较大事件" value="2"></el-option>
                                <el-option label="重大事件" value="3"></el-option>
                                <el-option label="特别重大事件" value="4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="指派医院" label-position="top">
                            <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
                                <el-table-column type="selection" width="55">
                                </el-table-column>
                                <el-table-column label="日期" width="120">
                                    <template slot-scope="scope">{{ scope.row.date }}</template>
                                </el-table-column>
                                <el-table-column prop="name" label="医院" width="120">
                                </el-table-column>
                                <el-table-column prop="address" label="地址">
                                    <template slot-scope="scope">
                                        <el-select v-model="gform.accidentLevel" placeholder="请选择事件类型" style="width: 100%;">
                                            <el-option label="一般事件" value="1"></el-option>
                                            <el-option label="较大事件" value="2"></el-option>
                                            <el-option label="重大事件" value="3"></el-option>
                                            <el-option label="特别重大事件" value="4"></el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-form-item>
                        <el-form-item label="救援类型" prop="rescueType">
                            <el-input v-model="gform.rescueType"></el-input>
                        </el-form-item>
                        <el-tabs type="card" class="custom-tabs 
                        custom-tabs-nav-left custom-tabs-content-full">
                            <el-tab-pane label="报案人代述">
                                <el-form-item label-width="0" prop="reporterDesc">
                                    <el-input type="textarea" v-model="gform.reporterDesc" :rows="5"></el-input>
                                </el-form-item>
                            </el-tab-pane>
                        </el-tabs>
                        <el-form-item>
                            <el-button type="primary">生成派单</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>

<script>
import * as Inter from "api/call";
import * as hospitalInter from "api/hospital";

export default {
  data() {
    return {
      //TODO
      hosps: [
        {
          uuid: "0000000000000000000000000000000",
          name: "医院"
        }
      ],
      regions: {},
      form: {
        patientName: "",
        patientSex: "1",
        patientAge: null,
        patientIdentity: "1",
        reporter: "",
        phone: "",
        resource: "",
        region: "",
        place: "",
        hospId: "",
        carNum: 1,
        rescueType: "",
        reporterDesc: "",
        patientDesc: "",
        level: "1"
      },
      rules: {
        patientName: [
          { required: true, message: "请输入患者名称", trigger: "blur" }
        ],
        patientSex: [
          { required: true, message: "请输入患者年龄", trigger: "change" }
        ],
        patientAge: [
          { required: true, message: "请输入患者的年龄", trigger: "blur" }
          //   { type:'number', min: 1, max: 110, message: "请输入正确的年龄", trigger: 'blur'}
        ],
        patientIdentity: [
          { required: true, message: "请选择患者身份", trigger: "blur" }
        ],
        reporter: [
          { required: true, message: "请填写报案人", trigger: "blur" }
        ],
        phone: [
          { required: true, message: " 请填写联系电话", trigger: "blur" }
        ],
        region: [{ required: true, message: "请填写乡镇", trigger: "blur" }],
        place: [{ required: true, message: "请填写事故地点" }],
        hospId: [{ required: true, message: "请选择指派医院" }],
        carNum: [{ required: true, message: "请选择派出车辆数量" }],
        rescueType: [{ required: true, message: "请选择救援类型" }],
        level: [{ required: true, message: "请选择事件等级" }]
      },
      gform: {
        reporter: "",
        phone: "",
        resource: "",
        region: "",
        place: "",
        hospId: "",
        carNum: 1,
        rescueType: "",
        reporterDesc: "",
        patientDesc: "",
        level: ""
      },
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    submitForm() {
      this.$refs["comonRecieveform"].validate(valid => {
        if (valid) {
          Inter.receiveCommon(this.form)
            .then(resp => {
              if (resp.returnCode === 1) return Promise.resolve();
              return Promise.reject(resp.errorMsg);
            })
            .then(() => {
              this.$message.info("受理成功");
              this.$refs["comonRecieveform"].resetFields();
            })
            .catch(msg => {
              this.$message.error(msg);
            });
        }
      });
    },
    _getHospitalList() {
      this.hosps = [
        {
          uuid: "0000000000000000000000000000000",
          name: "医院"
        }
      ];
    },
    _getRegionList() {
      Inter.getRegionList().then(resp => {
        this.regions = resp.regionList;
      });
    }
  },
  activated() {
    this._getHospitalList();
    this._getRegionList();
  }
};
</script>

<style lang="scss" scoped>
.middle-container {
  width: 60%;
  display: inline-block;
  .map {
    background: #eb9800;
    height: 10rem;
  }
  .middle-bottom {
    margin-top: 2rem;
  }
  .custom-tabs-pane-adjust {
    .el-tab-pane {
      display: inline-block;
      width: 70%;
    }
  }

  .custom-tabs-content-full {
    .el-tab-pane {
      width: 100%;
    }
  }
  .el-button {
    background: #48b868;
    border-radius: 3px;
    font-size: 0.88rem;
    color: #ffffff;
    border: none;
    width: 16rem;
    height: 2.5rem;
    margin-left: 15%;
  }
}
</style>
