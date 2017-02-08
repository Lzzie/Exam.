Ext.onReady(function(){
	
	var northPanel, westPanel,centerPanel ;
	var sysSetTreePanel, orgManagePanel,authManagePanel;
	var sysSetTreeStore, orgManageStore;
	
	
	
	//系统设置权限树
	//初始化系统设置权限树的数据(或者节点)
	sysSetTreeStore = Ext.create('Ext.data.TreeStore', {
	    root: {
	        expanded: true,
	        children: [
	            { 
	            	id:"personManage",
	            	text: "人员管理",
	            	leaf: true 

	            },
	            {id:"roleManage", text: "角色管理", leaf: true },
	            { id:"resourceManage",text: "资源管理", leaf: true }
	        ]
	    }
    	
	});
	
	
	
	
	orgManageStore = Ext.create('Ext.data.TreeStore', {
	    root: {
	        expanded: true,
	        children: [
	            { 
	            	id:"orgTypeManage",
	            	text: "组织机构类型管理",
	            	leaf: true 
	            },
	            {id:"orgManage", text: "组织机构管理", leaf: true },
	            { id:"positionManage",text: "岗位管理", leaf: true },
	            { id:"personManage",text: "人员管理", leaf: true },
	        ]
	    }
    	
	});
	
	orgManagePanel = Ext.create("Ext.tree.Panel",{
		title:"组织机构管理",
		height:225,
		store:orgManageStore,
		rootVisible:false,
		border:0,
		collapsible:true,
		margin:"0 0 1 0",
	    listeners :{
    		itemclick : function(abc, record, item, index, e, eOpts){

		    			var addPanel = null;
		    			if(Ext.getCmp(record.id+"tabPanel")!=null){
		    				addPanel = Ext.getCmp(record.id+"tabPanel");
		    			}else{
		    				
		    			   addPanel = Ext.create("Ext.panel.Panel",{
		    				id:record.id+"tabPanel",
		    				title:record.data.text,
		    				html:"<iframe src='sys/"+record.id+".jsp'  width='100%' height='100%' frameborder='0' scrolling='auto'></iframe>",
		    				closable:true
		    			});
		    			centerPanel.add(addPanel);
		    		}
		    			centerPanel.setActiveItem(addPanel);
    		  }
    	 }
		
	});
	
	authManageStore = Ext.create('Ext.data.TreeStore', {
	    root: {
	        expanded: true,
	        children: [
	            { 
	            	id:"userManage",
	            	text: "用户管理",
	            	leaf: true 
	            },
	          
	        ]
	    }
    	
	});
	
	authManagePanel = Ext.create("Ext.tree.Panel",{
		title:"角色权限管理",
		height:235,
		store:authManageStore,
		rootVisible:false,
		border:0,
		margin:"0 0 1 0",
	    listeners :{
    		itemclick : function(abc, record, item, index, e, eOpts){

		    			var addPanel = null;
		    			if(Ext.getCmp(record.id+"tabPanel")!=null){
		    				addPanel = Ext.getCmp(record.id+"tabPanel");
		    			}else{
		    				
		    			   addPanel = Ext.create("Ext.panel.Panel",{
		    				id:record.id+"tabPanel",
		    				title:record.data.text,
		    				html:"<iframe src='sys/"+record.id+".jsp'  width='100%' height='100%' frameborder='0' scrolling='auto'></iframe>",
		    				closable:true
		    			});
		    			centerPanel.add(addPanel);
		    		}
		    			centerPanel.setActiveItem(addPanel);
    		  }
    	 }
		
	});
	
	
	
	//创建放置系统权限树的panel
	sysSetTreePanel = Ext.create('Ext.tree.Panel', {
		    width: "100%",
		    height: "100%",
		    store : sysSetTreeStore,
		    border:0,
		    rootVisible: false,
		    listeners :{
	    		itemclick : function(abc, record, item, index, e, eOpts){
	    			Ext.Msg.alert("信息提示",record.text);
			    			var addPanel = null;
			    			if(Ext.getCmp(record.id+"tabPanel")!=null){
			    				addPanel = Ext.getCmp(record.id+"tabPanel");
			    			}else{
			    				
			    			   addPanel = Ext.create("Ext.panel.Panel",{
			    				id:record.id+"tabPanel",
			    				title:record.text,
			    				html:"<iframe src='sys/"+record.id+".jsp'  width='100%' height='100%' frameborder='0' scrolling='auto'></iframe>",
			    				closable:true
			    			});
			    			centerPanel.add(addPanel);
			    		}
			    			centerPanel.setActiveItem(addPanel);
	    		  }
	    	 }
		});
	  
	
	 northPanel = Ext.create("Ext.panel.Panel",{
		region:"north",
		collapsible:true,
		height:35,
		title:"欢迎进入本Cms管理系统 --- Han_qin",
		width:"100%"
	});
	
	 westPanel = Ext.create("Ext.tab.Panel",{
		collapsible:true,
		region:"west",
		title:"系统菜单",
		width:240,
		split: true,
		height:"100%",
		tabPosition:"left",
		items:[{ 
			title:"系统设置",
			items : [orgManagePanel,authManagePanel]
		},{
			title:"信息管理",
			html:"我是信息管理的内容"
		},{
			title:"商品管理",
			html:"商品菜单导航"
		}]
	});
	 
	 centerPanel = Ext.create("Ext.tab.Panel",{
			region:"center",
			items:[{
					title:"主操作区",
					html:"<iframe src='welcome.jsp' width='100%' height='100%' frameborder='0' scrolling='auto'></iframe>"
				}]
	});
	

	 Ext.create('Ext.container.Viewport', {
		layout:"border",
		items :[northPanel,westPanel,centerPanel]
	});
});