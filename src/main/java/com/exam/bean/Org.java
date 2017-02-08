package com.exam.bean;

import org.springframework.stereotype.Component;

import com.exam.util.BaseEntity;

@SuppressWarnings({"serial","unused"})
@Component
public class Org  extends BaseEntity {
	
	private String orgId;  //<ORG_ID>主键
	
	private String orgName;  //<ORG_NAME>组织机构的名字
	
	private  String  orgSn;  // <ORG_SN>  组织机构识别码，唯一性，可以代表该组织机构
	
	private String orgShortName; //  <ORG_SHORT_NAME> 组织机构的简称
	
	private String orgParentId;  //<ORG_PARENT_ID>父组织的id
	
	private String orgTypeId;  //<ORG_TYPE_ID>所属组织机构类型id
	
	private String orgDes; // <ORG_DES>组织机构描述
	
	private String orgTel;  // <ORG_TEL> 组织机构的电话
	
	private  String orgAddr; // <ORG_ADDR> 组织就够地址

	private long sort;    //  <SORT> 排序值

	public String getOrgId() {
		return this.getString("orgId");
	}

	public void setOrgId(String orgId) {
		this. set("orgId", orgId);
	}

	public String getOrgName() {
		return this.getString("orgName");
	}

	public void setOrgName(String orgName) {
		this.set("orgName", orgName) ;
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

	public String getOrgTypeId() {
		return this.getString("orgTypeId");
	}

	public void setOrgTypeId(String orgTypeId) {
		this.set("orgTypeId", orgTypeId);
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
		this.set("sort", sort);
	}
	
	
	
	
}
