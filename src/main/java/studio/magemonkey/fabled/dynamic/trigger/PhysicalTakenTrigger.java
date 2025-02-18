package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.entity.LivingEntity;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;
import studio.magemonkey.fabled.api.event.PhysicalDamageEvent;

/**
 * Fabled © 2024
 * studio.magemonkey.fabled.dynamic.trigger.BlockBreakTrigger
 */
public class PhysicalTakenTrigger extends PhysicalTrigger {

    private String takenValue = "api-taken";

    /**
     * {@inheritDoc}
     */
    @Override
    public String getKey() {
        return "TOOK_PHYSICAL_DAMAGE";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getCaster(final PhysicalDamageEvent event) {
        return event.getTarget();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(final PhysicalDamageEvent event, final Settings settings) {
        return isUsingTarget(settings) ? event.getDamager() : event.getTarget();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean shouldTrigger(final PhysicalDamageEvent event, final int level, final Settings settings) {
        takenValue = settings.getString("taken-value", takenValue);
        return super.shouldTrigger(event, level, settings);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void setValues(final PhysicalDamageEvent event, final CastData data) {
        data.put(takenValue, event.getDamage());
    }
}
