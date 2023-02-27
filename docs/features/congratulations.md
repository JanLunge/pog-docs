---
sidebar_position: 1
---

# Layout Editor

The Layout Editor Tab lets you edit the Keyboard Layout directly in the app.
here you can manage the following:
* x/y Positions of each key
* other visual properties of the key eg. rotation, width, height
* the index that this key is assigned on the keymap
* layout variants (eg. for switching between ISO/ANSI Enter)

# Hotkeys
* When dragging the mouse over the keys while clicked you can select 1 or multiple keys to edit at the same time.
* If you keep holding down shift you can then move the selected keys.
* the arrow keys move the selected keys around
* shift + arrow keys resize the selected keys
* alt + left or right arrow selects the prev/next keys in the layout (only if just 1 key is selected)

## Rotation
for rotation you can define the rotation angle and the location around which the key(s) will be rotated. 
This location is marked with a red dot for visual reference. 

## Layout Options
Layout options can be added in the lower left list. each can have a name and an either on or off state.
:::tip Advanced 
You can create Layout options that have a select field to choose from. This is useful for adding things like 4 
separate spacebar variants etc. For this add `variants` as key in your layout option Object. It is a `string[]` of the names you will be able to choose 
:::
On each key you can then select the index of the layout option and the index of your variant.