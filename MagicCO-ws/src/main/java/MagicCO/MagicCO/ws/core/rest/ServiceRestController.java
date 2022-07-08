package MagicCO.MagicCO.ws.core.rest;

import MagicCO.MagicCO.api.core.service.IServiceService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/services")
public class ServiceRestController extends ORestController<IServiceService> {

    @Autowired
    private IServiceService serviceService;

    @Override
    public IServiceService getService() {
        return this.serviceService;
    }
}
