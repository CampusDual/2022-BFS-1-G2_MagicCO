package MagicCO.MagicCO.model.core.service;

import MagicCO.MagicCO.api.core.service.IPermissionsService;
import MagicCO.MagicCO.model.core.dao.PermissionsDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
import com.ontimize.jee.common.services.user.UserInformation;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.*;

import static MagicCO.MagicCO.model.core.dao.PermissionsDao.ATTR_PERMISSIONS;

@Service("PermissionsService")
@Lazy


public class PermissionsService implements IPermissionsService {
    @Autowired
    DefaultOntimizeDaoHelper daoHelper;

    @Autowired
    PermissionsDao permissionsDao;

    @Override
    public EntityResult getPermissions () {
        EntityResultMapImpl entityResultMap = new EntityResultMapImpl();
        List<String> attr = new ArrayList<>();
        attr.add(ATTR_PERMISSIONS);
        Map<String,Object> map = new HashMap<>();
        String loggedUserRole = getLoggedUserRole();
        map.put("ROLENAME", loggedUserRole);
        EntityResult query = this.daoHelper.query(this.permissionsDao,map,attr);
        entityResultMap.addRecord(new HashMap<>(){{put("permission",((List) query.get(ATTR_PERMISSIONS)).get(0));}});
        return entityResultMap;
    }


    public String getLoggedUserRole() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserInformation userInformation = (UserInformation) authentication.getPrincipal();
        Collection<GrantedAuthority> authority = userInformation.getAuthorities();
        Optional<GrantedAuthority> roles = authority.stream().findFirst();
        String role = roles.get().getAuthority();
        return role;
    }
}
