/**
 * Fabled
 * studio.magemonkey.fabled.api.event.ItemProjectileHitEvent
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
package studio.magemonkey.fabled.api.event;

import org.bukkit.entity.LivingEntity;
import org.bukkit.event.Event;
import org.bukkit.event.HandlerList;
import studio.magemonkey.fabled.api.projectile.ItemProjectile;

/**
 * <p>An event for when an item projectile hits something.</p>
 */
public class ItemProjectileHitEvent extends Event {
    private static final HandlerList handlers = new HandlerList();

    private final ItemProjectile projectile;
    private final LivingEntity   target;

    /**
     * <p>Initializes a new event.</p>
     *
     * @param projectile the projectile that hit something
     * @param target     the thing that the projectile hit
     */
    public ItemProjectileHitEvent(ItemProjectile projectile, LivingEntity target) {
        this.projectile = projectile;
        this.target = target;
    }

    /**
     * <p>Retrieves the projectile that hit something.</p>
     *
     * @return the projectile that hit something
     */
    public ItemProjectile getProjectile() {
        return projectile;
    }

    /**
     * <p>Retrieves the thing that was hit by the projectile.</p>
     *
     * @return the thing hit by the projectile
     */
    public LivingEntity getTarget() {
        return target;
    }

    /**
     * <p>Bukkit method for taking care of the event handlers.</p>
     *
     * @return list of event handlers
     */
    @Override
    public HandlerList getHandlers() {
        return handlers;
    }

    /**
     * <p>Bukkit method for taking care of the event handlers.</p>
     *
     * @return list of event handlers
     */
    public static HandlerList getHandlerList() {
        return handlers;
    }
}
