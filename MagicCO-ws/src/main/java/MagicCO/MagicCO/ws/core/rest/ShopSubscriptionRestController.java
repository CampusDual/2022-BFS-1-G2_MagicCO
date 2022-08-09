package MagicCO.MagicCO.ws.core.rest;

import MagicCO.MagicCO.api.core.service.IShopService;
import MagicCO.MagicCO.api.core.service.IShopSubscriptionService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/shopSubscriptions")
public class ShopSubscriptionRestController extends ORestController<IShopSubscriptionService> {

    @Autowired
    private IShopSubscriptionService shopSubscriptionService;

    @Override
    public IShopSubscriptionService getService() {
        return this.shopSubscriptionService;
    }
}
