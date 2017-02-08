Ext.onReady(function(){
	
	Ext.require([
		         	'Ext.data.*',
		         	'Ext.grid.*',
		         	'Ext.tree.*',
		         	'Ext.form.*',
		         	'Ext.ux.*'
		         	]);
	
	var comOrgTreeStore, orgTreeStore,posStore;
	var addPosWin;
	var addPosForm;
	
	
	
	posStore = Ext.create("Ext.data.Store",{
		 model: "Ext.data.Model",
	     proxy: {
	         type: 'ajax',
	         url: '../exam/pos/getPositions',
	         reader: {
	             type: 'json',
	             rootProperty: 'list'
	         }
	     },
	     autoLoad:false
	});
	posStore.load();
	

	orgTreeStore = Ext.create("Ext.data.TreeStore",{
		proxy : {
			type : 'ajax',
			url : "../exam/org/getOrgNodes",
			reader : {
				type : "json",
				rootProperty : "nodeList"
			}
		},
		root : {
			expanded : true,  
			leaf : false
		},	
		nodeParam : "orgId"
	})
	
	
	//增加岗位机构
	function addPos(){
		if(addPosForm == null){
			
			comOrgTreeStore = Ext.create("Ext.data.TreeStore",{
				proxy : {
					type : 'ajax',
					url : "../exam/org/getChildrenByOrgId",
					reader : {
						type : "json",
						rootProperty : "nodeList"
					}
				},
				root : {
					expanded : true,  
					leaf : false
				},
				rootVisible:false,
				nodeParam : "orgId"	
			});
			
			
			
			addPosForm = Ext.create("Ext.form.Panel",{
				width:"100%",
				height:"100",
				url:"../exam/pos/addPos",
				border:0,
				items:[
					{  xtype:"textfield", labelWidth:100, width:400, labelAlign:"right", fieldLabel:"岗位名称", margin:"30 10 15 10", name:"posName" },
					{  xtype:"treepicker", labelWidth:100, width:400, labelAlign:"right", fieldLabel:"所属部门", margin:"20 10 15 10", name:"orgId",
					    store:comOrgTreeStore,  displayField:"text",minPickerHeight: 200,value:"",scrollable:true, emptyText:"请选择所属机构"
    	          	},
					{  xtype:"textfield", labelWidth:100, width:400, labelAlign:"right", fieldLabel:"识别码", margin:"20 10 15 10", name:"posSn" },
					{  xtype:"textarea", labelWidth:100, width:400, labelAlign:"right", height:80,fieldLabel:"备注", margin:"20 10 30 10", name:"posDes" }
			   ]
				
				
			});
		}
		
		if(addPosWin == null){
			addPosWin = Ext.create("Ext.window.Window",{
				title:"添加岗位",
				height:380,
				width:500,
				x:300,
				y:70,
				items:addPosForm,
				buttons:[{text:"保存",margin:"10 20 10 0",handler:function(){
					var form = addPosForm.getForm();
    	 			if(form.isValid()){
    	 				form.submit({
    	 					submitEmptyText:false,
	    	 				success : function(form, action){
	    	 					addPosWin.close();
	    	 					posStore.reload();
	    	 					Ext.Msg.alert("信息提示", "组织机构添加成功！");
	    	 				},
	    	 				failure : function(form, action){
	    	 					Ext.Msg.alert("信息提示", "组织机构添加失败，请检查数据和网络！");
	    	 				}
	    	 			});	   	    	 				
    	 			}
				}},{text:"清空",margin:"10 20 10 10"}],
				listeners :{
					close:function(){
						addPosForm = null;
						addPosWin = null;
					}
				}
			});
		}
		addPosWin.show();
		

	}//----增加组织机构结束
	
	

	//中间左侧，组织机构树
	orgTreePanel = Ext.create("Ext.tree.Panel",{
		region:"west",
		title:"组织机构",
		width:200,
		split: true,
		rootVisible:false,
		height:"100%",
		store:orgTreeStore,
		listeners:{
			itemclick:function(node,record){
				posStore.load({
					params:{
						orgId:record.data.id
					}
				});
			}
		}
	});
	
	
	

	//删除岗位
	function delPos(grid, rowIndex, colIndex, actionItem, event, record, row){
		
		Ext.Msg.confirm("删除组织机构类型","该删除操作不可撤销，是否删除？？",function(btn){
			if(btn=="yes"){
				Ext.Ajax.request({
				    url: "../exam/pos/delPos",
				    params: {
				        posId : record.data.posId
				    },
				    success: function(response){
				        Ext.Msg.alert("信息提示", response.responseText);
			            posStore.reload();
				    }
				});
			}
		});	
	}//----删除岗位结束
	

	//中间右侧，组织机构数据展示
	posGridPanel = Ext.create("Ext.grid.Panel",{
		  store : posStore,
		  region: 'center',
		  columns: [
	         {header:"岗位名称",dataIndex: 'posName', flex:1,align:"center",sort:false},
	         {header:"标示符",dataIndex: 'posSn', flex:1,align:"center",sort:false,emptyCellText:"无"},
			{header:"所属部门",dataIndex:"orgName", flex:1,align:"center",emptyCellText:"无"},
			{header:"备注",dataIndex:"posDes", flex:1,align:"center",emptyCellText:"无"},
	         {header:"排序值",dataIndex: 'sort', flex:1,align:"center",sort:false},
	         {
				header:"操作", xtype: "actioncolumn",width:120,align: "center",
				items:[
				       {icon:"../ext/images/edit.png", handler:function(){Ext.Msg.alert("信息提示","编辑信息");}},"-",
	        	       {icon:"../ext/images/del.png",handler:delPos},"-",
	        	       {icon:"../ext/images/find.png", handler:function(){Ext.Msg.alert("信息提示","查看详情");}}
				]
			  }],
		 tbar : [
		        {text : '添加', icon: "../ext/images/add.png", handler:addPos},'-',
		        {text : '修改', icon: "../ext/images/edit.png"},'-',
		        {text : '删除', icon: "../ext/images/del.png"},'-',
		        {text : '详情', icon: "../ext/images/find.png"}
		       ]
	});
	
	
	
	

	
	//中间
	posPanel =Ext.create("Ext.panel.Panel",{
		layout:"border",
		items:[orgTreePanel,posGridPanel]
		
	});
	
	 Ext.create('Ext.container.Viewport', {
		layout:"fit",
		items :posPanel
	});
});