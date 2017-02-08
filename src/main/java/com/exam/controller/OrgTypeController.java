package com.exam.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.exam.bean.OrgType;
import com.exam.service.NodeService;
import com.exam.service.OrgTypeService;

/***
 * 
 * @描述： 组织机构类型
 * @author lzzie
 * 	
	控制器里每个方法不超过8行代码
	service中一般来说每个方法有是十几行代码就足够
	在dao中，每个方法只有一行
	需要注意的是:用到的注解一定写上
 * 
 * @date 2016年1月6日 下午3:10:22
 * @version 1.0
 */

@Controller
@RequestMapping(value = "/exam/orgType")
public class OrgTypeController {
	
	Map<String, Object> result;

	@Resource
private NodeService	nodeService;
	
	
@Resource
 private	OrgTypeService orgTypeService;
	
	//增加组织机构类型
	@RequestMapping(value = "/addOrgType", method={RequestMethod.POST, RequestMethod.GET})
	public @ResponseBody String addOrgType(@ModelAttribute OrgType orgType){
		result = new HashMap<String, Object>();
		result.put("success", orgTypeService.addOrgType(orgType));
		System.out.println("=============增加orgtype");
		return JSON.toJSONString(result);
	}
	
	
	//查询组织机构类型
	@RequestMapping(value = "/getOrgTypes", method={RequestMethod.POST, RequestMethod.GET})
	public @ResponseBody String getOrgTypes(@RequestParam Map<String, Object> params){
		result = new HashMap<String, Object>();
		System.out.println("=============查询orgtype"+params.get("orgTypeId"));
		result.put("list", orgTypeService.getOrgTypes(params));
		return JSON.toJSONString(result);
	}
	
	//删除组织机构类型
	@RequestMapping(value = "/delOrgType", method={RequestMethod.POST, RequestMethod.GET})
	public  @ResponseBody  String delOrgType(@RequestParam Map<String, Object> params){
		return orgTypeService.delOrgType(params)?"删除成功！":"删除失败！";
	}
	
	
	//根据组织机构类型父节点id获得该节点的子节点列表
	@RequestMapping(value = "/getOrgTypeNodes")
	public @ResponseBody String getOrgTypeNodes(@RequestParam Map<String, Object> params){
		System.out.println("===================11111111111");
		result = new HashMap<String, Object>();
		result.put("nodeList", nodeService.getChildrenNodes(params));
		System.out.println( JSON.toJSONString(result));
		return JSON.toJSONString(result);
	}
	
	
	
	

}
