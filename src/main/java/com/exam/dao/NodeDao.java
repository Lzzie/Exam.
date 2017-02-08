package com.exam.dao;

import java.util.List;
import java.util.Map;

import com.exam.bean.Node;

public interface NodeDao {
	
			List<Node>	getChildrenNodes(Map<String, Object> params);//根据父节点的id查询所有子节点
			
			List<Node>	getChildrenByOrgId(Map<String, Object> params);//根据父节点的id查询所有子节点，下拉树
			
			List<Node>	getOrgNodes(Map<String, Object> params);//根据父节点的id查询所有子节点，TREEGRID
			
			
}
