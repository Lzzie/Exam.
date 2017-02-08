package com.exam.dao;

import java.util.List;
import java.util.Map;

import com.exam.bean.Org;

public interface OrgDao {
	
	Integer addOrg(Map<String, Object> params); //添加组织机构

	List<Org> getOrgs(Map<String, Object> params); //根据条件查询组织机构
	
	Integer delOrg(Map<String, Object> params); //删除组织机构

	
	
}
