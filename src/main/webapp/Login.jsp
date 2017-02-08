<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="<%=path %>/css/Logincss.css" />

<title>欢迎使用CMS管理系统</title>

</head>

<body>

<div class="all">
<div class="top">
<div class="huan">
欢迎进入本CMS 管理系统
</div>
</div>

<div class="you">
本网站所收集的部分公开资料来源于互联网，转载的目的在于传递更多信息及用于网络分享，并不代表本站赞同其观点和对其真实性负责，也不构成任何其他建议。本站部分作品是由网友自主投稿和发布、编辑整理上传，对此类作品本站仅提供交流平台，不为其版权负责。如果您发现网站上有侵犯您的知识产权的作品，请与我们取得联系，我们会及时修改或删除。
本网站所提供的信息，只供参考之用。本网站不保证信息的准确性、有效性、及时性和完整性。本网站及其雇员一概毋须以任何方式就任何信息传递或传送的失误、不准确或错误，对用户或任何其他人士负任何直接或间接责任。在法律允许的范围内，本网站在此声明，不承担用户或任何人士就使用或未能使用本网站所提供的信息或任何链接所引致的任何直接、间接、附带、从属、特殊、惩罚性或惩戒性的损害赔偿。
</div>

<div class="zuo">
<div class="login">
<form action="checkLogin" method="post">
			<div class="entry">
				<label for="username">用户名：</label><input type="text" name="loginName" style="width:120px" placeholder="请输入用户名" /><br /><br />
				<label for="userpwd">密&nbsp;&nbsp;&nbsp;码：</label><input type="password" name="loginPwd" style="width:120px" placeholder="请输入密码"/><br /><br />
				<span><input id="dl" type="submit"  value="登 &nbsp;录"/></span>
		</div>
        
	  </form>
</div>
    <div class="U"><a href="#">联系管理员增加用户</a></div>
</div>

</div>


</body>
</html>