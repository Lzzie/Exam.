package com.exam.bean;

import com.exam.util.BaseEntity;

/***
 * 
 * @描述： 用于获取子节点
 *         无controller
 * @author lzzie
 * @date 2016年1月6日 下午3:12:10
 * @version 1.0
 */


@SuppressWarnings({ "unused", "serial" })
public class Node extends BaseEntity{
	
	private String id; //节点的id，点击该节点时，将id传递给后台代码,该属性名必须是id
	
	private String text;  //节点上要显示文字信息，该属性名必须是text
	
	private boolean leaf;  //是不是叶子节点，该属性名必须是leaf
	
	private Integer childCount;  //子节点的个数
	
	private String orgSn;
	
	private String orgShortName;
	
	private String orgParentId;
	
	private String orgParentName;
	
	private String orgTypeId;
	
	private String orgTypeName;
	
	private String orgDes;
	
	private String orgTel;
	
	private String orgAddr;
	
	private long sort;
	
	public String getId() {
		return this.getString("id");
	}

	public void setId(String id) {
		this.set("id", id);
	}

	public String getText() {
		return this.getString("text");
	}

	public void setText(String text) {
		this.set("text", text);
	}

	public boolean isLeaf() {
		return this.getBoolean("leaf");
	}

	public void setLeaf(boolean leaf) {
		this.set("leaf", leaf);
	}

	public Integer getChildCount() {
		return this.getInteger("childCount");
	}

	public void setChildCount(Integer childCount) {
		this.set("childCount", childCount) ;
	}

	public String getNodeName() {
		return this.getString("nodeName");
	}

	public void setNodeName(String nodeName) {
		this.set("nodeName", nodeName) ;
	}

	public String getOrgSn() {
		return this.getString("orgSn");
	}

	public void setOrgSn(String orgSn) {
		this.set("orgSn", orgSn) ;
	}

	public String getOrgShortName() {
		return this.getString("orgShortName");
	}

	public void setOrgShortName(String orgShortName) {
		this.set("orgShortName", orgShortName) ;
	}

	public String getOrgParentId() {
		return this.getString("orgParentId");
	}

	public void setOrgParentId(String orgParentId) {
		this.set("orgParentId", orgParentId) ;
	}

	public String getOrgParentName() {
		return this.getString("orgParentName");
	}

	public void setOrgParentName(String orgParentName) {
		this.set("orgParentName", orgParentName) ;
	}

	public String getOrgTypeId() {
		return this.getString("orgTypeId");
	}

	public void setOrgTypeId(String orgTypeId) {
		this.set("orgTypeId", orgTypeId) ;
	}

	public String getOrgTypeName() {
		return this.getString("orgTypeName");
	}

	public void setOrgTypeName(String orgTypeName) {
		this.set("orgTypeName", orgTypeName) ;
	}

	public String getOrgDes() {
		return this.getString("orgDes");
	}

	public void setOrgDes(String orgDes) {
		this.set("orgDes", orgDes) ;
	}

	public String getOrgTel() {
		return this.getString("orgTel");
	}

	public void setOrgTel(String orgTel) {
		this.set("orgTel", orgTel) ;
	}

	public String getOrgAddr() {
		return this.getString("orgAddr");
	}

	public void setOrgAddr(String orgAddr) {
		this.set("orgAddr", orgAddr) ;
	}

	public long getSort() {
		return this.getLong("sort");
	}

	public void setSort(long sort) {
		this.set("sort", sort)  ;
	}
	
}
