# Diving Deep into React Concepts and Best Practices
1. Components Instances work in Isolation: when two component instances are rendered onto the main component, effects on one instance do not affect the other instance.
2. Using function form to update a state that is based on the previous state: setIsEditing(editing => !editing) is the best way to do it because states are updated quickly without delay rather than setIsEditing(!isEditing).
