package com.exam.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.exam.bean.Pos;
import com.exam.dao.PosDao;
import com.exam.interfaces.I_PosService;
import com.exam.util.UuidUtil;

@Service
public class PosService implements I_PosService {

	@Resource
	private PosDao posDao;
	
	//增加岗位
	public boolean addPos(Map<String, Object> params) {
		
		params.put("posId", UuidUtil.uuid());
		return posDao.addPos(params)>0;
	}
    //查询岗位
	public List<Pos> getPositions(Map<String, Object> params) {
		return posDao.getPositions(params);
	}
	//删除岗位
	public boolean delPos(Map<String, Object> params) {
		System.out.println("============del"+params.get("posId"));
		return posDao.delPos(params)>0;
	}
	

}
