//*****************************************//
//*****************************************//
// DECORATEURS

function Component(target: any) {
  console.log(target);
}

@Component
class MyComponent {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
