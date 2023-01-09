<template>
	<div class="container">
		<div class="left">
			<el-card class="card">
				<div slot="header">
					<span>星座参数</span>
				</div>
				<div class="buttons">
					<!--<el-button @click="func1">starlink</el-button> -->
					<el-button v-on:click="StarLink">starlink</el-button>
				</div>
				<div class="buttons">
					<el-button v-on:click="Iridium">铱星</el-button>
				</div>
				<div class="buttons">
					<el-button v-on:click="Custom">自定义星座</el-button>
				</div>
			</el-card>
			<el-card class="card">
<!--				<div class="buttons">-->
<!--					<el-button v-on:click="Config"><el-dropdown-item>跳转页面</el-dropdown-item></el-button>-->
<!--				</div>-->
				<router-link to="/config">配置页面</router-link>
<!--				<div slot="header">-->
<!--					<span>网络基础参数</span>-->
<!--				</div>-->
<!--				<div class="text item">星座名称:-->
<!--&lt;!&ndash;					<el-input&ndash;&gt;-->
<!--&lt;!&ndash;						placeholder="请输入内容"&ndash;&gt;-->
<!--&lt;!&ndash;						v-model="conName"&ndash;&gt;-->
<!--&lt;!&ndash;						clearable>&ndash;&gt;-->
<!--&lt;!&ndash;					</el-input>&ndash;&gt;-->
<!--				</div>-->
<!--				<div class="text item">传输带宽:-->
<!--&lt;!&ndash;					<el-input&ndash;&gt;-->
<!--&lt;!&ndash;						placeholder="请输入内容"&ndash;&gt;-->
<!--&lt;!&ndash;						v-model="bandWidth"&ndash;&gt;-->
<!--&lt;!&ndash;						clearable>&ndash;&gt;-->
<!--&lt;!&ndash;					</el-input>&ndash;&gt;-->
<!--				</div>-->
<!--				<div class="text item">路由交换协议:-->
<!--&lt;!&ndash;				<el-select v-model="key1" clearable placeholder="请选择">&ndash;&gt;-->
<!--&lt;!&ndash;					<el-option&ndash;&gt;-->
<!--&lt;!&ndash;					v-for="item in list1"&ndash;&gt;-->
<!--&lt;!&ndash;					:key="item.value"&ndash;&gt;-->
<!--&lt;!&ndash;					:label="item.label"&ndash;&gt;-->
<!--&lt;!&ndash;					:value="item.value">&ndash;&gt;-->
<!--&lt;!&ndash;					</el-option>&ndash;&gt;-->
<!--&lt;!&ndash;				</el-select>&ndash;&gt;-->
<!--				</div>-->
<!--				<div class="text item">信道模型:-->
<!--					<el-select v-model="value" clearable placeholder="请选择">-->
<!--						<el-option-->
<!--							v-for="item in options"-->
<!--							:key="item.value"-->
<!--							:label="item.label"-->
<!--							:value="item.value">-->
<!--						</el-option>-->
<!--					</el-select></div>-->
<!--				<div class="text item">计算资源:-->
<!--&lt;!&ndash;					<el-input&ndash;&gt;-->
<!--&lt;!&ndash;						placeholder="请输入内容"&ndash;&gt;-->
<!--&lt;!&ndash;						v-model="input1"&ndash;&gt;-->
<!--&lt;!&ndash;						clearable>&ndash;&gt;-->
<!--&lt;!&ndash;					</el-input>&ndash;&gt;-->
<!--				</div>-->
<!--				<div class="text item">存储资源:-->
<!--&lt;!&ndash;					<el-input&ndash;&gt;-->
<!--&lt;!&ndash;						placeholder="请输入内容"&ndash;&gt;-->
<!--&lt;!&ndash;						v-model="input2"&ndash;&gt;-->
<!--&lt;!&ndash;						clearable>&ndash;&gt;-->
<!--&lt;!&ndash;					</el-input>&ndash;&gt;-->
<!--				</div> &ndash;&gt;-->
<!--				<div>-->
<!--					<el-button v-on:click="Confirm">确定</el-button>-->
<!--				</div>-->
			</el-card>
		</div>
		<div class="mid">
			<div class="title">边缘计算系统</div>
				<!-- <img :src="imgName"> -->
				<iframe
				id="iframe_key"
				ref="iframe"
				:src="HtmlSrc"
				frameborder="0"
				width="100%"
				height="800"
				></iframe>
		</div>
		<div class="right">
			<el-card class="card">
				<div slot="header">
					<span>服务迁移指标</span>
				</div>
				<div class="buttons"><el-button v-on:click="ClodEg">云边服务迁移</el-button></div>
				<div class="buttons"><el-button v-on:click="EgClod">边云服务迁移</el-button></div>
				<div class="buttons"><el-button v-on:click="EgEg">边边服务迁移</el-button></div>
				<div class="buttons"><el-button v-on:click="EgNode">边端服务迁移</el-button></div>
				<div class="buttons"><el-button v-on:click="EgclodSet">星座边缘云建立</el-button></div>
			</el-card>
			<el-card>
				<div slot="header">
					<span>仿真系统指标</span>
				</div>
				<div class="text item">云边服务迁移时间:
<!--					<el-input-->
<!--						placeholder="输出"-->
<!--						v-model="input"-->
<!--						clearable>-->
<!--					</el-input>-->
				</div>
				<div class="text item">云边迁移:
<!--					<el-input-->
<!--						placeholder="输出"-->
<!--						v-model="input"-->
<!--						clearable>-->
<!--					</el-input>-->
				</div>
				<div class="text item">在轨服务响应时间:
<!--					<el-input-->
<!--						placeholder="输出"-->
<!--						v-model="input"-->
<!--						clearable>-->
<!--					</el-input>-->
				</div>
				<div class="text item">星地上行传输时延:
<!--					<el-input-->
<!--						placeholder="输出"-->
<!--						v-model="input"-->
<!--						clearable>-->
<!--					</el-input>-->
				</div>
				<div class="text item">边边迁移:
<!--					<el-input-->
<!--						placeholder="输出"-->
<!--						v-model="input"-->
<!--						clearable>-->
<!--					</el-input>-->
				</div>
				<div class="text item">在轨服务响应时间:
<!--					<el-input-->
<!--						placeholder="输出"-->
<!--						v-model="input"-->
<!--						clearable>-->
<!--					</el-input>-->
				</div>
				<div class="text item">星间传输时延:
<!--					<el-input-->
<!--						placeholder="输出"-->
<!--						v-model="input"-->
<!--						clearable>-->
<!--					</el-input>-->
				</div>
			</el-card>
		</div>
	</div> 
</template>

<script>

/* eslint-disable */
import Vue from 'vue'
import ball from '@/assets/ball.png'
import earth from '@/assets/earth.png'
import iridium from '@/assets/iridium.png'
import custom from '@/assets/custom.png'
import axios from 'axios'
import router from '@/router'
	Vue.config.productionTip=false
	axios.defaults.timeout = 5000; //响应时间
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
	axios.defaults.baseURL = 'http://10.128.237.106:3000'; //配置接口地址

	//POST传参序列化(添加请求拦截器)
	axios.interceptors.request.use((config) => {
	//在发送请求之前做某件事
		if (config.method === 'post') {
			config.data = qs.stringify(config.data);
		}
		return config;
	}, (error) => {
	//console.log('错误的传参')
		return Promise.reject(error);
	});

	//返回状态判断(添加响应拦截器)
	axios.interceptors.response.use((res) => {
		//对响应数据做些事
		if (!res.data.success) {
		return Promise.resolve(res);
		}
		return res;
		}, (error) => {
		//console.log('网络异常')
		return Promise.reject(error);
	});

	export default {
		data() {
			return {
			// data:{},
			HtmlSrc:'/Starlink.html',
			imgName:ball,
			bandWidth: '',
			input1: '',
			input2: '',
			options: [{
				value: '选项1',
				label: '瑞利衰落信道模型'
			}, {
				value: '选项2',
				label: '莱斯衰落信道模型'
			}, {
				value: '选项3',
				label: 'AWGN信道模型'
			}],
			value: '',
			
			list1: [{
				value: '选项1',
				label: ' RIP'
				}, {
				value: '选项2',
				label: ' OSPF'
				}, {
				value: '选项3',
				label: 'IS-IS'
				}, {
				value: '选项4',
				label: 'IGRP'
				}, {
				value: '选项5',
				label: ' EIGRP'
				},{
				value: '选项6',
				label: 'BGP'
				}],
			key: '',
					}
		},
		
		methods:{
			ClodEg: function () {
				alert('正在仿真云边迁移！')
				},
			EgClod: function() {
				alert('正在仿真边云迁移！')
			},
			EgEg: function() {
				alert('正在仿真边边迁移！')
			},
			EgNode: function() {
				alert('正在仿真边端迁移！')
			},
			EgclodSet: function() {
				alert('正在仿真星座边缘云建立！')
			},
			StarLink: function(){
				this.HtmlSrc='/Starlink.html'
			},
			Iridium: function(){
				this.HtmlSrc='/Iridium.html'
			},
			Custom: function(){
				this.imgName=custom
			},
			Confirm: function(){
				let data = {
					bandWidth:this.bandwidth,
				}
				axios.put('http://10.128.237.106:3000/', data)
				.then((res)=>{
					console.log(res)
				})
			},
			// Config:function(){
			//     // console.log("跳转配置")
			//     this.$router.push('/Config')
			// }
			
		},
		
		mutations: {
		setData(state, obj) {
			for (let k in state) {
				if (obj.hasOwnProperty(k)) {
					//xxxx = xxxxx;
				}
			}
		},
		clearData(state) {
			for (let k in state) {
				//xxxx = '';
			}
		}
	},

	created() {//处理刷新时vuex里面数据保存
    //在页面加载时读取sessionStorage里的状态信息
	if (sessionStorage.getItem("store")) {
		this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))));
		sessionStorage.removeItem('store');
	}
    // console.log(sessionStorage.getItem("store"))
    //在页面刷新时将vuex里的信息保存到sessionStorage里
	window.addEventListener("beforeunload", () => {
		sessionStorage.setItem("store", JSON.stringify(this.$store.state))
	});
},

	}
</script>

<style scoped>
	/* p{color:red} */
	.container {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 280px;
		background-color: aquamarine;
	}

	.el-card ::v-deep .el-card__header {
	padding: 2px 10px;
	background-color: palegoldenrod;
	}

	.box-card {
		width: 280px
	}

	.el-card ::v-deep .el-card__body {
	padding: 0px;
	background-color: powderblue;
	}

	.left {
		width: 20%;
		height: 100%;
		padding: 100px 50px;
		display: flex;
		flex-direction: column;
		gap: 60px;
	}

	/* eslint-disable */

	.right {
		display: flex;
		width: 20%;
		height: 100%;
		flex-direction: column;
		padding: 100px 50px;
		gap: 60px;
		/* .info {
			display: flex;
		} */
	}
	.mid{
		display: flex;
		width: 60%;
		height: 100%;
		flex-direction: column;
		align-items: center;
	}
	.iframe{
		width: 800px;
		height: 800px;
	}
	.title {
		display: flex;
		width: 100%;
		height: 10%;
		justify-content: center;
		font-size: xx-large;
	}
	.htmlContainer{
		display: flex;
		justify-content: center;
		
		width: 800px;
		height: 800px;
	}
	.buttons {
		display: flex;
		justify-content: space-around;
		align-self: center;
		width: 100%;
		height: 20%;
		margin: 10px 0px;
		padding: 5px 5px ;
		color: antiquewhite;
		/* background-color: rgba(0, 0, 0,0.3); */
	}
	
	.iframe{
		display: flex;
		justify-content: center;
		
		width: 8000px;
		height: 8000px;
		overflow: hidden;
	}
	
</style>
