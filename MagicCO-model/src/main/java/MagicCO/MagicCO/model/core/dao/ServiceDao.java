package MagicCO.MagicCO.model.core.dao;
    
import org.springframework.context.annotation.Lazy; //deberíamos quitarlo
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("ServiceDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ServiceDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ServiceDao extends OntimizeJdbcDaoSupport {
    public static final String ID_SERVICE= "ID_Service";
    public static final String NAME = "NAME";
    public static final String PRICE = "PRICE";   
}