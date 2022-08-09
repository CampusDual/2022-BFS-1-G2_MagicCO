package MagicCO.MagicCO.model.core.service;

import MagicCO.MagicCO.api.core.service.IShopService;
import MagicCO.MagicCO.model.core.dao.ShopDao;
import MagicCO.MagicCO.model.core.dao.SubscriptionDao;
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

@Service("ShopService")
@Lazy
public class ShopService implements IShopService {
    @Autowired private ShopDao shopDao;
    @Autowired private DefaultOntimizeDaoHelper daoHelper;

    @Override
    @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult shopQuery (Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException{
        return this.daoHelper.query(this.shopDao,keyMap, attrList);
    }
    @Override
    @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult shopInsert (Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return  this.daoHelper.insert(this.shopDao, attrMap);
    }

    @Override
    @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult shopUpdate (Map<String, Object> attrMap, Map<String,Object> keyMap) throws OntimizeJEERuntimeException{
        return this.daoHelper.update(this.shopDao, attrMap,keyMap);
    }

    @Override
    @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult shopDelete (Map<String,Object> keyMap) throws OntimizeJEERuntimeException{
        return this.daoHelper.delete(this.shopDao,keyMap);
    };

    //shopSubscription
    @Override
    public EntityResult shopSubscriptionQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.shopDao, keyMap, attrList, ShopDao.QUERY_SHOW_DETAILS);
    }

    @Override
    public EntityResult shopSubscriptionDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.shopDao, keyMap);
    }

    @Override
    public EntityResult shopReviewQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.shopDao, keyMap, attrList, ShopDao.QUERY_SHOW_REVIEWS);
    }
}
