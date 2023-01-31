// Strictly typing
const numbers: number[] = [9, 2, 3, 4, 6];

// using an interface to strictly type an object
interface Student {
  name: string;
  city: string;
  zipcode?: string; // The question make makes this key:value optional
}

const Mauro: Student = {
  name: "Mauro",
  city: "Atl baby",
};

const Corey: Student = {
  name: "Corey",
  city: "Atl",
  zipcode: "123 Main St.",
};
