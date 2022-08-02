package MagicCO.MagicCO.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;


public interface IShopService {

	public EntityResult shopQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
	public EntityResult shopInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	public EntityResult shopUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult shopDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

}
