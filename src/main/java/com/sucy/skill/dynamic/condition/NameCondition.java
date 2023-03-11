/**
 * SkillAPI
 * com.sucy.skill.dynamic.condition.NameCondition
 * <p>
 * The MIT License (MIT)
 * <p>
 * Copyright (c) 2014 Steven Sucy
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
package com.sucy.skill.dynamic.condition;

import org.bukkit.entity.LivingEntity;

import java.util.regex.Pattern;

/**
 * A condition for dynamic skills that requires the target to have a specified potion effect
 */
public class NameCondition extends ConditionComponent {
    private static final String CONTAINS = "contains";
    private static final String REGEX    = "regex";
    private static final String STRING   = "str";

    @Override
    boolean test(final LivingEntity caster, final int level, final LivingEntity target) {
        boolean contains = !settings.getString(CONTAINS, "true").toLowerCase().equals("false");
        boolean regex    = settings.getString(REGEX, "false").toLowerCase().equals("true");
        String  str      = settings.getString(STRING, "");

        String name = target.getCustomName();
        return name != null && (regex
                ? Pattern.compile(str).matcher(name).find() == contains
                : name.contains(str) == contains);
    }

    @Override
    public String getKey() {
        return "name";
    }
}