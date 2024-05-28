# Diving Deep into React Concepts and Best Practices
1. Components Instances work in Isolation: when two component instances are rendered onto the main component, effects on one instance do not affect the other instance.

2. Using function form to update a state that is based on the previous state: setIsEditing(editing => !editing) is the best way to do it because states are updated quickly without delay rather than setIsEditing(!isEditing).

3. Two way binding
   
4. THE CONCEPT OF IMMUTABILITY (Updating objects state immutably)

6. Lifting State Up

7. Avoiding Intersecting States

8. Reducing state management by deriving states from available state and also by using helper functions.
