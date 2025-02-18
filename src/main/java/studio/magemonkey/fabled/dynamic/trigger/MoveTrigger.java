package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.entity.LivingEntity;
import org.bukkit.event.player.PlayerMoveEvent;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;

/**
 * Fabled © 2024
 * studio.magemonkey.fabled.dynamic.trigger.BlockBreakTrigger
 */
public class MoveTrigger implements Trigger<PlayerMoveEvent> {

    private String distanceValue = "api-distance";

    /**
     * {@inheritDoc}
     */
    @Override
    public String getKey() {
        return "MOVE";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Class<PlayerMoveEvent> getEvent() {
        return PlayerMoveEvent.class;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean shouldTrigger(final PlayerMoveEvent event, final int level, final Settings settings) {
        distanceValue = settings.getString("distance-value", distanceValue);
        return event.getFrom().getWorld() == event.getTo().getWorld();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void setValues(final PlayerMoveEvent event, final CastData data) {
        final double distance = event.getTo().distance(event.getFrom());
        data.put(distanceValue, distance);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getCaster(final PlayerMoveEvent event) {
        return event.getPlayer();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(final PlayerMoveEvent event, final Settings settings) {
        return event.getPlayer();
    }
}
