package server.oswegovrtserver;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name = "vrtourpointlocationdata")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    @Column(name = "pointerLocationNumber")
    private Integer pointerLocationNumber;

    @Column(name = "sublocation", precision = 3, scale = 1)
    private BigDecimal sublocation;

    @NonNull
    @Column(name = "name", length = 255)
    private String name;

    @NonNull
    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @NonNull
    @Column(name = "image_url", length = 255)
    private String imageUrl;

    @Column(name = "vrtour_url", length = 255)
    private String vrtourUrl;
}
