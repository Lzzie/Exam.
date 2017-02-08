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
import com.exam.bean.User;
import com.exam.service.UserService;

/***
 * 
 * @描述： 用户管理 user 
 * 注意在数据库中 表名为 users
 * @author lzzie
 * @date 2016年1月6日 下午3:11:06
 * @version 1.0
 */

@Controller
@RequestMapping(value = "/exam/user")
public class UserController {
	
	private  Map<String, Object> result;
	
	@Resource
	private UserService userService;

	//添加用户
	@RequestMapping(value = "/addUser")
	public @ResponseBody  String addUser(@ModelAttribute User user){
		
		
		System.out.println("==============执行到了用户添加的操作");
		
		result = new HashMap<String, Object>();
		result.put("success", userService.addUser(user));
		return JSON.toJSONString(result);
		
	}
	
	//查询用户列表，可以根据条件查询
	@RequestMapping(value = "/getUsers")
	public @ResponseBody String getUsers(@RequestParam Map<String, Object> params){
		result = new HashMap<String, Object>();
		result.put("list", userService.getUsers(params));
		return JSON.toJSONString(result);
	}
	
	
	//删除用户
		@RequestMapping(value = "/delUser", method={RequestMethod.POST, RequestMethod.GET})
		public  @ResponseBody  String delUser(@RequestParam Map<String, Object> params){
			return userService.delUser(params)?"删除成功！":"删除失败！";
		}
	

}
