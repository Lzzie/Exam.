package com.exam.interfaces;

import java.util.List;
import java.util.Map;

import com.exam.bean.Person;

public interface I_PersonService {
	
	boolean addPerson(Map<String, Object> params);  //添加人员
	
	List<Person> getPersons(Map<String, Object> params);  //查询人员，可根据条件查询
	
	boolean delPerson(Map<String, Object> params);   //删除人员


}
