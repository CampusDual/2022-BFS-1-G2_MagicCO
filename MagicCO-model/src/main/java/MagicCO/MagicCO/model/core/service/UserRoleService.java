package MagicCO.MagicCO.model.core.service;

import MagicCO.MagicCO.api.core.service.IShopService;
import MagicCO.MagicCO.api.core.service.IUserRoleService;
import MagicCO.MagicCO.model.core.dao.ShopDao;
import MagicCO.MagicCO.model.core.dao.UserRoleDao;
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

@Service("UserRoleService")
@Lazy
public class UserRoleService implements IUserRoleService {
    @Autowired private UserRoleDao userRoleDao;
    @Autowired private DefaultOntimizeDaoHelper daoHelper;

    @Override
   // @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult userRoleInsert (Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.userRoleDao, attrMap);
    }

}
