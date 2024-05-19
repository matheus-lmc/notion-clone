export const initialContent = `<section id="main" class="container">
<h1>Understanding SOLID Principles in Object-Oriented Design</h1>
<p>
  When it comes to software development, writing clean and maintainable
  code is crucial. One of the best ways to achieve this is by adhering
  to the SOLID principles. These principles, introduced by Robert C.
  Martin, are a set of guidelines that can help developers design more
  understandable, flexible, and maintainable software.
</p>

<h2>What are SOLID Principles?</h2>
<p>SOLID is an acronym that stands for:</p>
<ul>
  <li>
    <strong>S</strong>ingle Responsibility Principle (SRP)
  </li>
  <li>
    <strong>O</strong>pen/Closed Principle (OCP)
  </li>
  <li>
    <strong>L</strong>iskov Substitution Principle (LSP)
  </li>
  <li>
    <strong>I</strong>nterface Segregation Principle (ISP)
  </li>
  <li>
    <strong>D</strong>ependency Inversion Principle (DIP)
  </li>
</ul>

<h3>Single Responsibility Principle (SRP)</h3>
<p>
  The Single Responsibility Principle states that a class should have
  only one reason to change, meaning it should have only one job or
  responsibility. This helps in making the class more understandable and
  easier to maintain.
</p>
<p>
  <em>Example:</em> If a class handles both user authentication and
  logging, these responsibilities should be separated into different
  classes.
</p>

<h3>Open/Closed Principle (OCP)</h3>
<p>
  The Open/Closed Principle states that software entities should be open
  for extension but closed for modification. This means that the
  behavior of a module can be extended without modifying its source
  code.
</p>
<p>
  <em>Example:</em> Using interfaces or abstract classes allows new
  functionality to be added by creating new classes that implement these
  interfaces or extend these abstract classes.
</p>

<h3>Liskov Substitution Principle (LSP)</h3>
<p>
  The Liskov Substitution Principle states that objects of a superclass
  should be replaceable with objects of a subclass without affecting the
  correctness of the program. This ensures that a subclass can stand in
  for its superclass.
</p>
<p>
  <em>Example:</em> If a program expects an object of class Animal, it
  should be able to use an object of class Dog (which extends Animal)
  without any issues.
</p>

<h3>Interface Segregation Principle (ISP)</h3>
<p>
  The Interface Segregation Principle states that a client should not be
  forced to depend on interfaces it does not use. This means creating
  smaller, more specific interfaces rather than a large, general-purpose
  interface.
</p>
<p>
  <em>Example:</em> Instead of having one large interface for all
  actions an employee can perform, create separate interfaces for
  different roles (e.g., IWorker, IManager).
</p>

<h3>Dependency Inversion Principle (DIP)</h3>
<p>
  The Dependency Inversion Principle states that high-level modules
  should not depend on low-level modules. Both should depend on
  abstractions. Additionally, abstractions should not depend on details;
  details should depend on abstractions.
</p>
<p>
  <em>Example:</em> Instead of a high-level class directly instantiating
  a low-level class, it should depend on an interface or abstract class
  that the low-level class implements.
</p>

<h2>Conclusion</h2>
<p>
  By adhering to SOLID principles, developers can create systems that
  are easier to understand, maintain, and extend. These principles are a
  cornerstone of good object-oriented design and can lead to more robust
  and scalable software.
</p>
</section>`;
