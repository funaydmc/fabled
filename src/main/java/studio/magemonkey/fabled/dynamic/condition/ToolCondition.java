/**
 * Fabled
 * studio.magemonkey.fabled.dynamic.condition.ToolCondition
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
package studio.magemonkey.fabled.dynamic.condition;

import org.bukkit.entity.LivingEntity;
import org.bukkit.inventory.EntityEquipment;

import java.util.Locale;

/**
 * A condition for dynamic skills that requires the target to have a specified potion effect
 */
public class ToolCondition extends ConditionComponent {
    private static final String MATERIAL = "material";
    private static final String TOOL     = "tool";

    @Override
    boolean test(final LivingEntity caster, final int level, final LivingEntity target) {
        final String material = settings.getString(MATERIAL, "").toUpperCase(Locale.US);
        final String tool     = "_" + settings.getString(TOOL, "").toUpperCase(Locale.US).replace("SHOVEL", "SPADE");

        final EntityEquipment equipment = target.getEquipment();
        if (equipment == null || equipment.getItemInMainHand() == null) return false;

        final String hand = equipment.getItemInMainHand().getType().name();
        return (material.equals("ANY") || hand.contains(material)) && (tool.equals("_ANY") || hand.contains(tool));
    }

    @Override
    public String getKey() {
        return "tool";
    }
}
