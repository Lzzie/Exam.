Ext.onReady(function(){
	
	Ext.require([
		         	'Ext.data.*',
		         	'Ext.grid.*',
		         	'Ext.tree.*',
		         	'Ext.form.*',
		         	'Ext.ux.*'
		         	]);
	
	var orgTypeGridPanel;
	var orgTypeStore;
	var addOrgTypeWin;
	var addOrgTypeForm;
	
	
	
	orgTypeStore = Ext.create("Ext.data.Store",{
		 model: "Ext.data.Model",
	     proxy: {
	         type: 'ajax',
	         url: '../exam/orgType/getOrgTypes',
	         reader: {
	             type: 'json',
	             rootProperty: 'list'
	         }
	     },
	     autoLoad:false
	});
	
	orgTypeStore.load();
	
	
	
	
	
	//添加组织机构类型
	function addOrgType(){
		
		if(addOrgTypeForm==null){
			
			var comboOrgTypeStore = Ext.create("Ext.data.Store",{
				 model: "Ext.data.Model",
			     proxy: {
			         type: 'ajax',
			         url: '../exam/orgType/getOrgTypes',
			         reader: {
			             type: 'json',
			             rootProperty: 'list'
			         }
			     },
			     autoLoad:false
			});

			
			addOrgTypeForm = Ext.create("Ext.form.Panel",{
				height:"100%",
				width:350,
				border:0,
				url:"../exam/orgType/addOrgType",
				items:[
				       {
				    	   xtype:"textfield", labelWidth:80, width:270, labelAlign:"right", fieldLabel:"名称", margin:"30 10 20 10", name:"orgTypeName"
				       },{
				    	   xtype:"textfield", labelWidth:80, width:270, labelAlign:"right", fieldLabel:"标示符", margin:"10 10 20 10", name:"orgTypeSn"
				       },{
				    	   xtype:"combo", labelWidth:80, width:270, labelAlign:"right", fieldLabel:"父类型名称", margin:"10 10 20 10",name:"orgTypeParentId",
				    	   emptyText:"请选择父类型",store:comboOrgTypeStore,displayField:"orgTypeName",valueField:"orgTypeId"
				       },{
				    	   xtype:"textarea", labelWidth:80, width:270, labelAlign:"right", fieldLabel:"描述", margin:"10 10 20 10", name:"orgTypeDes"
				       }
				    ]
			});
		}

		if(addOrgTypeWin == null)
		addOrgTypeWin = Ext.create("Ext.window.Window",{
			title:"添加组织机构类型",
			height:350,
			width:350,
			x:200,
			y:50,
			items:addOrgTypeForm,
			buttons:[{text:"保存",margin:"10 20 10 0",handler:function(){			
				var form = addOrgTypeForm.getForm();
	 			if(form.isValid()){
	 				form.submit({
	 					submitEmptyText:false,
    	 				success : function(){      
    	 				    orgTypeStore.reload();
    	 					addOrgTypeWin.close();
    	 					Ext.Msg.alert("信息提示","组织机构类型添加成功！");

    	 				},
    	 				failure : function(form, action){
    	 					Ext.Msg.alert("信息提示", "组织机构类型添加失败，请检查数据和网络！");
    	 				}
    	 			});	   	    	 				
	 			}
			}			
			},{text:"重置",margin:"10 20 10 0", handler:function(){
				addOrgTypeForm.getForm().reset();
			}}],
			listeners:{
				close:function(){
					addOrgTypeWin = null;
					addOrgTypeForm = null;
				}
			}
		});		
		addOrgTypeWin.show();	
	}//-------------添加组织机构类型结束
	
	

	//删除组织机构类型
	function delOrgType(grid, rowIndex, colIndex, actionItem, event, record, row){
		
		Ext.Msg.confirm("删除组织机构类型","该删除操作不可撤销，是否删除？？",function(btn){
			if(btn=="yes"){
				Ext.Ajax.request({
				    url: "../exam/orgType/delOrgType",
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
	
	
	orgTypeGridPanel = Ext.create("Ext.grid.Panel",{
		store : orgTypeStore, 
		columns:[
		         {dataIndex: 'orgTypeId', hidden:true},
		         {header:"名称",dataIndex: 'orgTypeName', flex:1,align:"center",sort:false},
		         {header:"标示符",dataIndex: 'orgTypeSn', flex:1,align:"center",sort:false},
		         {header:"父类型名称",dataIndex: 'orgTypeParentName', flex:1,align:"center",sort:false,emptyCellText:"无"},
				{header:"描述",dataIndex:"orgTypeDes", flex:1,align:"center",emptyCellText:"无"},
		         {header:"排序值",dataIndex: 'sort', flex:1,align:"center",sort:false},
		         {header:"操作",
		        	align:"center",
		           xtype:'actioncolumn',
		           width:200,
	        	   items:[
	        	        {icon:"../ext/images/edit.png", handler:function(){Ext.Msg.alert("信息提示","编辑信息");}},"-",
	        	        {icon:"../ext/images/del.png", handler:delOrgType},"-",
	        	        {icon:"../ext/images/find.png", handler:function(){Ext.Msg.alert("信息提示","查看详情");}}
        	        ]		 
		         }
		         ],
		tbar:[{text:"添加", icon:"../ext/images/add.png",handler:addOrgType},"-",{text:"查询"}]
	
	});
	
	
	 Ext.create('Ext.container.Viewport', {
		layout:"fit",
		items :orgTypeGridPanel
	});
});