<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	
	<script type="text/javascript" src="jquery/jquery-1.11.3.min.js"></script>
<script type="text/javascript">

</script>
<style>
	*{ font-size:16px;}
	img{ border:0px;}
	a {
	color: black;text-decoration: none;
}

	.menu:hover{
		color:red;
	}
</style>
</head>
<body style="padding:0;margin:0;">

<table height="60">
	<tr><td>&nbsp;</td></tr>
</table>

<table width="100%" cellpadding="0" cellspacing="0" border="0" height="307">
<tr><td valign="top" align="center" id="main_td" height="200"  class="menu">

<table width="80%" height="307" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td  align="center">
      
    <table width="120" height="74" border="0" title="信息管理">
      <tr>
        <td height="38"><div align="center">
        <a onclick="window.parent.clickCmsMenu('cms_article_admin');" href="#" title="组织机构">
        <img src="images/gzxx.jpg" />
        </a>
        </div></td>
      </tr>
      <tr>
        <td><div align="center"><a onclick="window.parent.clickCmsMenu('cms_article_admin');" href="#" title="信息管理">信息管理</a></div></td>
      </tr>
    </table>
    
    </td>
    <td  align="center"></td>
    <td  align="center">
    
    
    <table width="120" height="74" border="0">
        <tr>
          <td height="38"><div align="center">
          <a onclick="loadURL('template','/template/index.do?siteId=${site.id}','商品管理')" href="#" title="商品管理">
          <img src="images/spgl.jpg" />
          </a>
          </div></td>
        </tr>
        <tr>
          <td><div align="center"><a onclick="loadURL('template','/template/index.do?siteId=${site.id}','商品管理')" href="#">商品管理</a></div></td>
        </tr>
      </table>
      <!--    无权限显示为灰色
       <table width="120" height="74" border="1" style="position: relative;top:-124">
        <tr>
          <td height="38"><div align="center">
          <img src="images/ywrz2.jpg" />
          </div></td>
        </tr>
        <tr>
          <td><div align="center">模板管理</div></td>
        </tr>
      </table> 
        -->
        </td>
    <td align="center">&nbsp;</td>
    <td  align="center">
     <table width="120" height="74" border="0">
        <tr>
          <td height="38"><div align="center">
          <a onclick="loadURL('template','/template/index.do?siteId=${site.id}','人员管理')" href="#" title="人员管理">
          <img src="images/rygl.jpg" />
          </a>
          </div></td>
        </tr>
        <tr>
          <td><div align="center"><a onclick="loadURL('template','/template/index.do?siteId=${site.id}','人员管理')" href="#">人员管理</a></div></td>
        </tr>
      </table>
    </td>
  </tr>
    <tr height="80">
    <td align="center">&nbsp;</td>
    
    <td align="center">
     <img src="images/arrow9.jpg" />
    </td>
    <td align="center"><img src="images/arrow8.jpg" width="26" height="56" /></td>
    <td align="center"><img src="images/arrow12.jpg"/></td>
    <td align="center">&nbsp;</td>
  </tr>
  <tr>
    <td align="center">
    
    
    <table width="120" height="74" border="0">
      <tr>
        <td height="38"><div align="center">
        <a href="#" id="bxgl" title="报修管理">
        <img src="images/lmgl.jpg" />
        </a>
        </div></td>
      </tr>
      <tr>
        <td><div align="center"><a id="bxgltext" href="#">报修管理</a></div></td>
      </tr>
    </table>
    
    
    <!--无权限时显示
 <table width="120" height="74" border="0">
      <tr>
        <td height="38"><div align="center">
        <img src="images/lmgl2.jpg" />
        </div></td>
      </tr>
      <tr>
        <td><div align="center">栏目管理</div></td>
      </tr>
    </table>
      --></td>
    <td align="center"><img src="images/arrow7.jpg" width="56" height="26" /></td>
    <td align="center">
        <table width="120" height="74" border="0">
      <tr>
        <td height="38"><div align="center">
        <a onclick="loadURL('sitemanage','/site/edit.do?id=${site.id}','站点管理')" href="#" title="站点管理">
        <img src="images/bzgf.jpg" />
        </a>
        </div></td>
      </tr>
      <tr>
        <td><div align="center"><a onclick="loadURL('sitemanage','/site/edit.do?id=${site.id}','站点管理')" href="#">站点管理</a></div></td>
      </tr>
    </table>
    
     	
    
    </td>
    <td align="center"><img src="images/arrow5.jpg" width="56" height="26" /></td>
    <td align="center">
   
   
    <table width="120" height="74" border="0">
        <tr>
          <td height="38"><div align="center">
          <a href="#" id="tsgl" title="投诉管理">
          <img src="images/ywrz.jpg" />
          </a>
          </div></td>
        </tr>
        <tr>
          <td><div align="center"><a id="tsgltext" href="#">投诉管理</a></div></td>
        </tr>
     </table>
      
    </td>
  </tr> 
  <tr height="80">
    <td align="center">&nbsp;</td>
    <td align="center"><img src="images/arrow11.jpg"/></td> 
    <td align="center"><img src="images/arrow0.jpg" width="26" height="56" /></td>
    <td align="center"><img src="images/arrow10.jpg"/></td> 
    <td align="center">&nbsp;</td>
  </tr>
  <tr>
    <td align="center">

<table width="120" height="74" border="0">
      <tr>
        <td height="38"><div align="center"> 
         <a onclick="previewSite('${site.id}')" href="#" title="站点预览"> 
         <img src="images/yulan.jpg"/> 
          </a></div></td>
      </tr>
      <tr>
        <td><div align="center"><a onclick="previewSite('${site.id}')" href="#">站点预览</a></div></td>
      </tr>
    </table>

</td>
    <td align="center"></td>
    <td align="center">
     <table width="120" height="74" border="0">
      <tr>
        <td height="38"><div align="center">
        <a href="#" id="zbgl" title="周边管理">
        <img src="images/mbzrs.jpg"/>
        </a>
        </div></td>
      </tr>
      <tr>
        <td><div align="center"><a id="zbgltext" href="#">周边管理</a></div></td>
      </tr>
    </table>

    </td>
    <td align="center"></td>
    <td align="center">
    
	<table width="120" height="74" border="0">
      <tr>
        <td height="38"><div align="center">
        <a href="#" id="bmgl" title="便民管理">
        <img src="images/recycle.gif" />
        </a>
        </div></td>
      </tr>
      <tr>
        <td><div align="center"><a id="bmgltext" href="#">便民管理</a></div></td>
      </tr>
	</table>
     	


</td>
  </tr>
 
  
</table>
</td>
</tr></table>

</body>
</html>