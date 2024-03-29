package MagicCO.MagicCO.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "ShopDao")
@ConfigurationFile(
        configurationFile = "dao/ShopDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")

public class ShopDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID_SHOP          = "ID_SHOP";
    public static final String ATTR_REGION           = "REGION";
    public static final String ATTR_NAME_SHOP        = "NAME";
    public static final String ATTR_LONGITUDE        = "LONGITUDE";
    public static final String ATTR_LATITUDE         = "LATITUDE";
    public static final String ATTR_USER_ID          = "USER_ID";
    public static final String ATTR_DESCRIPTION      = "DESCRIPTION";
    public static final String ATTR_START_DATE_SHOP            = "START_DATE";
    public static final String ATTR_ID_CURRENT_SUBSCRIPTION       = "ID_CURRENT_SUBSCRIPTION";

    //complex
    public static final String QUERY_SHOW_DETAILS               = "shopSubscriptionDetails";
    public static final String QUERY_SHOW_REVIEWS               = "shopReviewDetails";

//    public static final String ATTR_NAME_SUBSCRIPTION           = "NAME";
//    public static final String ATTR_START_DATE_SUBSCRIPTION     = "START_DATE";
//    public static final String ID_SHOP_SUBSCRIPTION             = "ID_SHOP_SUBSCRIPTION";

}
