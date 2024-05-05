package server.oswegovrtserver;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    public List<Location> getLocationsByPointerLocationNumber(Integer pointerLocationNumber) {
        System.out.println("Fetching locations for pointerLocationNumber: " + pointerLocationNumber);
        return locationRepository.findByPointerLocationNumber(pointerLocationNumber);
    }

    public List<Location> getLocationsWithSublocation() {
        return getAllLocations().stream()
                .filter(location -> location.getSublocation() != null)
                .collect(Collectors.toList());
    }
}