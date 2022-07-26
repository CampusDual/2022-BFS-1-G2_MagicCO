package MagicCO.MagicCO.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import MagicCO.MagicCO.api.core.service.ISubscriptionService;
import MagicCO.MagicCO.model.core.dao.SubscriptionDao;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("SubscriptionService")
@Lazy
public class SubscriptionService implements ISubscriptionService {
    @Autowired private DefaultOntimizeDaoHelper daoHelper;
    //cambios
    @Autowired private SubscriptionDao subscriptionDao;

    @Override
    public EntityResult subscriptionQuery(Map<String, Object> keyMap, List<String> attrList)
      throws OntimizeJEERuntimeException {
     return this.daoHelper.query(this.subscriptionDao, keyMap, attrList);
    }
   
    @Override
    public EntityResult subscriptionInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
     return this.daoHelper.insert(this.subscriptionDao, attrMap);
    }
   
    @Override
    public EntityResult subscriptionUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
      throws OntimizeJEERuntimeException {
     return this.daoHelper.update(this.subscriptionDao, attrMap, keyMap);
    }
   
    @Override
    public EntityResult subscriptionDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
     return this.daoHelper.delete(this.subscriptionDao, keyMap);
    }

    //cambios
 @Override
 public EntityResult subscriptionServiceQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
  return this.daoHelper.query(this.subscriptionDao, keyMap, attrList, SubscriptionDao.QUERY_SHOW_DETAILS);
 }

@Override
public EntityResult subscriptionServiceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
  return this.daoHelper.delete(this.subscriptionDao, keyMap);
}

}