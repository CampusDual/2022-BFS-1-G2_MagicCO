package MagicCO.MagicCO.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "RegionDao")
@ConfigurationFile(
        configurationFile = "dao/RegionDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")

public class RegionDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID_REGION           = "ID_REGION";
    public static final String ATTR_REGION_NAME         = "REGION_NAME";
}
