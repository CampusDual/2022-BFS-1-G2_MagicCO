package MagicCO.MagicCO.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Lazy
@Repository(value = "PermissionsDao")
@ConfigurationFile(
        configurationFile = "dao/PermissionsDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")

public class PermissionsDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_PERMISSIONS       = "PERMISSIONS";
}
