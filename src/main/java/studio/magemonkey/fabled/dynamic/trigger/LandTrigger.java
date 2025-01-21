package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.entity.LivingEntity;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;
import studio.magemonkey.fabled.api.event.PlayerLandEvent;

/**
 * Fabled © 2024
 * studio.magemonkey.fabled.dynamic.trigger.BlockBreakTrigger
 */
public class LandTrigger implements Trigger<PlayerLandEvent> {

    private String distanceValue = "api-distance";

    /**
     * {@inheritDoc}
     */
    @Override
    public String getKey() {
        return "LAND";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Class<PlayerLandEvent> getEvent() {
        return PlayerLandEvent.class;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean shouldTrigger(final PlayerLandEvent event, final int level, final Settings settings) {
        distanceValue = settings.getString("distance-value", distanceValue);
        final double minDistance = settings.getDouble("min-distance", 0);
        return event.getDistance() >= minDistance;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void setValues(final PlayerLandEvent event, final CastData data) {
        data.put(distanceValue, event.getDistance());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getCaster(final PlayerLandEvent event) {
        return event.getPlayer();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(final PlayerLandEvent event, final Settings settings) {
        return event.getPlayer();
    }
}
