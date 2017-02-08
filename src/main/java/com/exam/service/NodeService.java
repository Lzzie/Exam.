package com.exam.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.exam.bean.Node;
import com.exam.dao.NodeDao;
import com.exam.interfaces.I_NodeService;
import com.exam.util.EmptyUtil;

@Service
public class NodeService implements I_NodeService {
	
		@Resource
		private NodeDao nodeDao;
		
		public List<Node> getChildrenNodes(Map<String, Object> params) {
			
			if(params.get("parentId")==null||(params.get("parentId").toString().equals("")))
				params.put("parentId", "root");
			
			List<Node> nodeList = nodeDao.getChildrenNodes(params);
			
			for(Node node : nodeList){
				if(node.getChildCount()>0) node.setLeaf( false);
				else node.setLeaf(true);
			}
			
			return nodeList;
		}
		
		
		public List<Node> getChildrenByOrgId(Map<String, Object> params) {
			
			if(params.get("orgId")==null||(params.get("orgId").toString().equals("")))
				params.put("orgId", "root");
			
			List<Node> nodeList = nodeDao.getChildrenByOrgId(params);
			
			for(Node node : nodeList){
				if(node.getChildCount()>0) node.setLeaf( false);
				else node.setLeaf(true);
			}
			
			return nodeList;
		}
		
		
		public List<Node> getOrgNodes(Map<String, Object> params) {
			
			
			if(EmptyUtil.isEmpty(params, "orgId")&&EmptyUtil.isEmpty(params, "orgTypeId"))
				params.put("orgId", "root");
			List<Node> nodeList = nodeDao.getOrgNodes(params);
			for(Node node : nodeList){
				if(node.getChildCount()>0) node.setLeaf( false);
				else node.setLeaf(true);
			}
			return nodeList;
		}


	
		
		

	
	

}
