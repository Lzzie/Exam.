package com.exam.bean;

import org.springframework.stereotype.Component;

import com.exam.util.BaseEntity;

@SuppressWarnings({"serial", "unused"})
@Component
public class Pos extends BaseEntity {

	private String posId;  //主键，唯一标示该岗位对象 <POS_ID>
	
	private String posName;  //岗位的名字 <POS_NAME>
	
	private String posSn;   //岗位标识符 <POS_SN>
	
	private  String orgId; //所属组织 <ORG_ID>
	
	private String posDes; //该岗位对象的描述信息 <POS_DES>
	
	private long sort;// <SORT>

	public String getPosId() {
		return this.getString("posId");
	}

	public void setPosId(String posId) {
		this.set("posId", posId);
	}

	public String getPosName() {
		return this.getString("posName");
	}

	public void setPosName(String posName) {
		this.set("posName", posName) ;
	}

	public String getOrgId() {
		return this.getString("orgId");
	}

	public void setOrgId(String orgId) {
		this.set("orgId", orgId);
	}

	public String getOrgDes() {
		return this.getString("orgDes");
	}

	public void setOrgDes(String orgDes) {
		this.set("orgDes", orgDes) ;
	}

	public long getSort() {
		return this.getLong("sort");
	}

	public void setSort(long sort) {
		this.set("sort", sort) ;
	}

	public String getPosSn() {
		return this.getString("posSn");
	}

	public void setPosSn(String posSn) {
		this.set("posSn", posSn) ;
	}
	
	
	
	
}
