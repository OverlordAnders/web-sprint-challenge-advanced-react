# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. What are the main differences between a stateful and a functional component?

Stateful components have state while functional components don't

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called when the component first renders while the componentWillUpdate is called when there is a change to props or state. After doing some reading both of these methods are considered legacy and should be avoided.

3. Define stateful logic.

stateful logic is logic inside of a component. 

4. What are the three step of creating a successful test? What is done in each phase?

Arrange- this is where you render the component.

Act- this is where we would look for a certain action or word/phrase

Assert- this is where we would verify that would we were looking for is rendered.