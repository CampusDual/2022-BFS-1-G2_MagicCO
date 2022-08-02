package MagicCO.MagicCO.model.core.service;

import MagicCO.MagicCO.api.core.service.IRegionService;
import MagicCO.MagicCO.api.core.service.IShopService;
import MagicCO.MagicCO.model.core.dao.RegionDao;
import MagicCO.MagicCO.model.core.dao.ShopDao;
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

@Service("RegionService")
@Lazy
public class RegionService implements IRegionService {
    @Autowired private RegionDao regionDao;
    @Autowired private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult regionQuery (Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException{
        return this.daoHelper.query(this.regionDao,keyMap, attrList);
    };
}
