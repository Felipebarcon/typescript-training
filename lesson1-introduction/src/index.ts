//*****************************************//
//*****************************************//
// DECORATEURS

// function Component(target: any) {
//   console.log(" LOG : Component MyComponent ");
// }

function ComponentFactory({
  selector,
  template,
}: {
  template: string;
  selector: string;
}) {
  const elem = document.querySelector(selector);
  elem.innerHTML = template;
  return (target: any) => {};
}

@ComponentFactory({
  template: "<h1>Hello</h1>",
  selector: "app",
})
class MyComponent {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const foo = new MyComponent("jean");
const bar = new MyComponent("marie");
