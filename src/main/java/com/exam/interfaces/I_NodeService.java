package com.exam.interfaces;

import java.util.List;
import java.util.Map;

import com.exam.bean.Node;

public interface I_NodeService {

	List<Node>	getChildrenNodes(Map<String, Object> params); 	//根据父组织机构类型节点的id查询所有子节点
	
	List<Node>	getChildrenByOrgId(Map<String, Object> params); 	//根据父组织机构id查询所有子节点，下拉树
	
	 List<Node> getOrgNodes(Map<String, Object> params) ; //根据父组织机构id查询所有子节点，treegrid中的store
	
}
