package com.exam.bean;

import org.springframework.stereotype.Component;

import com.exam.util.BaseEntity;
@Component
@SuppressWarnings("unused")
public class User extends BaseEntity {

	private static final long serialVersionUID = 1L;

	private String userId;  // <USER_ID> 表中主键
	
	private String loginName;  //<LOGIN_NAME>  登录名，
	
	private String nickName; // <NICK_NAME> 昵称
	
	private  String loginPwd;   // <LOGIN_PWD>	密码
	
	private String personId; // <PERSON_ID> 对应的人员id
	
	private Integer state;   //<STATE> 1--正常，  0--禁用
	
	private long createtime;  // <CREATETIME> 创建时间
	
	private String creater;   // <CREATER>  创建者
	
	private String salt; // <SALT> 加密用的盐,为9位随机字符串
	
	private Integer encryptCount; //<ENCRYPT_COUNT> 加密次数
	
	private Integer level;  //<LEVEL> 管理员的级别，0-超级管理员，1-高级管理员，2-普通管理员，3-低级管理员
	
	private String userDes; // <USER_DES> 用户描述
	
	private long sort; //<SORT> 排序值

	public String getUserId() {
		return this.getString("userId");
	}

	public void setUserId(String userId) {
		this.set("userId", userId) ;
	}

	public String getLoginName() {
		return this.getString("loginName");
	}

	public void setLoginName(String loginName) {
		this.set("loginName", loginName);
	}

	public String getLoginPwd() {
		return this.getString("loginPwd");
	}

	public void setLoginPwd(String loginPwd) {
		this.set("loginPwd", loginPwd) ;
	}

	public Integer getState() {
		return this.getInteger("state");
	}

	public void setState(Integer state) {
		this.set("state", state);
	}

	public long getCreatetime() {
		return this.getLong("createtime");
	}

	public void setCreatetime(long createtime) {
		this.set("createtime", createtime);
	}

	public String getCreater() {
		return this.getString("creater");
	}

	public void setCreater(String creater) {
		this.set("creater", creater);
	}

	public String getSalt() {
		return this.getString("salt");
	}

	public void setSalt(String salt) {
		this.set("salt", salt);
	}

	public Integer getEncryptCount() {
		return this.getInteger("encryptCount");
	}

	public void setEncryptCount(Integer encryptCount) {
		this.set("encryptCount", encryptCount) ;
	}

	public Integer getLevel() {
		return this.getInteger("level");
	}

	public void setLevel(Integer level) {
		this.set("level", level);
	}

	public long getSort() {
		return this.getLong("sort");
	}

	public void setSort(long sort) {
		this.set("sort", sort);
	}

	public String getNickName() {
		return this.getString("nickName");
	}

	public void setNickName(String nickName) {
		this.set("nickName", nickName) ;
	}

	public String getPersonId() {
		return this.getString("personId");
	}

	public void setPersonId(String personId) {
		this.set("personId", personId) ;
	}

	public String getUserDes() {
		return this.getString("userDes");
	}

	public void setUserDes(String userDes) {
		this.set("userDes", userDes) ;
	}
	
	
	

}
