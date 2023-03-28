var app = new Vue({
	el: '#app',
	data: {
		modelItems: ["RS100", "R501"],
		model_sa: '',
		model_rv2: '',
		model_najimase: '',
		model_t3w: '',
		model_adjust: '',
		model_final: '',
		model_sticker: '',
		oprtid_sa: '',
		oprtid_rv2: '',
		oprtid_najimase: '',
		oprtid_t3w: '',
		oprtid_adjuster: '',
		oprtid_final: '',
		oprtid_sticker: '',
		starttime_sa: '',
		endtime_sa:  '',
		duration_sa: '',
		starttime_rv2: '',
		endtime_rv2: '',
		duration_rv2: '',
		starttime_najimase: '',
		endtime_najimase: '',
		duration_najimase: '',
		starttime_T3W: '',
		endtime_T3W: '',
		duration_T3W: '',
		starttime_sticker: '',
		endtime_sticker: '',
		duration_sticker: '',
		SpokeAssLine1ATable: [],
		RV2Line1ATable: [],
		NajimaseLine1ATable: [],
		T3WLine1ATable: [],
		AdjustLine1ATable: [],
		FCLine1ATable: [],
		StickerLine1ATable: [],
		toggleSA: false,
		toggleRV2: false,
		toggleNajimase: false,
		toggleT3W: false,
		toggleSticker: false,
		oprtid_Adj_State: false,
		start_Adj_State: true,
		end_Adj_State: true,
		oprtid_FC_State: false,
		start_FC_State: true,
		end_FC_State: true,
	},

	watch: {
		oprtid_adjuster: function() {
			if (this.oprtid_adjuster == '') {
				this.start_Adj_State = true
				this.end_Adj_State = true
			}
			else this.start_Adj_State = false
		},

		oprtid_final: function() {
			if (this.oprtid_final == '') {
				this.start_FC_State = true
				this.end_FC_State = true
			}
			else this.start_FC_State = false
		},

		oprtid_sticker: function() {
			if (this.oprtid_sticker == '') {
				this.start_Sticker_State = true
				this.end_Sticker_State = true
			}
			else this.start_Sticker_State = false
		}
	},

	methods: {
		getDiffTime_SA: function() {
			var a = moment(this.starttime_sa, "YYYY-MM-DD HH:mm:ss")
			var b = moment(this.endtime_sa, "YYYY-MM-DD HH:mm:ss")
			this.duration_sa = b.diff(a, 'seconds')
		},

		getDiffTime_RV2: function() {
			var a = moment(this.starttime_rv2, "YYYY-MM-DD HH:mm:ss")
			var b = moment(this.endtime_rv2, "YYYY-MM-DD HH:mm:ss")
			this.duration_rv2 = b.diff(a, 'seconds')
		},

		getDiffTime_Najimase: function() {
			var a = moment(this.starttime_najimase, "YYYY-MM-DD HH:mm:ss")
			var b = moment(this.endtime_najimase, "YYYY-MM-DD HH:mm:ss")
			this.duration_najimase = b.diff(a, 'seconds')
		},

		getDiffTime_T3W: function() {
			var a = moment(this.starttime_T3W, "YYYY-MM-DD HH:mm:ss")
			var b = moment(this.endtime_T3W, "YYYY-MM-DD HH:mm:ss")
			this.duration_T3W = b.diff(a, 'seconds')
		},

		getDiffTime_Sticker: function() {
			var a = moment(this.starttime_sticker, "YYYY-MM-DD HH:mm:ss")
			var b = moment(this.endtime_sticker, "YYYY-MM-DD HH:mm:ss")
			this.duration_sticker = b.diff(a, 'seconds')
		},

		CaptureTime_SA: function() {
			var switchTime = ''
			if (this.toggleSA == true) {
				this.starttime_sa = moment().format("YYYY-MM-DD HH:mm:ss")
				switchTime = this.starttime_sa
			}
			else if (this.toggleSA == false) {
				this.endtime_sa = moment().format("YYYY-MM-DD HH:mm:ss")
				switchTime = this.endtime_sa
			}
			this.getDiffTime_SA()
			this.InsertSATable(switchTime)
		},

		CaptureTime_RV2: function() {
			var switchTime = ''
			if (this.toggleRV2 == true) {
				this.starttime_rv2 = moment().format("YYYY-MM-DD HH:mm:ss")
				switchTime = this.starttime_rv2
			}
			else if (this.toggleRV2 == false) {
				this.endtime_rv2 = moment().format("YYYY-MM-DD HH:mm:ss")
				switchTime = this.endtime_rv2
			}
			this.getDiffTime_RV2()
			this.InsertRV2Table(switchTime)
		},

		CaptureTime_Najimase: function() {
			var switchTime = ''
			if (this.toggleNajimase == true) {
				this.starttime_najimase = moment().format("YYYY-MM-DD HH:mm:ss")
				switchTime = this.starttime_najimase
			}
			else if (this.toggleNajimase == false) {
				this.endtime_najimase = moment().format("YYYY-MM-DD HH:mm:ss")
				switchTime = this.endtime_najimase
			}
			this.getDiffTime_Najimase()
			this.InsertNajimaseTable(switchTime)
		},

		CaptureTime_T3W: function() {
			var switchTime = ''
			if (this.toggleT3W == true) {
				this.starttime_T3W = moment().format("YYYY-MM-DD HH:mm:ss")
				switchTime = this.starttime_T3W
			}
			else if (this.toggleT3W == false) {
				this.endtime_T3W = moment().format("YYYY-MM-DD HH:mm:ss")
				switchTime = this.endtime_T3W
			}
			this.getDiffTime_T3W()
			this.InsertT3WTable(switchTime)
		},

		startCapture_Adjusting: function() {
			this.start_Adj_State = true
			this.end_Adj_State  = false
			this.oprtid_Adj_State = true
			this.InsertAdjustingTable(moment().format("YYYY-MM-DD HH:mm:ss"))
			this.getAdjustingTable()
		},

		endCapture_Adjusting: function() {
			this.start_Adj_State = false
			this.end_Adj_State = true
			this.oprtid_Adj_State = false
			this.InsertAdjustingTable(moment().format("YYYY-MM-DD HH:mm:ss"))
			this.getAdjustingTable()
		},

		startCapture_FC: function() {
			this.start_FC_State = true
			this.end_FC_State = false
			this.oprtid_FC_State = true
			this.InsertFinalCheckingTable(moment().format("YYYY-MM-DD HH:mm:ss"))
			this.getFinalCheckingTable()
		},

		endCapture_FC: function() {
			this.start_FC_State = false
			this.end_FC_State = true
			this.oprtid_FC_State = false
			this.InsertFinalCheckingTable(moment().format("YYYY-MM-DD HH:mm:ss"))
			this.getFinalCheckingTable()
		},

		CaptureTime_Sticker: function() {
			var switchTime = ''
			if (this.toggleSticker == true) {
				this.starttime_sticker = moment().format("YYYY-MM-DD HH:mm:ss")
				switchTime = this.starttime_sticker
			}
			else if (this.toggleSticker == false) {
				this.endtime_sticker = moment().format("YYYY-MM-DD HH:mm:ss")
				switchTime = this.endtime_sticker
			}
			this.getDiffTime_Sticker()
			this.InsertStickerPastingTable(switchTime)
		},

		InsertSATable : async function(time) {
			var cmd = '/insertWHSpokeAssy'
			if (this.model_sa == '' || this.oprtid_sa == '') {
				alert('Please fill in all the fields!')
			}
			else {
				var postArg = {
					line 		: "Line 1A",
					model 		: this.model_sa,
					oprtid 		: this.oprtid_sa.replace(/\s/g,'').toUpperCase(),
					time 		: time
				}
				var response = await this.$http.post(cmd, postArg)
			}
			if (response) {
				this.getSATable()
			}
		},

		InsertRV2Table : async function(time) {
			var cmd = '/insertWHRV2'
			if (this.model_rv2 == '' || this.oprtid_rv2 == '') {
				alert('Please fill in all the fields!')
			}
			else {
				var postArg = {
					line 		: "Line 1A",
					model 		: this.model_rv2,
					oprtid 		: this.oprtid_rv2.replace(/\s/g,'').toUpperCase(),
					time 		: time
				}
				var response = await this.$http.post(cmd, postArg)
			}
			if (response) {
				this.getRV2Table()
			}
		},

		InsertNajimaseTable : async function(time) {
			var cmd = '/insertWHNajimase'
			if (this.model_najimase == '' || this.oprtid_najimase) {
				alert('Please fill in all the fields!')
			}
			else {
				var postArg = {
					line 		: "Line 1A",
					model 		: this.model_najimase,
					oprtid 		: this.oprtid_najimase.replace(/\s/g,'').toUpperCase(),
					time 		: time
				}
				var response = await this.$http.post(cmd, postArg)
			}			
			if (response) {
				this.getNajimaseTable()
			}
		},

		InsertT3WTable : async function(time) {
			var cmd = '/insertWHT3W'
			if (this.model_t3w == '' || this.oprtid_t3w == '') {
				alert('Please fill in all the fields!')
			}
			else {
				var postArg = {
					line 		: "Line 1A",
					model 		: this.model_t3w,
					oprtid 		: this.oprtid_t3w.replace(/\s/g,'').toUpperCase(),
					time 		: time
				}
				var response = await this.$http.post(cmd, postArg)
			}
			if (response) {
				this.getT3WTable()
			}
		},

		InsertAdjustingTable : async function(time) {
			var cmd = '/insertWHAdjusting'
			if (this.model_adjust == '' || this.oprtid_adjuster == '') {
				alert('Please fill in all the fields!')
			}
			else {
				var postArg = {
					line 		: "Line 1A",
					model 		: this.model_adjust,
					oprtid 		: this.oprtid_adjuster.replace(/\s/g,'').toUpperCase(),
					time 		: time
				}
				var response = await this.$http.post(cmd, postArg)
			}
			if (response) {
				this.getAdjustingTable()
			}
		},

		InsertFinalCheckingTable : async function(time) {
			var cmd = '/insertWHFinalChecking'
			if (this.model_final == '' || this.oprtid_final == '') {
				alert('Please fill in all the fields!')
			}
			else {
				var postArg = {
					line 		: "Line 1A",
					model 		: this.model_final,
					oprtid 		: this.oprtid_final.replace(/\s/g,'').toUpperCase(),
					time 		: time
				}
				var response = await this.$http.post(cmd, postArg)
			}
			if (response) {
				this.getFinalCheckingTable()
			}
		},

		InsertStickerPastingTable : async function(time) {
			var cmd = '/insertWHStickerPaste'
			if (this.model_sticker == '' || this.oprtid_sticker == '') {
				alert('Please fill in all the fields!')
			}
			else {
				var postArg = {
					line 		: "Line 1A",
					model 		: this.model_sticker,
					oprtid 		: this.oprtid_sticker.replace(/\s/g,'').toUpperCase(),
					time 		: time
				}
				var response = await this.$http.post(cmd, postArg)
			}
			if (response) {
				this.getStickerPasteTable()
			}
		},

		getSATable : async function(){
			var cmd = '/getWHSpokeAssy'
			var postArg = {}
			var response = await this.$http.post(cmd, postArg)
			if (response) {
				this.SpokeAssLine1ATable = []
				for (var i = 0; i < response.body.length; i+=4) {
					var a = moment(response.body[i+3].time, "YYYY-MM-DD HH:mm:ss")
					var b = moment(response.body[i].time, "YYYY-MM-DD HH:mm:ss")
					var obj = {
						line 	: response.body[i].line,
						model 	: response.body[i].model,
						oprt_ID : response.body[i].oprt_id,
						time 	: a.diff(b, 'seconds')
					}
					this.SpokeAssLine1ATable.push(obj)
				}
			}
		},

		getRV2Table : async function(){
			var cmd = '/getWHRV2'
			var postArg = {}
			var response = await this.$http.post(cmd, postArg)
			if (response) {
				this.RV2Line1ATable = []
				for (var i = 0; i < response.body.length; i+=2) {
					var a = moment(response.body[i+1].time, "YYYY-MM-DD HH:mm:ss")
					var b = moment(response.body[i].time, "YYYY-MM-DD HH:mm:ss")
					var obj = {
						line 	: response.body[i].line,
						model 	: response.body[i].model,
						oprt_ID : response.body[i].oprt_id,
						time 	: a.diff(b, 'seconds')
					}
					this.RV2Line1ATable.push(obj)
				}
			}
		},

		getNajimaseTable : async function(){
			var cmd = '/getWHNajimase'
			var postArg = {}
			var response = await this.$http.post(cmd, postArg)
			if (response) {
				this.NajimaseLine1ATable = []
				for (var i = 0; i < response.body.length; i+=2) {
					var a = moment(response.body[i+1].time, "YYYY-MM-DD HH:mm:ss")
					var b = moment(response.body[i].time, "YYYY-MM-DD HH:mm:ss")
					var obj = {
						line 	: response.body[i].line,
						model 	: response.body[i].model,
						oprt_ID : response.body[i].oprt_id,
						time 	: a.diff(b, 'seconds')
					}
					this.NajimaseLine1ATable.push(obj)
				}
			}
		},

		getT3WTable : async function(){
			var cmd = '/getWHT3W'
			var postArg = {}
			var response = await this.$http.post(cmd, postArg)
			if (response) {
				this.T3WLine1ATable = []
				for (var i = 0; i < response.body.length; i+=2) {
					var a = moment(response.body[i+1].time, "YYYY-MM-DD HH:mm:ss")
					var b = moment(response.body[i].time, "YYYY-MM-DD HH:mm:ss")
					var obj = {
						line 	: response.body[i].line,
						model 	: response.body[i].model,
						oprt_ID : response.body[i].oprt_id,
						time 	: a.diff(b, 'seconds')
					}
					this.T3WLine1ATable.push(obj)
				}
			}
		},

		getAdjustingTable : async function(){
			var cmd = '/getWHAdjusting'
			var postArg = {}
			var response = await this.$http.post(cmd, postArg)
			if (response) {
				this.AdjustLine1ATable = []
				for (var i = 0; i < response.body.length; i+=2) {
					var a = moment(response.body[i+1].time, "YYYY-MM-DD HH:mm:ss")
					var b = moment(response.body[i].time, "YYYY-MM-DD HH:mm:ss")
					var obj = {
						line 	: response.body[i].line,
						model 	: response.body[i].model,
						oprt_ID : response.body[i].oprt_id,
						time 	: a.diff(b, 'seconds')
					}
					this.AdjustLine1ATable.push(obj)
				}
			}
		},

		getFinalCheckingTable : async function(){
			var cmd = '/getWHFinalChecking'
			var postArg = {}
			var response = await this.$http.post(cmd, postArg)
			if (response) {
				this.FCLine1ATable = []
				for (var i = 0; i < response.body.length; i+=2) {
					var a = moment(response.body[i+1].time, "YYYY-MM-DD HH:mm:ss")
					var b = moment(response.body[i].time, "YYYY-MM-DD HH:mm:ss")
					var obj = {
						line 	: response.body[i].line,
						model 	: response.body[i].model,
						oprt_ID : response.body[i].oprt_id,
						time 	: a.diff(b, 'seconds')
					}
					this.FCLine1ATable.push(obj)
				}
			}
		},

		getStickerPasteTable : async function(){
			var cmd = '/getWHStickerPaste'
			var postArg = {}
			var response = await this.$http.post(cmd, postArg)
			if (response) {
				this.StickerLine1ATable = []
				for (var i = 0; i < response.body.length; i+=4) {
					var a = moment(response.body[i+3].time, "YYYY-MM-DD HH:mm:ss")
					var b = moment(response.body[i].time, "YYYY-MM-DD HH:mm:ss")
					var obj = {
						line 	: response.body[i].line,
						model 	: response.body[i].model,
						oprt_ID : response.body[i].oprt_id,
						time 	: a.diff(b, 'seconds')
					}
					this.StickerLine1ATable.push(obj)
				}
			}
		}
	},

	mounted() {
		this.getSATable()
		this.getRV2Table()
		this.getNajimaseTable()
		this.getT3WTable()
		this.getAdjustingTable()
		this.getFinalCheckingTable()
		this.getStickerPasteTable()
	}
})
