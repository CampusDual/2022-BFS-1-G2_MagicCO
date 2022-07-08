package MagicCO.MagicCO.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;


@Lazy
@Repository(value = "ServiceDao")
@ConfigurationFile(
        configurationFile = "dao/ServiceDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")

public class ServiceDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID_SERVICE       = "ID_SERVICE";
    public static final String ATTR_ICON             = "ICON";
    public static final String ATTR_NAME             = "NAME";
    public static final String ATTR_PRICE            = "PRICE";
    public static final String ATTR_FIDELITY_POINTS  = "FIDELITY_POINTS";
    public static final String ATTR_DURATION_TIME    = "DURATION_TIME";
    public static final String ATTR_LEGALITY_STATUS  = "LEGALITY_STATUS";
    public static final String ATTR_MAGIC_STATUS     = "MAGIC_STATUS";
    public static final String ATTR_EFFICIENCY_PERCENTAGE  = "EFFICIENCY_PERCENTAGE";
    public static final String ATTR_SUCCESS_PERCENTAGE     = "SUCCESS_PERCENTAGE";
    public static final String ATTR_BONUS                  = "BONUS";
    public static final String ATTR_DESCRIPTION            = "DESCRIPTION";
}
