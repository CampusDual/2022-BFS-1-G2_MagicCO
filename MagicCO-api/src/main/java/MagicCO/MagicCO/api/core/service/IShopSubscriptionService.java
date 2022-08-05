package MagicCO.MagicCO.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;


public interface IShopSubscriptionService {

	public EntityResult shopSubscriptionQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
	public EntityResult shopSubscriptionInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	public EntityResult shopSubscriptionUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult shopSubscriptionDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

}
