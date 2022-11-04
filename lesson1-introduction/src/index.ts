//*****************************************//
//*****************************************//
// DECORATEURS

function Component(target: any) {
  console.log(" LOG : Component MyComponent ");
}

function LogFactory() {
  console.log("in  log factory");
  return Component;
}

function ComponentFactory({
  selector,
  template,
}: {
  template: string;
  selector: string;
}) {
  console.log("in component factory");
  const elem = document.querySelector(selector);
  elem.innerHTML = template;
  return (target: any) => {
    console.log("decorator component");
  };
}

function Method(
  target: any,
  propName: string,
  propertyDescriptor: PropertyDescriptor
) {
  return {
    value: function () {
      if (this.name) {
        propertyDescriptor.value.call(this);
      } else {
        console.log("no name");
      }
    },
  };
}

function Method2(
  target: any,
  propName: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log({
    target,
    propName,
    propertyDescriptor,
  });
}

// @LogFactory()
// @ComponentFactory({
//   template: "<h1>Hello</h1>",
//   selector: "app",
// })
class MyComponent {
  public name: string;

  @Method
  public greeting() {
    console.log(`Hello: ${this.name}`);
  }

  @Method2
  get fancyName() {
    return `Hello Monsieur ${this.name}`;
  }

  constructor(name?: string) {
    this.name = name;
  }
}

const foo = new MyComponent("Jean");
const bar = new MyComponent("marie");
foo.greeting();
