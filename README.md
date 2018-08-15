# ionic-virtual-scroll-bug

there is an observable <code>messages$</code> that will get 5 new values every 1 second.
the values won't show up in <code>ion-virtual-scroll</code> unless the change has been triggered by a resize or scroll event.

try to scroll and the new entries should appear.
