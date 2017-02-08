Ext.onReady(function(){
	
	Ext.require([
		         	'Ext.data.*',
		         	'Ext.grid.*',
		         	'Ext.tree.*',
		         	'Ext.form.*',
		         	'Ext.ux.*'
		         	]);
	
	var orgTypeGridPanel, orgPanel, orgTypeTreePanel;
	var orgTypeStore, orgTypeTreeStore, comOrgTypeTreeStore, comOrgTreeStore, orgStore, orgTreeStore;
	var addOrgWin;
	var addOrgForm;
	
	
	orgTypeTreeStore = Ext.create("Ext.data.TreeStore",{
		proxy : {
			type : 'ajax',
			url : "../exam/orgType/getOrgTypeNodes",
			reader : {
				type : "json",
				rootProperty : "nodeList"
			}
		},
		root : {
			id : "root",
			expanded : true,  
			leaf : false
		},
		
		nodeParam : "parentId"	
	});
	
	
	
	orgStore = Ext.create("Ext.data.Store",{
		 model: "Ext.data.Model",
	     proxy: {
	         type: 'ajax',
	         url: '../exam/org/getOrgs',
	         reader: {
	             type: 'json',
	             rootProperty: 'list'
	         }
	     },
	     autoLoad:false
	});
	orgStore.load();
	
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
			id : "root",
			expanded : true,  
			leaf : false
		},	
		nodeParam : "orgId"	
	})
	
	
	
	
	
	function addOrg(){
		
		if(addOrgForm==null){
			 comOrgTypeTreeStore = Ext.create("Ext.data.TreeStore",{
					proxy : {
						type : 'ajax',
						url : "../exam/orgType/getOrgTypeNodes",
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
					nodeParam : "parentId"	
				});
			 
			 
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
			 
			 
			addOrgForm = Ext.create("Ext.form.Panel",{
				width:"100%",
				height:"100",
				url:"../exam/org/addOrg",
				border:0,
				items:[
					{  xtype:"textfield", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"名称", margin:"30 10 15 10", name:"orgName" },
					{  xtype:"treepicker", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"组织类型", margin:"10 10 15 10", name:"orgTypeId",
					    store:comOrgTypeTreeStore,  displayField:"text",minPickerHeight: 200,value:"",scrollable:true, emptyText:"请选择机构类型"
    	          	},
					{  xtype:"treepicker", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"父组织名称", margin:"10 10 15 10", name:"orgParentId",
					    store:comOrgTreeStore,  displayField:"text",minPickerHeight: 200,value:"",scrollable:true, emptyText:"请选择父组织"
    	          	},
					{  xtype:"textfield", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"识别码", margin:"10 10 15 10", name:"orgSn" },
					{  xtype:"textfield", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"简称", margin:"10 10 15 10", name:"orgShortName" },
					{  xtype:"textfield", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"联系方式", margin:"10 10 15 10", name:"orgTel" },
					{  xtype:"textfield", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"地址", margin:"10 10 15 10", name:"orgAddr" },
					{  xtype:"textarea", labelWidth:100, width:300, labelAlign:"right", height:80,fieldLabel:"备注", margin:"10 10 30 10", name:"orgDes" }
			   ]
			});
		}
		
		
		
		if(addOrgWin == null){
			addOrgWin = Ext.create("Ext.window.Window",{
				title:"添加组织机构",
				width:400,
				height:500,
				x:300,
				y:70,
				items:addOrgForm,
				buttons:[{text:"保存",margin:"10 20 10 0",handler:function(){
					
					var form = addOrgForm.getForm();
    	 			if(form.isValid()){
    	 				form.submit({
    	 					submitEmptyText:false,
	    	 				success : function(form, action){
	    	 					orgStore.reload();
	    	 					addOrgWin.close();
	    	 					
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
						addOrgForm = null;
						addOrgWin = null;
					}
				}
			});
		}
		addOrgWin.show();
	}
	
	

	//中间左侧，组织机构类型树
	orgTypeTreePanel = Ext.create("Ext.tree.Panel",{
		region:"west",
		title:"组织机构类型",
		width:200,
		split: true,
		rootVisible:false,
		height:"100%",
		store:orgTypeTreeStore,
		listeners:{
			itemclick:function(a,b){
				orgStore.load({params:{orgTypeId:b.data.id}});
			}
		}
	});
	
	//删除组织机构类型
	function delOrg(grid, rowIndex, colIndex, actionItem, event, record, row){
		
		Ext.Msg.confirm("删除组织机构类型","该删除操作不可撤销，是否删除？？",function(btn){
			if(btn=="yes"){
				Ext.Ajax.request({
				    url: "../exam/org/delOrg",
				    params: {
				        orgTypeId : record.data.orgTypeId
				    },
				    success: function(response){
				        Ext.Msg.alert("信息提示", response.responseText);
				        orgTypeStore.reload();
				    }
				});
			}
		});	
	}//----删除组织机构类型结束
	

	//中间右侧，组织机构数据展示
	orgGridPanel = Ext.create("Ext.tree.Panel",{
		  store : orgTreeStore,
		  region: 'center',
		  rootVisible : false,
		  root:{
			id:'root',
			expanded:true
		  },
		  columns: [{
			xtype : 'treecolumn',
			header: '名称',  dataIndex: 'text', sortable:false,flex:1, width:400
		  	}, 
	         {header:"识别码",dataIndex: 'orgSn', flex:1,align:"center",sort:false},
	         {header:"简称",dataIndex: 'orgShortName', flex:1,align:"center",sort:false,emptyCellText:"无"},
			{header:"父组织机构",dataIndex:"orgParentName", flex:1,align:"center",emptyCellText:"无"},
			{header:"所属组织类型",dataIndex:"orgTypeName", flex:1,align:"center",emptyCellText:"无"},
			{header:"备注",dataIndex:"orgDes", flex:1,align:"center",emptyCellText:"无", hidden:true},
			{header:"联系方式",dataIndex:"orgTel", flex:1,align:"center",emptyCellText:"无",hidden:true},
			{header:"地址",dataIndex:"orgAddr", flex:1,align:"center",emptyCellText:"无", hidden:true},
	         {header:"排序值",dataIndex: 'sort', flex:1,align:"center",sort:false},
	         {
				header:"操作", xtype: "actioncolumn",width:120,layout:"fit", align: "center",
				items:[
				       {icon:"../ext/images/edit.png", handler:function(){Ext.Msg.alert("信息提示","编辑信息");}},"-",
	        	       {icon:"../ext/images/del.png", handler:delOrg},"-",
	        	       {icon:"../ext/images/find.png", handler:function(){Ext.Msg.alert("信息提示","查看详情");}}
				       ]
			  }],
		 tbar : [
		        {text : '添加', icon: "../ext/images/add.png", handler:addOrg},'-',
		        {text : '修改', icon: "../ext/images/edit.png"},'-',
		        {text : '删除', icon: "../ext/images/del.png"},'-',
		        {text : '详情', icon: "../ext/images/find.png"}
		       ]
	});
	
	
	
	

	
	//中间
	orgPanel =Ext.create("Ext.panel.Panel",{
		layout:"border",
		items:[orgTypeTreePanel,orgGridPanel]
		
	});
	
	 Ext.create('Ext.container.Viewport', {
		layout:"fit",
		items :orgPanel
	});
});