package com.exam.bean;

import org.springframework.stereotype.Component;

import com.exam.util.BaseEntity;

//组织机构类型实体类
@SuppressWarnings("unused")
@Component
public class OrgType extends BaseEntity {
	
	private static final long serialVersionUID = 1L;

	private String orgTypeId; //<ORG_TYPE_ID>唯一标示该组织机构类型，在数据库里体现为主键  驼峰转换器
	
	private  String orgTypeName; //<ORG_TYPE_NAME>组织机构类型的名字

	private String orgTypeParentId;  //<ORG_TYPE_PARENT_ID>组织机构类型的父类型
	
	private String orgTypeSn;   //<ORG_TYPE_SN>组织机构类型标识符，由管理员自己定义
	
	private String orgTypeDes; //<ORG_TYPE_DES>对组织机构类型的描述
	
	private long sort;  //<SORT>排序值
	
	
	public String getOrgTypeId() {
		return this.getString("orgTypeId");
	}

	public void setOrgTypeId(String orgTypeId) {
		this.set("orgTypeId", orgTypeId);
	}

	public String getOrgTypeName() {
		return this.getString("orgTypeName");
	}

	public void setOrgTypeName(String orgTypeName) {
		this.set("orgTypeName", orgTypeName) ;
	}

	public String getOrgTypeParentId() {
		return this.getString("orgTypeParentId");
	}

	public void setOrgTypeParentId(String orgTypeParentId) {
		this.set("orgTypeParentId", orgTypeParentId);
	}

	public String getOrgTypeSn() {
		return this.getString("orgTypeSn");
	}

	public void setOrgTypeSn(String orgTypeSn) {
		this.set("orgTypeSn", orgTypeSn);
	}

	public String getOrgTypeDes() {
		return this.getString("orgTypeDes");
	}

	public void setOrgTypeDes(String orgTypeDes) {
		this.set("orgTypeDes", orgTypeDes);
	}

	public long getSort() {
		return this.getLong("sort");
	}

	public void setSort(long sort) {
		this.set("sort", sort) ;
	}
}
