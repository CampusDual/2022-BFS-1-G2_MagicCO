package MagicCO.MagicCO.ws.core.rest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import MagicCO.MagicCO.api.core.service.ISubscriptionService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/subscriptions")
public class SubscriptionRestController extends ORestController<ISubscriptionService> {

 @Autowired
 private ISubscriptionService subscriptionService;

 @Override
 public ISubscriptionService getService() {
  return this.subscriptionService;
 }
 
}