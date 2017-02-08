package com.exam.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.exam.bean.Person;
import com.exam.dao.PersonDao;
import com.exam.interfaces.I_PersonService;
import com.exam.util.UuidUtil;

@Service
public class PersonService implements I_PersonService {

	@Resource
	private PersonDao personDao;
	//增加人员
	public boolean addPerson(Map<String, Object> params) {
		params.put("personId", UuidUtil.uuid());
		return personDao.addPerson(params)>0;
	}
    //查询人员
	public List<Person> getPersons(Map<String, Object> params) {
		return personDao.getPersons(params);
	}
	//删除人员
	public boolean delPerson(Map<String, Object> params) {
		System.out.println("============del"+params.get("personId"));
		return personDao.delPerson(params)>0;
	}
	
	

}
