package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.entity.LivingEntity;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;
import studio.magemonkey.fabled.api.event.SkillDamageEvent;

/**
 * Fabled © 2024
 * studio.magemonkey.fabled.dynamic.trigger.BlockBreakTrigger
 */
public class SkillDealtTrigger extends SkillTrigger {

    private String dealtValue = "api-dealt";

    /**
     * {@inheritDoc}
     */
    @Override
    public String getKey() {
        return "SKILL_DAMAGE";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getCaster(final SkillDamageEvent event) {
        return event.getDamager();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(final SkillDamageEvent event, final Settings settings) {
        return isUsingTarget(settings) ? event.getTarget() : event.getDamager();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean shouldTrigger(final SkillDamageEvent event, final int level, final Settings settings) {
        dealtValue = settings.getString("dealt-value", dealtValue);
        return super.shouldTrigger(event, level, settings);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void setValues(final SkillDamageEvent event, final CastData data) {
        data.put(dealtValue, event.getDamage());
    }
}
