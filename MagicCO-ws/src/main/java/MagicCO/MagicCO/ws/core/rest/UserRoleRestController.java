package MagicCO.MagicCO.ws.core.rest;

import MagicCO.MagicCO.api.core.service.IShopService;
import MagicCO.MagicCO.api.core.service.IUserRoleService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/userRoles")
public class UserRoleRestController extends ORestController<IUserRoleService> {

    @Autowired
    private IUserRoleService userRoleService;

    @Override
    public IUserRoleService getService() {
        return this.userRoleService;
    }
}
