package MagicCO.MagicCO.ws.core.rest;

import MagicCO.MagicCO.api.core.service.IServiceService;
import MagicCO.MagicCO.api.core.service.IShopService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/shops")
public class ShopRestController extends ORestController<IShopService> {

    @Autowired
    private IShopService shopService;

    @Override
    public IShopService getService() {
        return this.shopService;
    }
}
