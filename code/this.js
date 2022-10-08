const obj = {
  fn1: () => console.log(this),
  fn2: function () {
    console.log(this);
  },
};

obj.fn1(); // Window
obj.fn2(); // obj

const x = new obj.fn1(); // Error: obj.fn1 is not a constructor
const y = new obj.fn2(); // fn2 {}
