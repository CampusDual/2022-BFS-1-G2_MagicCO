package MagicCO.MagicCO.ws.core.rest;

import MagicCO.MagicCO.api.core.service.IPermissionsService;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")

public class PermissionController extends ORestController<IPermissionsService> {
    @Autowired
    IPermissionsService permissionsService;

    @Override
    public IPermissionsService getService() {
        return this.permissionsService;
    }

    @RequestMapping (value = "/loadPermissions", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)

    public ResponseEntity<EntityResult> loadPermissions () {
        return new ResponseEntity<>(permissionsService.getPermissions(), HttpStatus.OK);
    }

}
