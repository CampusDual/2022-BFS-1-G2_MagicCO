package MagicCO.MagicCO.api.core.service;
import java.util.List;
import java.util.Map;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ISubscriptionService{

 // Subscription
 public EntityResult subscriptionQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
 public EntityResult subscriptionInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
 public EntityResult subscriptionUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
 public EntityResult subscriptionDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;


public EntityResult subscriptionServiceQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
public EntityResult subscriptionServiceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}

