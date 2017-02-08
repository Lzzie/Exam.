package com.exam.interfaces;

import java.util.List;
import java.util.Map;

import com.exam.bean.OrgType;

public interface I_OrgTypeService {
	
	boolean addOrgType(Map<String, Object> params);   //添加组织结构类型

	List<OrgType> getOrgTypes(Map<String, Object> params);  //查询组织机构类型
	
	boolean delOrgType(Map<String, Object> params);   //删除组织结构类型

}
