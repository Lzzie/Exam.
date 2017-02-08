package com.exam.interfaces;

import java.util.List;
import java.util.Map;

import com.exam.bean.Org;

public interface I_OrgService {
	
	boolean addOrg(Map<String, Object> params);   //添加组织结构类型

	List<Org> getOrgs(Map<String, Object> params);  //查询组织机构类型
	
	boolean delOrg(Map<String, Object> params);   //删除组织结构类型

}
