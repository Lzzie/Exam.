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
import com.exam.bean.Person;
import com.exam.service.PersonService;

/***
 * 
 * @描述： 人员管理
 * @author lzzie
 * @date 2016年1月6日 下午3:10:38
 * @version 1.0
 */

@Controller
@RequestMapping(value="/exam/person")
public class PersonController {
	
	private Map<String, Object> result;
	
	@Resource
	private PersonService personService;
	
	
	//添加人员
	@RequestMapping(value="/addPerson")
	public @ResponseBody String addPerson(@ModelAttribute Person person){
		result= new HashMap<String, Object>();
		result.put("success", personService.addPerson(person));
		return JSON.toJSONString(result);
	}
	
	
	//查询人员，可附加查询条件
	@RequestMapping(value="/getPersons")
	public @ResponseBody String getPersons(@RequestParam Map<String, Object> params){
		System.out.println("==========执行到了人员的查询操作");
		result= new HashMap<String, Object>();
		result.put("list",personService.getPersons(params));
		return JSON.toJSONString(result);
	}
	
	
	
	//删除人员
		@RequestMapping(value = "/delOrgType", method={RequestMethod.POST, RequestMethod.GET})
		public  @ResponseBody  String delOrgType(@RequestParam Map<String, Object> params){
			return personService.delPerson(params)?"删除成功！":"删除失败！";
		}
	
	
	

}
