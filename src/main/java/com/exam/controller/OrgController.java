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
import com.exam.bean.Org;
import com.exam.service.NodeService;
import com.exam.service.OrgService;

/***
 * 
 * @描述： 组织机构
 * @author lzzie
 * @date 2016年1月6日 下午3:09:42
 * @version 1.0
 */

@Controller
@RequestMapping(value = "/exam/org")
public class OrgController {
	
	Map<String, Object> result;
	
@Resource
 private	OrgService orgService;

@Resource
private NodeService nodeService;
	
	//增加组织机构
	@RequestMapping(value = "/addOrg", method={RequestMethod.POST, RequestMethod.GET})
	public @ResponseBody String addOrg(@ModelAttribute Org org){
		result = new HashMap<String, Object>();
		result.put("success", orgService.addOrg(org));
		return JSON.toJSONString(result);
	}
	
	
	//根据组织机构id获取子组织
	@RequestMapping(value = "/getChildrenByOrgId")
	public @ResponseBody String getChildrenByOrgId(@RequestParam Map<String, Object> params){

		result = new HashMap<String, Object>();
		result.put("nodeList", nodeService.getChildrenByOrgId(params));
		System.out.println( JSON.toJSONString(result));
		return JSON.toJSONString(result);
	}

	//查询组织机构，可以附加查询条件
	@RequestMapping(value = "/getOrgs")
	public @ResponseBody String getOrgs(@RequestParam Map<String, Object> params){
		result = new HashMap<String, Object>();
		result.put("list", orgService.getOrgs(params));
		return JSON.toJSONString(result);
	}
	

	//查询组织机构，可以附加查询条件
	@RequestMapping(value = "/getOrgNodes")
	public @ResponseBody String getOrgNodes(@RequestParam Map<String, Object> params){
		result = new HashMap<String, Object>();
		result.put("nodeList", nodeService.getOrgNodes(params));
		System.out.println(JSON.toJSONString(result));
		return JSON.toJSONString(result);
	}
	
	
	//删除组织机构类型
    @RequestMapping(value = "/delOrg", method={RequestMethod.POST, RequestMethod.GET})
	public  @ResponseBody  String delOrgType(@RequestParam Map<String, Object> params){
		return orgService.delOrg(params)?"删除成功！":"删除失败！";
		   	}	
	

}
