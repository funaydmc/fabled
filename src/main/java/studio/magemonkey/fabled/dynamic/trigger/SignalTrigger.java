package studio.magemonkey.fabled.dynamic.trigger;

import org.bukkit.entity.LivingEntity;
import studio.magemonkey.fabled.api.CastData;
import studio.magemonkey.fabled.api.Settings;
import studio.magemonkey.fabled.api.event.SignalEmitEvent;

import java.util.List;
import java.util.Objects;

public class SignalTrigger implements Trigger<SignalEmitEvent> {

    private String argValue = "api-arg";

    /**
     * {@inheritDoc}
     */
    @Override
    public String getKey() {
        return "signal";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Class<SignalEmitEvent> getEvent() {
        return SignalEmitEvent.class;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean shouldTrigger(SignalEmitEvent event, int level, Settings settings) {
        argValue = settings.getString("arg-value", argValue);
        return Objects.equals(settings.getString("signal"), event.getSignal());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void setValues(SignalEmitEvent event, final CastData data) {
        List<Object> arguments = event.getArguments();
        for (int i = 0; i < arguments.size(); i++) {
            Object arg = arguments.get(i);
            if (i == 0) data.put(argValue, arg);
            data.put(String.format(argValue + "[%d]", i), arg);
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getCaster(SignalEmitEvent event) {
        return event.isSelfHandling() ? event.getEmitter() : event.getReceiver();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public LivingEntity getTarget(SignalEmitEvent event, Settings settings) {
        return settings.getBool("target", false) ? event.getReceiver() : event.getEmitter();
    }
}
