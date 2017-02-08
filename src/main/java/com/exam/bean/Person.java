package com.exam.bean;

import org.springframework.stereotype.Component;

import com.exam.util.BaseEntity;

//人员实体类
@Component

@SuppressWarnings("unused")
public class Person extends BaseEntity {
	
	private static final long serialVersionUID = 1L;

	private String  personId;  // <PERSON_ID>人员的id，人员表中的主键
	
	private String personName; // <PERSON_NAME> 人员名称
	
	private String personIdCard; // <PERSON_ID_CARD> 身份证号
	
	private  String  orgId; // <ORG_ID>  所属组织
	
	private  String  posId;  // <POS_ID>  所在岗位
	
	private String personSn;  // <PERSON_SN> 人员的员工号
	
	private String  tel;  //  <TEL> 联系电话
	
	private  String  nickName;  //  <NICK_NAME> 昵称
	
	private  String  xl;  // <XL> 学历
	
	private  String  sex;  //<SEX>  性别
	
	private Integer  age;  // <AGE>  年龄
	
	private  String addr;  //  <ADDR> 家庭住址
	
	private String personDes;  // <PERSON_DES>备注
	
	private long sort;  // <SORT>  排序值

	public String getPersonId() {
		return this.getString("personId");
	}

	public void setPersonId(String personId) {
		this.set("personId", personId) ;
	}

	public String getPersonSn() {
		return this.getString("personSn");
	}

	public void setPersonSn(String personSn) {
		this.set("personSn", personSn);
	}

	public String getPersonIdCard() {
		return this.getString("personIdCard");
	}

	public void setPersonIdCard(String personIdCard) {
		this.set("personIdCard", personIdCard) ;
	}

	public String getOrgId() {
		return this.getString("orgId");
	}

	public void setOrgId(String orgId) {
		this.set("orgId", orgId) ;
	}

	public String getPosId() {
		return this.getString("posId");
	}

	public void setPosId(String posId) {
		this.set("posId", posId);
	}

	public String getNickName() {
		return this.getString("nickName");
	}

	public void setNickName(String nickName) {
		this.set("nickName", nickName) ;
	}

	public String getSex() {
		return this.getString("sex");
	}

	public void setSex(String sex) {
		this.set("sex", sex) ;
	}

	public Integer getAge() {
		return this.getInteger("age");
	}

	public void setAge(Integer age) {
		this.set("age", age) ;
	}

	public String getXl() {
		return this.getString("xl");
	}

	public void setXl(String xl) {
		this.set("xl", xl);
	}

	public String getTel() {
		return this.getString("tel");
	}

	public void setTel(String tel) {
		this.set("tel", tel) ;
	}

	public String getAddr() {
		return this.getString("addr");
	}

	public void setAddr(String addr) {
		this.set("addr", addr);
	}

	public String getPersonName() {
		return this.getString("personName");
	}

	public void setPersonName(String personName) {
		this.set("personName", personName) ;
	}

	public String getPersonDes() {
		return this.getString("personDes");
	}

	public void setPersonDes(String personDes) {
		this.set("personDes", personDes);
	}

	public long getSort() {
		return this.getLong("sort");
	}

	public void setSort(long sort) {
		this.set("sort", sort) ;
	}


	
	
	
}
