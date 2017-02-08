Ext.onReady(function(){
	
	Ext.require([
		         	'Ext.data.*',
		         	'Ext.grid.*',
		         	'Ext.tree.*',
		         	'Ext.form.*',
		         	'Ext.ux.*'
		         	]);
	
	var comOrgTreeStore, comPosStore, personStore;
	var	personGridPanel;
	var addPersonWin;
	var addPersonForm;

	comPosStore = Ext.create("Ext.data.Store",{
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
	
	
	
	 personStore = Ext.create("Ext.data.Store",{
		 model: "Ext.data.Model",
	     proxy: {
	         type: 'ajax',
	         url: '../exam/person/getPersons',
	         reader: {
	             type: 'json',
	             rootProperty: 'list'
	         }
	     },
	     autoLoad:false
	});
	 personStore.load();
	
	
	
	
	//添加员工信息
	function addPerson(){
		
		if(addPersonForm == null){
			
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
			 
			
			
			addPersonForm = Ext.create("Ext.form.Panel",{
				height:"100%",
				width:"100%",
				border:0,
				url:"../exam/person/addPerson",
				layout:"vbox",
				items :[{
					xtype:'fieldset',
					collapsible:true,
					margin:"10 20 10 20",
		            width:"100%",
		            height:150,
		            title: '基本信息，必填',
		            layout:{
		                type: 'table',
		                columns: 2
		            },
		            items:[
					       {
					    	   xtype:"textfield", labelWidth:60, width:240, labelAlign:"right", fieldLabel:"姓名", margin:"10 10 5 10", name:"personName"
					       },
					       {
					    	   xtype:"textfield", labelWidth:60, width:240, labelAlign:"right", fieldLabel:"身份证", margin:"10 10 5 10", name:"personIdCard"
					       },
							{  xtype:"treepicker", labelWidth:60, width:240, labelAlign:"right", fieldLabel:"所属组织", margin:"10 10 15 10", name:"orgId",
							    store:comOrgTreeStore,  displayField:"text",minPickerHeight: 200,value:"",scrollable:true, emptyText:"请选择父组织",
							    listeners:{
							    	select:function(picker, record, eOpts){
							    		comPosStore.load({
							    			params:{
							    				orgId: record.data.id
							    			}
							    		});
							    	}
							    }
		    	          	},
					       {
					    	   xtype:"combo", labelWidth:60, width:240, labelAlign:"right", fieldLabel:"所在岗位", margin:"5 10 5 10", name:"posId",
					    	   store:comPosStore,displayField:"posName", valueField:"posId",queryMode:"local",emptyText:"请选择岗位"
					       },
					       {
					    	   xtype:"textfield", labelWidth:60, width:240, labelAlign:"right", fieldLabel:"员工编号", margin:"5 10 15 10", name:"personSn"
					       },
					       {
					    	   xtype:"textfield", labelWidth:60, width:240, labelAlign:"right", fieldLabel:"联系方式", margin:"5 10 15 10", name:"tel"
					       }
					     ]
		        }, {
		        	xtype:'fieldset',
		        	collapsible:true,
		        	margin:"10 20 20 20",
		            width:"100%",
		            height:220,
		            title: '附加信息，可选',
		            layout:{
		                type: 'table',
		                columns: 2
		            },
		            items:[
		                   {
					    	   xtype:"textfield", labelWidth:60, width:240, labelAlign:"right", fieldLabel:"昵称", margin:"15 10 5 10", name:"nickName"
					       },
					       {
					    	   xtype:"combo", labelWidth:60, width:240, labelAlign:"right", fieldLabel:"学历", margin:"15 10 5 10", name:"xl",
					    	   store:["小学及以下","初中","高中","专科","本科","硕士","博士及以上"]
					       },
					       {
					           xtype: 'radiogroup',
					           labelWidth:70, width:230,
					           fieldLabel: '性别',
					           labelAlign:"right",
					           columns: 2,
					           vertical: true,
					           items: [
					               { boxLabel: '男', name: 'sex', inputValue: '男' ,margin:"0 40 0 20"},
					               { boxLabel: '女', name: 'sex', inputValue: '女', checked: true, margin:"0 60 0 0"}
					           ]
					       },{
					    	   xtype:"textfield", labelWidth:60, width:240, labelAlign:"right", fieldLabel:"年龄", margin:"5 10 5 10", name:"age"
					       },
					       {
					    	   xtype:"textfield", labelWidth:60, width:500, labelAlign:"right", fieldLabel:"住址", margin:"5 10 10 10", name:"addr",
					    	   colspan: 2
					       },
					       {
					    	   xtype:"textarea", labelWidth:60, width:500, labelAlign:"right", fieldLabel:"备注", margin:"5 10 10 10", name:"personDes",
					    	   colspan: 2
					       }
		               ]
		        }]
				
			});
		}
		
		if(addPersonWin == null){
			addPersonWin = Ext.create("Ext.window.Window",{
				title:"添加员工信息",
				height:520,
				width:600,
				x:200,
				y:30,
				items:addPersonForm,
				buttons:[{text:"保存",margin:"10 20 10 0",handler:function(){
					
					var form = addPersonForm.getForm();
    	 			if(form.isValid()){
    	 				form.submit({
    	 					submitEmptyText:false,
	    	 				success : function(form, action){
	    	 					Ext.Msg.alert("信息提示", "员工信息添加成功！");
	    	 					personStore.reload();
	    	 					addPersonWin.close();
	    	 				},
	    	 				failure : function(form, action){
	    	 					Ext.Msg.alert("信息提示", "员工信息添加失败，请检查数据和网络！");
	    	 				}
	    	 			});	   	    	 				
    	 			}
					
					
					}			
				},{text:"重置",margin:"10 20 10 0", handler:function(){
				}}],
				listeners:{
					close:function(){
						addPersonForm = null;
						addPersonWin = null;
					}
				}
			});		
		}

		addPersonWin.show();	
	}//-------------添加员工信息结束
	
	
	
	//删除员工
	function delPerson(grid, rowIndex, colIndex, actionItem, event, record, row){
		
		Ext.Msg.confirm("删除员工信息","该删除操作不可撤销，是否删除？？",function(btn){
			if(btn=="yes"){
				Ext.Ajax.request({
				    url: "../exam/Person/delPerson",
				    params: {
				    	PersonId : record.data.PersonId
				    },
				    success: function(response){
				        Ext.Msg.alert("信息提示", response.responseText);
				        orgTypeStore.reload();
				    }
				});
			}
		});	
	}//----删除员工信息
	

	personGridPanel = Ext.create("Ext.grid.Panel",{
		store:personStore,
		columns:[
		         {dataIndex: 'personId', hidden:true},
		         {header:"姓名",dataIndex: 'personName', flex:1,align:"center",sort:false},
		         {header:"身份证号",dataIndex: 'personIdCard', flex:1,align:"center",sort:false},
		         {header:"所在部门",dataIndex: 'orgName', flex:1,align:"center",sort:false},
		         {header:"职位",dataIndex: 'posName', flex:1,align:"center",sort:false},
		         {header:"员工编号",dataIndex: 'personSn', flex:1,align:"center",sort:false},
		         {header:"联系方式",dataIndex: 'tel', flex:1,align:"center",sort:false},
		         {header:"昵称",dataIndex: 'nickName', flex:1,align:"center",sort:false, hidden:true},
		         {header:"学历",dataIndex: 'xl', flex:1,align:"center",sort:false, hidden:true},
		         {header:"性别",dataIndex: 'sex', flex:1,align:"center",sort:false, hidden:true},
		         {header:"年龄",dataIndex: 'age', flex:1,align:"center",sort:false, hidden:true},         
		         {header:"家庭住址",dataIndex: 'addr', flex:1,align:"center",sort:false, hidden:true},
		         {header:"备注",dataIndex: 'personDes', flex:1,align:"center",sort:false, hidden:true},
		         {header:"排序值",dataIndex: 'sort', flex:1,align:"center",sort:false, hidden:true},
		         {header:"操作",
		        	align:"center",
		           xtype:'actioncolumn',
		           width:200,
	        	   items:[
	        	        {icon:"../ext/images/edit.png", handler:function(){Ext.Msg.alert("信息提示","编辑信息");}},"-",
	        	        {icon:"../ext/images/del.png", handler:delPerson},"-",
	        	        {icon:"../ext/images/find.png", handler:function(){Ext.Msg.alert("信息提示","查看详情");}}
        	        ]		 
		         }
		         ],
		tbar:[{text:"添加", icon:"../ext/images/add.png",handler:addPerson},"-",{text:"查询"}]
	
	});
	
	
	 Ext.create('Ext.container.Viewport', {
		layout:"fit",
		items :personGridPanel
	});
});