/**
 * Fabled
 * studio.magemonkey.fabled.listener.GUIToolListener
 * <p>
 * The MIT License (MIT)
 * <p>
 * Copyright (c) 2024 MageMonkeyStudio
 * <p>
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
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
package studio.magemonkey.fabled.listener;

import org.bukkit.event.EventHandler;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.inventory.InventoryCloseEvent;
import org.bukkit.event.inventory.InventoryDragEvent;
import org.bukkit.event.player.PlayerQuitEvent;
import org.bukkit.inventory.Inventory;
import studio.magemonkey.codex.compat.VersionManager;
import studio.magemonkey.fabled.gui.tool.GUIHolder;
import studio.magemonkey.fabled.gui.tool.ToolMenu;

public class ToolListener extends FabledListener {
    @EventHandler
    public void onClick(InventoryClickEvent event) {
        if (event.getInventory().getHolder() instanceof ToolMenu) {
            if (event.getAction().name().startsWith("DROP"))
                event.setCancelled(true);
            else
                ((ToolMenu) event.getInventory().getHolder()).handleClick(event);
        } else if (event.getInventory().getHolder() instanceof GUIHolder)
            ((GUIHolder<?>) event.getInventory().getHolder()).handleClick(event);
    }

    @EventHandler
    public void onDrag(InventoryDragEvent event) {
        if (event.getInventory().getHolder() instanceof ToolMenu)
            event.setCancelled(true);
        else if (event.getInventory().getHolder() instanceof GUIHolder)
            ((GUIHolder<?>) event.getInventory().getHolder()).handleDrag(event);
    }

    @EventHandler
    public void onClose(InventoryCloseEvent event) {
        if (event.getInventory().getHolder() instanceof ToolMenu) {
            event.getPlayer().setItemOnCursor(null);
            ((ToolMenu) event.getInventory().getHolder()).restore();
        } else if (event.getInventory().getHolder() instanceof GUIHolder)
            ((GUIHolder<?>) event.getInventory().getHolder()).handleClose(event);
    }

    @EventHandler
    public void onQuit(PlayerQuitEvent event) {
        Inventory top = VersionManager.getCompat().getTopInventory(event.getPlayer());
        if (top.getHolder() instanceof ToolMenu) {
            event.getPlayer().setItemOnCursor(null);
            ((ToolMenu) top.getHolder()).restore();
        }
    }
}
