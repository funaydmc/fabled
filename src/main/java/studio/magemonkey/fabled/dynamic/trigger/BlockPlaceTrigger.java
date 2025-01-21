package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.entity.LivingEntity;
import org.bukkit.event.block.BlockPlaceEvent;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;

import java.util.List;

/**
 * Fabled © 2024
 * studio.magemonkey.fabled.dynamic.trigger.BlockBreakTrigger
 */
public class BlockPlaceTrigger implements Trigger<BlockPlaceEvent> {

    private String blockTypeValue = "api-block-type";
    private String blockLocValue = "api-block-loc";

    /**
     * {@inheritDoc}
     */
    @Override
    public String getKey() {
        return "BLOCK_PLACE";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Class<BlockPlaceEvent> getEvent() {
        return BlockPlaceEvent.class;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean shouldTrigger(final BlockPlaceEvent event, final int level, final Settings settings) {
        blockTypeValue = settings.getString("type-value", blockTypeValue);
        blockLocValue = settings.getString("loc-value", blockLocValue);
        final List<String> types = settings.getStringList("material");
        return types.isEmpty() || types.contains("Any")
                || types.stream()
                .anyMatch(mat -> event.getBlock().getType().name().equalsIgnoreCase(mat.replace(' ', '_')));
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void setValues(final BlockPlaceEvent event, final CastData data) {
        data.put(blockTypeValue, event.getBlock().getType().name());
        data.put(blockLocValue, event.getBlock().getLocation());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getCaster(final BlockPlaceEvent event) {
        return event.getPlayer();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(final BlockPlaceEvent event, final Settings settings) {
        return event.getPlayer();
    }
}
