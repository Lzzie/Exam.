Ext.onReady(function(){
	
	Ext.require([
		         	'Ext.data.*',
		         	'Ext.grid.*',
		         	'Ext.tree.*',
		         	'Ext.form.*',
		         	'Ext.ux.*'
		         	]);
	
	var userStore, userRoleStore;
	var	userGridPanel;
	var addUserWin, setUserWin;
	var addUserForm, setUserForm;

	
	userStore = Ext.create("Ext.data.Store",{
		 model: "Ext.data.Model",
	     proxy: {
	         type: 'ajax',
	         url: '../exam/user/getUsers',
	         reader: {
	             type: 'json',
	             rootProperty: 'list'
	         }
	     },
	     autoLoad:false
	});
	 userStore.load();
	

	 
	
		
		//Ext.Msg.alert("信息提示",record.data.userId);

	//添加用户
	function addUser(){
		
		if(addUserForm == null){
			
			
			addUserForm = Ext.create("Ext.form.Panel",{
				height:"100%",
				width:"100%",
				border:0,
				url:"../exam/user/addUser",
				items:[
				   	{  xtype:"textfield", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"用户名", margin:"30 10 15 10", name:"loginName" },
					{  xtype:"textfield", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"昵称", margin:"10 10 15 10", name:"nickName" },
					{  xtype:"textfield", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"密码", margin:"10 10 15 10", name:"loginPwd" },
					{  xtype:"textfield", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"确认密码", margin:"10 10 15 10", name:"pwdConfirm" },
					{  xtype:"combo", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"状态", margin:"10 10 15 10", name:"state" ,
						displayField:"text",valueField:"value",store:Ext.create("Ext.data.Store",{
							model:"Ext.data.Model",
							fields: [
							         {name: 'text', type: 'string'},
							         {name: 'value',  type: 'string'},
							     ],
					     data : [
					             {text: '正常',    value: 1},
					             {text: '禁用', value: 0},
					         ]
						})
					},
					{  xtype:"textarea", labelWidth:100, width:300, labelAlign:"right", fieldLabel:"备注", margin:"10 10 15 10", name:"userDes" }
				       ]
			});
		}
		
		if(addUserWin == null){
			addUserWin = Ext.create("Ext.window.Window",{
				title:"添加员工信息",
				height:410,
				width:400,
				x:200,
				y:30,
				items:addUserForm,
				buttons:[{text:"保存",margin:"10 20 10 0",handler:function(){
					
					var form = addUserForm.getForm();
    	 			if(form.isValid()){
    	 				form.submit({
    	 					submitEmptyText:false,
	    	 				success : function(form, action){
	    	 					Ext.Msg.alert("信息提示", "组织机构添加成功！");
	    	 					userStore.reload();
	    	 					addUserWin.close();
	    	 				},
	    	 				failure : function(form, action){
	    	 					Ext.Msg.alert("信息提示", "组织机构添加失败，请检查数据和网络！");
	    	 				}
	    	 			});	   	    	 				
    	 			}
					
					
					}			
				},{text:"重置",margin:"10 20 10 0", handler:function(){
				}}],
				listeners:{
					close:function(){
						addUserForm = null;
						addUserWin = null;
					}
				}
			});		
		}

		addUserWin.show();	
	}//-------------添加用户结束
	
	
	//删除用户
	function delUser(grid, rowIndex, colIndex, actionItem, event, record, row){
		
		Ext.Msg.confirm("删除您所选中的用户","该删除操作不可撤销，是否删除？？",function(btn){
			if(btn=="yes"){
				Ext.Ajax.request({
				    url: "../exam/user/delUser",
				    params: {
				        userId : record.data.userId
				    },
				    success: function(response){
				        Ext.Msg.alert("信息提示", response.responseText);
				        userStore.reload();
				    }
				});
			}
		});	
	}//----删除用户
	

	userGridPanel = Ext.create("Ext.grid.Panel",{
		store:userStore,
		columns:[
		         {dataIndex: 'userId', hidden:true},
		         {header:"登录名",dataIndex: 'loginName', flex:1,align:"center",sort:false},
		         {header:"昵称",dataIndex: 'nickName', flex:1,align:"center",sort:false},
		         {header:"对应人员",dataIndex: 'personId', flex:1,align:"center",sort:false,emptyCellText:"无"},
		         {header:"状态",dataIndex: 'state', flex:1,align:"center",sort:false,
		 			renderer: function(value){
						if(value==1){
							return "正常";
						}else{
							return "已禁用";
						}
					}
		         },
		         {header:"创建者",dataIndex: 'creater', flex:1,align:"center",sort:false, hidden:true},
		         {header:"创建时间",dataIndex: 'createtime', flex:1,align:"center",sort:false, hidden:true},
		         {header:"备注",dataIndex: 'userDes', flex:1,align:"center",sort:false},
		         {header:"排序值",dataIndex: 'sort', flex:1,align:"center",sort:false, hidden:true},
		         {header:"操作",
		        	align:"center",
		           xtype:'actioncolumn',
		           width:200,
	        	   items:[
	        	        {icon:"../ext/images/edit.png", handler:function(){Ext.Msg.alert("信息提示","编辑信息");}},"-",
	        	        {icon:"../ext/images/del.png",handler:delUser},"-", //需  增加 设置用户 功能
	        	        {icon:"../ext/images/find.png", handler:function(){Ext.Msg.alert("信息提示","查看详情");}}
        	        ]		 
		         }
		         ],
		tbar:[{text:"添加", icon:"../ext/images/add.png",handler:addUser},"-",{text:"查询"}]
	
	});
	
	
	 Ext.create('Ext.container.Viewport', {
		layout:"fit",
		items :userGridPanel
	});
});