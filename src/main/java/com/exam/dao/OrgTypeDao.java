package com.exam.dao;

import java.util.List;
import java.util.Map;

import com.exam.bean.OrgType;

public interface OrgTypeDao {
	
	Integer addOrgType(Map<String, Object> params); //添加组织机构类型
	
	List<OrgType> getOrgTypes(Map<String, Object> params);  //查询组织机构类型
	
	Integer delOrgType(Map<String, Object> params); //删除组织机构类型
	
	
}
