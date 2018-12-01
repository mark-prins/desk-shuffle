const desks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let available = [];

const setDeskName = (num, name) => {
  const desk = document.getElementById(`desk_${num}`);
  if (!desk) return false;
  desk.innerHTML = name;
  return true;
};

const shuffle = () => {
  reset();
  list = document.getElementById('list');
  values = list.value.split('\n');
  values.forEach(name => {
    if (name === '') return;
    const index = Math.floor(Math.random() * available.length);
    const num = available[index];
    if (!setDeskName(num, `${name}`)) return;
    available = available.slice(0, index).concat(available.slice(index + 1));
  });
};

const reset = () => {
  available = desks.slice(0);
  const assignedInput = document.getElementById('assigned');
  if (assignedInput) {
    const assigned = assignedInput.value.split(',');
    available = available.filter(a => !assigned.some(b => a.toString() === b));
  }
  desks.forEach(n => setDeskName(n, ''));
};
