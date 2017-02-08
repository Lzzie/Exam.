package com.exam.interfaces;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.exam.bean.User;

@SuppressWarnings("unused")
public interface I_UserService {
	
	
	boolean addUser(Map<String, Object> params);  //添加用户
	
	List<User> getUsers(Map<String, Object> params);  //查询用户列表，可以根据条件查询
	
	User getLoginUser(Map<String, Object> params);  //根据登录名和密码获取用户
	
	boolean delUser(Map<String, Object> params);   //删除用户

}
