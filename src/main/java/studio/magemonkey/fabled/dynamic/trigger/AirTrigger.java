package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.entity.LivingEntity;
import org.bukkit.event.entity.EntityAirChangeEvent;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;

public class AirTrigger implements Trigger<EntityAirChangeEvent> {

    @Override
    public String getKey() {
        return "AIR";
    }

    @Override
    public Class<EntityAirChangeEvent> getEvent() {return EntityAirChangeEvent.class;}

    @Override
    public boolean shouldTrigger(EntityAirChangeEvent event, int level, Settings settings) {
        final String type = settings.getString("type", "decreasing");

        final LivingEntity triggerEntity = (LivingEntity) event.getEntity();
        final int          previousAir   = triggerEntity.getRemainingAir();
        final int          newAir        = event.getAmount();


        // This only allows it to trigger whenever a bubble comes back / goes away.
        return triggerEntity.canBreatheUnderwater() != ((newAir < previousAir && type.equalsIgnoreCase("decreasing"))
                || (newAir > previousAir && type.equalsIgnoreCase("increasing")));
    }

    @Override
    public void setValues(EntityAirChangeEvent event, final CastData data) {

    }

    @Override
    public LivingEntity getCaster(EntityAirChangeEvent event) {
        return (LivingEntity) event.getEntity();
    }

    @Override
    public LivingEntity getTarget(EntityAirChangeEvent event, Settings settings) {
        return (LivingEntity) event.getEntity();
    }

}