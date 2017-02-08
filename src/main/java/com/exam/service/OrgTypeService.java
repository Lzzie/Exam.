package com.exam.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.exam.bean.OrgType;
import com.exam.dao.OrgTypeDao;
import com.exam.interfaces.I_OrgTypeService;
import com.exam.util.UuidUtil;

@Service
public class OrgTypeService implements I_OrgTypeService {
	
	@Resource
	private OrgTypeDao orgTypeDao;
	
	public boolean addOrgType(Map<String, Object> params){
		if(params.get("orgTypeId")==null || params.get("orgTypeId").toString().equals("")){
			params.put("orgTypeId", UuidUtil.uuid());
		}
		if(params.get("orgTypeParentId")==null || params.get("orgTypeParentId").toString().equals("")){
			params.put("orgTypeParentId", "root");
		}
		
		return orgTypeDao.addOrgType(params)>0;
	}

	public List<OrgType> getOrgTypes(Map<String, Object> params) {
		return orgTypeDao.getOrgTypes(params);
	}

	public boolean delOrgType(Map<String, Object> params) {
		System.out.println("============del"+params.get("orgTypeId"));
		return orgTypeDao.delOrgType(params)>0;
	}
}
