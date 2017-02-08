package com.exam.dao;

import java.util.List;
import java.util.Map;

import com.exam.bean.User;

public interface UserDao {
	
	 Integer addUser(Map<String, Object> params);  //添加用户操作
	 
	 List<User> getUsers(Map<String, Object> params) ;  //查询用户列表，可根据条件查询
	 
	 User getLoginUser(Map<String, Object> params);  // 根据用户名和密码获取用户
	 
	 Integer delUser(Map<String, Object> params); //删除用户


}
