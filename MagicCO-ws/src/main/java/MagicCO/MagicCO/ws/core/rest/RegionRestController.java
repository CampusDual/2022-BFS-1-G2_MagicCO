package MagicCO.MagicCO.ws.core.rest;

import MagicCO.MagicCO.api.core.service.IRegionService;
import MagicCO.MagicCO.api.core.service.IShopService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/regions")
public class RegionRestController extends ORestController<IRegionService> {

    @Autowired
    private IRegionService regionService;

    @Override
    public IRegionService getService() {
        return this.regionService;
    }
}
