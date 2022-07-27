package MagicCO.MagicCO.model.core.service;

import MagicCO.MagicCO.api.core.service.IServiceService;
import MagicCO.MagicCO.model.core.dao.ServiceDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.common.security.PermissionsProviderSecured;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.context.annotation.Lazy;

import java.util.List;
import java.util.Map;

@Service("ServiceService")
@Lazy
public class ServiceService implements IServiceService {
    @Autowired private ServiceDao serviceDao;
    @Autowired private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult serviceQuery (Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException{
        return this.daoHelper.query(this.serviceDao,keyMap, attrList);
    }
    @Override
    @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult serviceInsert (Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return  this.daoHelper.insert(this.serviceDao, attrMap);
    }

    @Override
    @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult serviceUpdate (Map<String, Object> attrMap, Map<String,Object> keyMap) throws OntimizeJEERuntimeException{
        return this.daoHelper.update(this.serviceDao, attrMap,keyMap);
    }

    @Override
    @Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult serviceDelete (Map<String,Object> keyMap) throws OntimizeJEERuntimeException{
        return this.daoHelper.delete(this.serviceDao,keyMap);
    };
}
