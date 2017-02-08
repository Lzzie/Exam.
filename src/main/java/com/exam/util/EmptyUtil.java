package com.exam.util;

import java.util.Map;

public class EmptyUtil {
	
	public static boolean isEmpty(Map<String, Object> map, String key){
		
		if(map.get(key) == null || map.get(key).toString().equals("")) return true;
		
		return false;
		
	}

}
