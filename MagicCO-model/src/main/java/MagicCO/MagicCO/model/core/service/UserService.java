package MagicCO.MagicCO.model.core.service;


import java.sql.Timestamp;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import MagicCO.MagicCO.api.core.service.IUserService;
import MagicCO.MagicCO.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("UserService")
public class UserService implements IUserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	public void loginQuery(Map<String, Object> keyMap, List<String> attrList) {
	}

	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult userQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.userDao, keyMap, attrList);
	}

	public EntityResult userInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.userDao, attrMap);
	}

	public EntityResult userUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
	throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.userDao, attrMap, keyMap);
	}

	public EntityResult userDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		Map<Object, Object> attrMap = new HashMap<>();
		attrMap.put("user_down_date", new Timestamp(Calendar.getInstance().getTimeInMillis()));
		return this.daoHelper.delete(this.userDao, keyMap);
	}

}