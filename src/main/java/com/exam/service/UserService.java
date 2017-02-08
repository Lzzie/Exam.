package com.exam.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.exam.bean.User;
import com.exam.dao.UserDao;
import com.exam.interfaces.I_UserService;
import com.exam.util.UuidUtil;

@Service
public class UserService implements I_UserService {
	
	@Resource
	private  UserDao userDao;

	
	public boolean addUser(Map<String, Object> params) {
		
		params.put("userId", UuidUtil.uuid());
		
		return userDao.addUser(params)>0 ;
	}

	
	public List<User> getUsers(Map<String, Object> params) {
		return userDao.getUsers(params);
	}

	

	
	public User getLoginUser(Map<String, Object> params) {
		return userDao.getLoginUser(params);
	}
	
	
	public boolean delUser(Map<String, Object> params) {
		System.out.println("============del"+params.get("userId"));
		return userDao.delUser(params)>0;
	}
	
}
