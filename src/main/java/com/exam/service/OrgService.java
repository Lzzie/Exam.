package com.exam.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.exam.bean.Org;
import com.exam.dao.OrgDao;
import com.exam.interfaces.I_OrgService;
import com.exam.util.UuidUtil;

@Service
public class OrgService implements I_OrgService {
	
	@Resource
	private OrgDao orgDao;

	public boolean addOrg(Map<String, Object> params) {
		
		if(params.get("orgParentId")==null || params.get("orgParentId").toString().equals("")){
			params.put("orgParentId", "root");
		}
		params.put("orgId", UuidUtil.uuid());
		return orgDao.addOrg(params)>0;
	}

	public List<Org> getOrgs(Map<String, Object> params) {
		return orgDao. getOrgs(params);
	}

	public boolean delOrg(Map<String, Object> params) {
		System.out.println("============del"+params.get("orgId"));
		return orgDao.delOrg(params)>0;
	}
	

}
