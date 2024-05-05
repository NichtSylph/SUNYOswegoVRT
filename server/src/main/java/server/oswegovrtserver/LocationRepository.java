package server.oswegovrtserver;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {

    List<Location> findByPointerLocationNumber(Integer pointerLocationNumber);
    Optional<Location> findBySublocation(BigDecimal sublocation);
}