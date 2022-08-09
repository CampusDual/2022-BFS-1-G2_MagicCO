package MagicCO.MagicCO.model.core.service;

import MagicCO.MagicCO.api.core.service.IShopSubscriptionService;
import MagicCO.MagicCO.model.core.dao.ShopSubscriptionDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.common.security.PermissionsProviderSecured;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("ShopSubscriptionService")
@Lazy
public class ShopSubscriptionService implements IShopSubscriptionService {
    @Autowired private ShopSubscriptionDao shopSubscriptionDao;
    @Autowired private DefaultOntimizeDaoHelper daoHelper;

    @Override
    @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult shopSubscriptionQuery (Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException{
        return this.daoHelper.query(this.shopSubscriptionDao,keyMap, attrList);
    }
    @Override
    @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult shopSubscriptionInsert (Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return  this.daoHelper.insert(this.shopSubscriptionDao, attrMap);
    }

    @Override
    @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult shopSubscriptionUpdate (Map<String, Object> attrMap, Map<String,Object> keyMap) throws OntimizeJEERuntimeException{
        return this.daoHelper.update(this.shopSubscriptionDao, attrMap,keyMap);
    }

    @Override
    @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult shopSubscriptionDelete (Map<String,Object> keyMap) throws OntimizeJEERuntimeException{
        return this.daoHelper.delete(this.shopSubscriptionDao,keyMap);
    };
}
