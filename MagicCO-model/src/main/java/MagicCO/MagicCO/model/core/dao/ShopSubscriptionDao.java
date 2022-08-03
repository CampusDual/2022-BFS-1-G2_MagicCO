package MagicCO.MagicCO.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "ShopSubscriptionDao")
@ConfigurationFile(
        configurationFile = "dao/ShopSubscriptionDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")

public class ShopSubscriptionDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID_SHOP          = "ID_SHOP";
    public static final String ATTR_ID_SHOP_SUBSCRIPTION        = "ID_SHOP_SUBSCRIPTION";
    public static final String ATTR_ID_SUBSCRIPTION             = "ID_SUBSCRIPTION";
    public static final String ATTR_START_DATE        = "START_DATE";
    public static final String ATTR_END_DATE          = "END_DATE";
    public static final String ATTR_ID_STATUS         = "ID_STATUS";
}
