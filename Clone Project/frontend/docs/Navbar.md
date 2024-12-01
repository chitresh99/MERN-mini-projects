# Navbar

sticky: Makes the element "sticky," meaning it sticks to the viewport at the defined position (here, top-0) when scrolling.

top-0: Positions the sticky element at the very top of the viewport.

z-50: Sets the z-index to 50, ensuring this element appears above most others.

py-3: Adds vertical padding of 3 (default is 0.75rem or 12px) to the element.

backdrop-blur-lg: Applies a large blur effect to the backdrop behind the element (useful for glass-like effects).

border-b: Adds a bottom border to the element.

border-neutral-700/80: Colors the border with a neutral gray tone at 80% opacity.


Whent to use :
Padding :- Inside the element, to increase clickable areas, to create visual space

Margin :- Margin creates space outside an element, between the element and neighboring elements.


```
This will only work on large devices
hidden lg:flex ml-14 space-x-12

```
Map syntax

```
<ul className='hidden lg:flex ml-14 space-x-12'>
        {navItems.map((item,index)=>(
            <li>
                
            </li>
        ))}
        </ul>


```