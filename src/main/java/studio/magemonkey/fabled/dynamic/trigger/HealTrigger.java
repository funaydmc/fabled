package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.entity.LivingEntity;
import org.bukkit.event.entity.EntityRegainHealthEvent;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;

public class HealTrigger implements Trigger<EntityRegainHealthEvent> {

    private String healValue = "api-heal";

    /**
     * {@inheritDoc}
     */
    @Override
    public String getKey() {
        return "HEAL";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Class<EntityRegainHealthEvent> getEvent() {return EntityRegainHealthEvent.class;}

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean shouldTrigger(EntityRegainHealthEvent event, int level, Settings settings) {
        healValue = settings.getString("heal-value", healValue);
        final double min = settings.getDouble("heal-min");
        final double max = settings.getDouble("heal-max");
        return event.getAmount() >= min && event.getAmount() <= max;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void setValues(EntityRegainHealthEvent event, CastData data) {
        data.put(healValue, event.getAmount());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getCaster(EntityRegainHealthEvent event) {
        return (LivingEntity) event.getEntity();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(EntityRegainHealthEvent event, Settings settings) {
        return (LivingEntity) event.getEntity();
    }
}