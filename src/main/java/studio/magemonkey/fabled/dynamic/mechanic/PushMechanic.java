/**
 * Fabled
 * studio.magemonkey.fabled.dynamic.mechanic.PushMechanic
 * <p>
 * The MIT License (MIT)
 * <p>
 * Copyright (c) 2024 MageMonkeyStudio
 * <p>
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software") to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * <p>
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * <p>
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package studio.magemonkey.fabled.dynamic.mechanic;

import org.bukkit.Bukkit;
import org.bukkit.Location;
import org.bukkit.entity.LivingEntity;
import org.bukkit.util.Vector;
import studio.magemonkey.fabled.api.event.SkillPushEvent;
import studio.magemonkey.fabled.dynamic.target.RememberTarget;

import java.util.List;

/**
 * Launches the target in a given direction relative to their forward direction
 */
public class PushMechanic extends MechanicComponent {
    private static final String SPEED  = "speed";
    private static final String SOURCE = "source";

    @Override
    public String getKey() {
        return "push";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean execute(LivingEntity caster, int level, List<LivingEntity> targets, boolean force) {
        if (targets.isEmpty()) return false;

        final double speed = parseValues(caster, SPEED, level, 3.0);
        final String type  = settings.getString("type", "scaled").toLowerCase();

        final List<LivingEntity> sources = RememberTarget.remember(caster, settings.getString(SOURCE, "_none"));
        final Location           center  = sources.isEmpty() ? caster.getLocation() : sources.get(0).getLocation();

        boolean worked = false;
        for (LivingEntity target : targets) {
            final Vector vel = target.getLocation().subtract(center).toVector();
            if (vel.lengthSquared() == 0) {
                continue;
            } else if (type.equals("inverse")) {
                vel.multiply(speed);
            } else if (type.equals("fixed")) {
                vel.multiply(speed / vel.length());
            } else { // "scaled"
                vel.multiply(speed / vel.lengthSquared());
            }
            vel.setY(vel.getY() / 5 + 0.5);

            SkillPushEvent event = new SkillPushEvent(caster, target, vel);
            Bukkit.getPluginManager().callEvent(event);
            if (!event.isCancelled()) {
                target.setVelocity(event.getVelocity());
            }

            worked = true;
        }
        return worked;
    }
}
