package MagicCO.MagicCO.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;


public interface IRegionService {

	public EntityResult regionQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
}
