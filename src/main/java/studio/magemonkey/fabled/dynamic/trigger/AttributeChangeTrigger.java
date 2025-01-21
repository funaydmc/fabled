package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.entity.LivingEntity;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;
import studio.magemonkey.fabled.api.event.PlayerAttributeChangeEvent;

import java.util.List;

public class AttributeChangeTrigger implements Trigger<PlayerAttributeChangeEvent> {

    private String attributeValue = "api-attribute";
    private String changeValue = "api-change";
    private String valueValue = "api-value";

    /**
     * {@inheritDoc}
     */
    @Override
    public String getKey() {
        return "ATTRIBUTE_CHANGE";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Class<PlayerAttributeChangeEvent> getEvent() {
        return PlayerAttributeChangeEvent.class;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean shouldTrigger(final PlayerAttributeChangeEvent event, final int level, final Settings settings) {
        attributeValue = settings.getString("attribute-value", attributeValue);
        changeValue = settings.getString("change-value", changeValue);
        valueValue = settings.getString("value-value", valueValue);
        List<String> attrs = settings.getStringList("attr");
        if (attrs.isEmpty() || attrs.get(0).equals("Any")) return true;

        return attrs.stream().anyMatch(attr -> attr.equalsIgnoreCase(event.getAttribute()));
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void setValues(final PlayerAttributeChangeEvent event, final CastData data) {
        data.put(attributeValue, event.getAttribute());
        data.put(changeValue, event.getChange());
        data.put(valueValue,
                event.getPlayerData().getInvestedAttributeStage(event.getAttribute()) + event.getChange());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getCaster(final PlayerAttributeChangeEvent event) {
        return event.getPlayer();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(final PlayerAttributeChangeEvent event, final Settings settings) {
        return event.getPlayer();
    }

}
