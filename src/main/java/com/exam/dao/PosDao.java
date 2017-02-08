package com.exam.dao;

import java.util.List;
import java.util.Map;

import com.exam.bean.Pos;

public interface PosDao {
	
	public Integer addPos(Map<String, Object> params); //增加岗位
	
	public List<Pos> getPositions(Map<String, Object> params); //获取岗位列表，可根据参数查询
	
	Integer delPos(Map<String, Object> params); //删除岗位


}
