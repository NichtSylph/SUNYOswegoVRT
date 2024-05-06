package server.oswegovrtserver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://moxie.cs.oswego.edu:26885")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("/locations")
    public List<Location> getAllLocations() {
        return locationService.getAllLocations();
    }

    @GetMapping("/locations/{pointerLocationNumber}")
    public List<Location> getLocationsByPointerLocationNumber(@PathVariable Integer pointerLocationNumber) {
        return locationService.getLocationsByPointerLocationNumber(pointerLocationNumber);
    }
}
