package com.exam.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.exam.bean.User;
import com.exam.service.UserService;

/***
 * 
 * @描述： 登录唯一控制器
 * @author lzzie
 * @date 2016年1月7日 下午7:30:37
 * 
 * 在返回一个页面时  return  重定向（一开始的转发并不一定可以支持）
 * 
 * @version 1.0
 */

@Controller
public class LoginController {

	@Resource
	private UserService userService;
	
	@RequestMapping(value = "/checkLogin")
	public String login(@ModelAttribute User user,  HttpServletResponse response, HttpSession session){
		
		User loginUser = userService.getLoginUser(user);
		if(loginUser!=null){
			session.setAttribute("user", loginUser);
			
			return "systemexam";
			
		}else{
			try {
				PrintWriter out = response.getWriter();
				out.write("<script>alert('用户名密码错误！')</script>");
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			return "login";
		}
		
		
		
	}
	
}
