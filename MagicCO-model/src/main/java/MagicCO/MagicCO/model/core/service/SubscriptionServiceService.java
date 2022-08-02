package MagicCO.MagicCO.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import MagicCO.MagicCO.api.core.service.ISubscriptionServiceService;
import MagicCO.MagicCO.model.core.dao.SubscriptionServiceDao;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("SubscriptionServiceService")
@Lazy

public class SubscriptionServiceService implements ISubscriptionServiceService {
    //cambios

    @Autowired private DefaultOntimizeDaoHelper daoHelper;
    //cambios
    @Autowired private SubscriptionServiceDao subscriptionServiceDao;

@Override
public EntityResult subscriptionServiceServiceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
  return this.daoHelper.delete(this.subscriptionServiceDao, keyMap);
}
@Override
public EntityResult subscriptionServiceServiceInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
 return this.daoHelper.insert(this.subscriptionServiceDao, attrMap);
}


}