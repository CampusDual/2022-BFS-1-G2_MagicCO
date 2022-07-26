package MagicCO.MagicCO.ws.core.rest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import MagicCO.MagicCO.api.core.service.ISubscriptionServiceService;

import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/subscriptionsService")
public class SubscriptionServiceRestController extends ORestController<ISubscriptionServiceService> {

 @Autowired
 private ISubscriptionServiceService subscriptionServiceService;

 @Override
 public ISubscriptionServiceService getService() {
  return this.subscriptionServiceService;
 }
 
}