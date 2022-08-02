package MagicCO.MagicCO.model.core.dao;
    
import org.springframework.context.annotation.Lazy; //deberíamos quitarlo
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("SubscriptionDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/SubscriptionDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class SubscriptionDao extends OntimizeJdbcDaoSupport {
    public static final String ID_SUBSCRIPTION= "ID_SUBSCRIPTION";
    public static final String NAME_SUBSCRIPTION = "NAME";
    public static final String PRICE_SUBSCRIPTION = "PRICE";
    public static final String DISCOUNT = "DISCOUNT";
    //CAMBIOS
    public static final String QUERY_SHOW_DETAILS = "details";
    //SERVICE
    public static final String ID_SERVICE= "ID_SERVICE";
    public static final String NAME_SERVICE = "NAME";
    public static final String PRICE_SERVICE = "PRICE";
    public static final String ID_SUBSCRIPTION_SERVICE="ID_SUBSCRIPTION_SERVICE";
}