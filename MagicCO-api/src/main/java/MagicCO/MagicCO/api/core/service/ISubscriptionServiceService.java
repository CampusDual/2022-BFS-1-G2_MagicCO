package MagicCO.MagicCO.api.core.service;
import java.util.List;
import java.util.Map;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ISubscriptionServiceService{
public EntityResult subscriptionServiceServiceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

public EntityResult subscriptionServiceServiceInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
}