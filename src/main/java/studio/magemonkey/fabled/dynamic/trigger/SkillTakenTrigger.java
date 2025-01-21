package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.entity.LivingEntity;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;
import studio.magemonkey.fabled.api.event.SkillDamageEvent;

/**
 * Fabled © 2024
 * studio.magemonkey.fabled.dynamic.trigger.BlockBreakTrigger
 */
public class SkillTakenTrigger extends SkillTrigger {

    private String takenValue = "api-taken";

    /**
     * {@inheritDoc}
     */
    @Override
    public String getKey() {
        return "TOOK_SKILL_DAMAGE";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getCaster(final SkillDamageEvent event) {
        return event.getTarget();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(final SkillDamageEvent event, final Settings settings) {
        return isUsingTarget(settings) ? event.getDamager() : event.getTarget();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean shouldTrigger(final SkillDamageEvent event, final int level, final Settings settings) {
        takenValue = settings.getString("taken-value", takenValue);
        return super.shouldTrigger(event, level, settings);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void setValues(final SkillDamageEvent event, final CastData data) {
        data.put(takenValue, event.getDamage());
    }
}
