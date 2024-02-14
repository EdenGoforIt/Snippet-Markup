# index

## Instant

If you have a meeting where everyone is expected to dial in, it essentially has no location, so the start time is an ‘instant’.

## Local

If at least a few people will be joining in person in a particular location, you might consider treating it as a ‘local time’.

Local times should be stored as ‘time zone aware’ objects, with the event’s time zone embedded in the date/time object. there are some big name databases that don’t support time zone aware objects. In that case you should store both the date in UTC and the time zone, and make sure your application layer does the necessary conversions (as close to the database as possible).when you store a time with time zone component, things can get messy if something about that time zone changes (e.g. they stop doing daylight savings).

## Global

this type of time is global, in the sense that people in any time zone can experience the event, but also local, because the actual time of the event is localized to their time zone.
