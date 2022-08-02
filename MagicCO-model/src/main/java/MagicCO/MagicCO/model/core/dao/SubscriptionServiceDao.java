package MagicCO.MagicCO.model.core.dao;
    
import org.springframework.context.annotation.Lazy; //deberíamos quitarlo
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("SubscriptionServiceDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/SubscriptionServiceDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class SubscriptionServiceDao extends OntimizeJdbcDaoSupport {
    public static final String ID_SUBSCRIPTION= "ID_SUBSCRIPTION";
       //CAMBIOS
    public static final String QUERY_SHOW_DETAILS = "details";
    //SERVICE
    public static final String ID_SERVICE= "ID_SERVICE";
 
    public static final String ID_SUBSCRIPTION_SERVICE="ID_SUBSCRIPTION_SERVICE";
}