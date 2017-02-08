package com.exam.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.exam.bean.Pos;
import com.exam.service.PosService;

/***
 * 
 * @描述： 岗位管理
 * @author lzzie
 * @date 2016年1月6日 下午3:10:53
 * @version 1.0
 */

@Controller
@RequestMapping(value ="/exam/pos")
public class PosController {

	private Map<String, Object> result;
	
	@Resource
	private PosService posService;
	//增加岗位
	@RequestMapping(value="/addPos")
	public @ResponseBody String addPos(@ModelAttribute Pos pos){
		result= new HashMap<String, Object>();
		result.put("success", posService.addPos(pos));
		return JSON.toJSONString(result);
	}
    //查询岗位
	@RequestMapping(value = "/getPositions")
	public @ResponseBody String  getPositions(@RequestParam Map<String, Object> params){
		
		System.out.println("orgId==========="+params.get("orgId"));
		
		result= new HashMap<String, Object>();
		
		result.put("list", posService.getPositions(params));
		
		return JSON.toJSONString(result);
	}
	
	
	//删除岗位
		@RequestMapping(value = "/delPos", method={RequestMethod.POST, RequestMethod.GET})
		public  @ResponseBody  String delOrgType(@RequestParam Map<String, Object> params){
			return posService.delPos(params)?"删除成功！":"删除失败！";
		}
	
}
